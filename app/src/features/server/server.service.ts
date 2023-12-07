import { instance } from "@/app";
import { IServer } from "@sshmanager/shared";

export const serverService = {
  list: async () => {
    const { data } = await instance.get<IServer[]>("/server/list");
    return data;
  },
};
