import { useAppDispatch, useAppSelector } from "@/app";
import { getServerThunk } from "@/features/server";
import { useEffect } from "react";
import { Button } from "@mui/material"
export function ServerPage() {
    const serverState = useAppSelector((state) => state.server)
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(getServerThunk());
        }
    }, []);

    useEffect(() => console.log(serverState), [serverState])

    return <Button>Add server</Button>
}