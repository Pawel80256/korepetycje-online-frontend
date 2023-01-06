import {useEffect, useState} from "react";
import {AppointmentDto} from "../dtos/models/AppointmentDto";
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
import {TeacherDto} from "../dtos/models/Teacher";
import {OpinionDto} from "../dtos/models/Opinion";
import {getAllAppointments} from "../app/services/AppointmentService";

const defaultFilterValues = {
    id: '',
    teacherId: '',
    clientId: '',
    subject: '',
    date: ''
}

export const AppointmentsTable = () => {
    const [appointments, setAppointments] = useState<AppointmentDto[]>([])
    const [filters, setFilters] = useState(defaultFilterValues)

    useEffect(()=>{
        getAllAppointments().then(response => setAppointments(response))
    })

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFilters({ ...filters, [name]: value })
    }

    const filterPredicate = (appointment: AppointmentDto) =>
        Object.entries(filters).every(([key, filterValue]) => {
            // @ts-ignore
            const cellValue = key === 'date' ? new Date(appointment[key]).toLocaleDateString() : appointment[key]
            return String(cellValue).toLowerCase().includes(filterValue.toLowerCase())
        })

    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TextField label={"ID"} type="text" name="id" value={filters.id} onChange={handleFilterChange}/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"ID nauczyciela"} type="text" name="teacherId" value={filters.teacherId} onChange={handleFilterChange}/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"ID ucznia"} type="text" name="clientId" value={filters.clientId} onChange={handleFilterChange}/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Temat"} type="text" name="subject" value={filters.subject} onChange={handleFilterChange}/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Data"} type="text" name="date" value={filters.date} onChange={handleFilterChange}/>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((appointment) => (
                        <TableRow
                            key={appointment.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {appointment.id}
                            </TableCell>
                            <TableCell >{appointment.teacher.id}</TableCell>
                            <TableCell >{appointment.client !== null ? appointment.client.id : "brak"}</TableCell>
                            <TableCell >{appointment.subject !== null ? appointment.subject.subjectName : "brak"}</TableCell>
                            <TableCell >{new Date(appointment.date).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}