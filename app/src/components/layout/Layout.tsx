import { LayoutDrawer } from "@/components/layout/LayoutDrawer";
import { Outlet } from "react-router-dom";

export function Layout() {

    return (
        <LayoutDrawer>
            <Outlet />
        </LayoutDrawer>
    )
}