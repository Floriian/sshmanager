import { useAppSelector } from "@/app";
import { getServers } from "@/features/server";

export const useServers = () => useAppSelector(getServers);
