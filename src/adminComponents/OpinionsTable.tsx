import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import {OpinionDto} from "../dtos/models/Opinion";
import {getAllOpinions} from "../app/services/OpinionService";


const defaultFilterValues = {
    id: '',
    teacherId: '',
    clientId: '',
    numericValue: '',
    createdAt: '',
    textValue: '',
}

export const OpinionsTable = () => {
    const [opinions,setOpinions] = useState<OpinionDto[]>([])
    const [filters, setFilters] = useState(defaultFilterValues)

    useEffect(()=>{
        getAllOpinions().then(response => setOpinions(response))
    })


    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFilters({ ...filters, [name]: value })
    }


    const filterPredicate = (opinion: OpinionDto) =>
        Object.entries(filters).every(([key, filterValue]) => {
            // @ts-ignore
            const cellValue = key === 'createdAt' ? new Date(opinion[key]).toLocaleDateString() : opinion[key]
            return String(cellValue).toLowerCase().includes(filterValue.toLowerCase())
        })

    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            ID opinii
                            <input type="text" name="id" value={filters.id} onChange={handleFilterChange} />
                        </TableCell>
                        <TableCell >
                            ID nauczyciela
                            <input type="text" name="teacherId" value={filters.teacherId} onChange={handleFilterChange} />
                        </TableCell>
                        <TableCell >
                            ID ucznia
                            <input type="text" name="clientId" value={filters.clientId} onChange={handleFilterChange} />
                        </TableCell>
                        <TableCell >
                            Wartość numeryczna
                            <input type="text" name="numericValue" value={filters.numericValue} onChange={handleFilterChange} />
                        </TableCell>
                        <TableCell >
                            Data wystawienia
                            <input type="text" name="createdAt" value={filters.createdAt} onChange={handleFilterChange} />
                        </TableCell>
                        <TableCell>
                            Tekst
                            <input type="text" name="textValue" value={filters.textValue} onChange={handleFilterChange} />
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {opinions.filter(filterPredicate).map((opinion) => (
                        <TableRow
                            key={opinion.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {opinion.id}
                            </TableCell>
                            <TableCell >{opinion.teacher.id}</TableCell>
                            <TableCell >{opinion.client.id}</TableCell>
                            <TableCell >{opinion.numericValue}</TableCell>
                            <TableCell >{new Date(opinion.createdAt).toLocaleDateString()}</TableCell>
                            <TableCell>{opinion.textValue}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
