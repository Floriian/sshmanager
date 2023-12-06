package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"

	tea "github.com/charmbracelet/bubbletea"
	"golang.org/x/crypto/ssh"
)

type Hosts struct {
	Hosts []Host `json:"hosts"`
}

type Host struct {
	Name     string `json:"name"`
	Address  string `json:"address"`
	Port     int    `json:"port"`
	Password string `json:"password"`
	Username string `json:"username"`
	Command  string `json:"command"`
	Pem      string `json:"pem"`
}

type Model struct {
	hosts    Hosts
	cursor   int
	selected map[int]struct{}
}

func loadServers() Model {
	jsoFile, err := os.Open("hosts.json")
	if err != nil {
		fmt.Println(err)
	}

	bytes, _ := io.ReadAll(jsoFile)

	var loadedHosts Hosts

	json.Unmarshal(bytes, &loadedHosts)

	return Model{
		hosts:    Hosts{loadedHosts.Hosts},
		selected: make(map[int]struct{}),
	}
}

func (m Model) Init() tea.Cmd {
	return nil
}

func (m Model) View() string {

	s := ""
	for i, server := range m.hosts.Hosts {
		cursor := " "
		if m.cursor == i {
			cursor = "x"
		}

		s += fmt.Sprintf("[%s] %s\n", cursor, server.Name)
	}
	return s
}

func initialModel() Model {
	idk := loadServers()
	return Model{
		hosts: idk.hosts,
	}
}

func (m Model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {

	case tea.KeyMsg:
		switch msg.String() {
		case "ctrl+c", "q":
			return m, tea.Quit
		case "up":
			if m.cursor > 0 {
				m.cursor--
			}
		case "down":
			if m.cursor < len(m.hosts.Hosts)-1 {
				m.cursor++
			}
		case "enter":
			selectedItem := m.hosts.Hosts[m.cursor]

			config := &ssh.ClientConfig{
				User: selectedItem.Username,
				Auth: []ssh.AuthMethod{
					ssh.Password(selectedItem.Password),
				},
				HostKeyCallback: ssh.InsecureIgnoreHostKey(),
			}

			str := fmt.Sprintf("%s:%d", selectedItem.Address, selectedItem.Port)

			client, err := ssh.Dial("tcp", str, config)
			if err != nil {
				log.Fatal("Error asd", err)
			}

			session, err := client.NewSession()
			if err != nil {
				log.Fatal("Session errror", err)
			}

			defer session.Close()

			b, err := session.CombinedOutput(selectedItem.Command)
			if err != nil {
				log.Fatal("Failed to run command: ", err)
			}

			fmt.Println(string(b))

		}
	}
	return m, nil
}

func main() {
	p := tea.NewProgram(initialModel())

	if _, err := p.Run(); err != nil {
		fmt.Printf("Error %v", err)
		os.Exit(1)
	}
}
