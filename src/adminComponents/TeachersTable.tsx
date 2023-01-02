import {useEffect, useState} from "react";
import {TeacherDto} from "../dtos/models/Teacher";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {TextField} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import * as React from "react";
import {getAverageRating} from "../app/utils/utils";
import {getAllTeachers} from "../app/services/TeacherService";

export const TeachersTable = () => {
    const [teachers,setTeachers] = useState<TeacherDto[]>([])

    useEffect(()=>{
        getAllTeachers().then(response => setTeachers(response))
    })

    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TextField label={"ID"} type="text" name="id"/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Imię"} type="text" name="id"/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Nazwisko"} type="text" name="id"/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Email"} type="text" name="id"/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Tematy"} type="text" name="id"/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Ocena"} type="text" name="id"/>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {teachers.map((teacher) => (
                        <TableRow
                            key={teacher.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {teacher.id}
                            </TableCell>
                            <TableCell >{teacher.userData.firstName}</TableCell>
                            <TableCell >{teacher.userData.lastName}</TableCell>
                            <TableCell >{teacher.userData.emailAddress}</TableCell>
                            <TableCell >{teacher.subjects.map(s => s.subjectName).join(", ")}</TableCell>
                            <TableCell >{getAverageRating(teacher.opinions)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}