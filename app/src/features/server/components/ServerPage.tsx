import { useAppDispatch } from "@/app";
import { getServerThunk, useServers } from "@/features/server";
import { useEffect } from "react";
import { Button } from "@mui/material"
export function ServerPage() {
    const servers = useServers();
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(getServerThunk());
        }
    }, []);

    useEffect(() => console.log(servers), [servers])

    return <Button>Add server</Button>
}