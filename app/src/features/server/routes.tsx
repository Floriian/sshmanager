import { ServerPage } from "@/features/server";
import { Route } from "@/types";
import { Storage } from "@mui/icons-material";

export const serverRoutes: Route = {
    name: "Servers",
    path: "/server",
    element: <ServerPage />,
    showOnDrawer: true,
    icon: <Storage />
}