import { Layout } from "@/components";
import { serverRoutes } from "@/features/server";
import { createBrowserRouter } from "react-router-dom";

export const routes = [{
    element: <Layout />,
    children: [
        serverRoutes
    ]
}]

export const router = createBrowserRouter(routes);
