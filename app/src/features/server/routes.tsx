import { ServerPage } from "@/features/server";
import { RouteObject } from "react-router-dom";

export const serverRoutes: RouteObject[] = [{
    path: "/server",
    element: <ServerPage />
}]