import {useEffect, useState} from "react";
import {ClientDto} from "../dtos/models/Client";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {TextField} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import {getAverageRating} from "../app/utils/utils";
import * as React from "react";
import {getAllClients} from "../app/services/ClientService";
import {TeacherDto} from "../dtos/models/Teacher";

const defaultFilterValues = {
    id:'',
    firstName:'',
    lastName:'',
    emailAddress:''
}

export const ClientsTable = () =>{
    const [clients,setClients] = useState<ClientDto[]>([])
    const [filters, setFilters] = useState(defaultFilterValues)

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFilters({ ...filters, [name]: value })
    }

    useEffect(()=>{
        getAllClients().then(response => setClients(response))
    })

    function filterClients(clients: ClientDto[], filters: { [key: string]: string }): ClientDto[] {
        return clients.filter((client) => {
            return Object.entries(filters).every(([key, filterValue]) => {
                // @ts-ignore
                let fieldValue: any = client[key];
                if (key === 'firstName' || key === 'lastName' || key === 'emailAddress') {
                    fieldValue = client.userData[key];
                }
                return String(fieldValue).toLowerCase().includes(filterValue.toLowerCase());
            });
        });
    }

    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TextField label={"ID"} type="text" name="id" value={filters.id} onChange={handleFilterChange}/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Imię"} type="text" name="firstName" value={filters.firstName} onChange={handleFilterChange}/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Nazwisko"} type="text" name="lastName" value={filters.lastName} onChange={handleFilterChange}/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Email"} type="text" name="emailAddress" value={filters.emailAddress} onChange={handleFilterChange}/>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filterClients(clients,filters).map((client) => (
                        <TableRow
                            key={client.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {client.id}
                            </TableCell>
                            <TableCell >{client.userData.firstName}</TableCell>
                            <TableCell >{client.userData.lastName}</TableCell>
                            <TableCell >{client.userData.emailAddress}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}