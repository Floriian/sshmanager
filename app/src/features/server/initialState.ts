import { InitialState } from "@/types";
import { IServer } from "@sshmanager/shared";

export const initialState: InitialState<IServer[]> = {
  data: [
    {
      address: "",
      commands: [""],
      name: "",
      password: "",
      port: 0,
      username: ""
    }
  ],
  isLoading: false,
  isError: false,
  error: {},
};
