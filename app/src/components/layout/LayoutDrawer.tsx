import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { routes } from "@/app";
import { To, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

interface Props {
    children: React.ReactNode;
}
export function LayoutDrawer({ children }: Props) {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const links = routes[0].children.
        filter((route) => route.showOnDrawer).
        map((route) =>
            ({ path: route.path, name: route.name ? route.name : "NO NAME PROVIDED", icon: route.icon })
        )

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    {links.map((link) => {
                        return (
                            <ListItem key={link.path} disablePadding>
                                <ListItemButton selected={link.path === pathname} onClick={() => navigate(link.path as To)}>
                                    <ListItemIcon>
                                        {link.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={link.name} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                {children}
            </Box>
        </Box >
    )
}