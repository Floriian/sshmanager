import { useAppDispatch } from "@/app";
import { getServerThunk, useServers } from "@/features/server";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect } from "react";

const cols: GridColDef[] = [
    {
        field: 'name', headerName: 'Name', width: 130,
    }
]

export function ServerPage() {
    const servers = useServers();
    const dispatch = useAppDispatch();
    useEffect(() => {
        return () => {
            dispatch(getServerThunk());
        }
    }, [])

    const serverRows = servers.data.map((server, index) => ({ id: index, name: server.name }));

    return <DataGrid rows={serverRows} columns={cols}>

    </DataGrid>
}