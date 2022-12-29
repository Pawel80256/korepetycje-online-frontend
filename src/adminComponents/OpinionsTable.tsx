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

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const OpinionsTable = () => {
    const [opinions,setOpinions] = useState<OpinionDto[]>([])

    useEffect(()=>{
        getAllOpinions().then(response => setOpinions(response))
    })
    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID opinii</TableCell>
                        <TableCell >ID nauczyciela</TableCell>
                        <TableCell >ID ucznia</TableCell>
                        <TableCell >Wartość numeryczna</TableCell>
                        <TableCell >Data wystawienia</TableCell>
                        <TableCell>Tekst</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {opinions.map((opinion) => (
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
