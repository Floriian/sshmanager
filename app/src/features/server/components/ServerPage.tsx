import { useAppDispatch, useAppSelector } from "@/app";
import { getServerThunk } from "@/features/server";
import { useEffect } from "react";

export function ServerPage() {
    const serverState = useAppSelector((state) => state.server)
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(getServerThunk());
        }
    }, []);

    useEffect(() => console.log(serverState), [serverState])

    return <h1>Server page</h1>
}