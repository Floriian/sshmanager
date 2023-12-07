import { serverRoutes } from "@/features/server";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([...serverRoutes]);
