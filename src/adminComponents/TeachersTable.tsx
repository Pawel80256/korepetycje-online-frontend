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
import {OpinionDto} from "../dtos/models/Opinion";


const defaultFilterValues = {
    id: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    subjects: '',
    averageRating: '',
    city:''
}

export const TeachersTable = () => {
    const [teachers,setTeachers] = useState<TeacherDto[]>([])
    const [filters, setFilters] = useState(defaultFilterValues)

    useEffect(()=>{
        getAllTeachers().then(response => setTeachers(response))
    })

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        console.log(name,value)
        setFilters({ ...filters, [name]: value })
    }

    function filterTeachers(teachers: TeacherDto[], filters: { [key: string]: string }): TeacherDto[] {
        return teachers.filter((teacher) => {
            // Check if every filter value is included in the corresponding field of the teacher
            return Object.entries(filters).every(([key, filterValue]) => {
                // Get the value of the field in the teacher
                // @ts-ignore
                let fieldValue: any = teacher[key];
                // If the field is in the userData object, get the value from there instead
                if (key === 'firstName' || key === 'lastName' || key === 'emailAddress') {
                    fieldValue = teacher.userData[key];
                }
                // If the field is 'subjects', check if at least one of the subjects in the teacher matches the filter value
                if (key === 'subjects') {
                    return teacher.subjects.some((subject) => subject.subjectName.toLowerCase().includes(filterValue.toLowerCase()));
                }
                // If the field is 'averageRating', check if the average rating of the teacher's opinions is greater than or equal to the filter value
                // if (key === 'averageRating') {
                //     const totalRating = teacher.opinions.reduce((acc, opinion) => acc + opinion.numericValue, 0);
                //     const averageRating = totalRating / teacher.opinions.length;
                //     return averageRating >= Number(filterValue);
                // }
                // For all other fields, check if the field value in the teacher includes the filter value
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
                        <TableCell>
                            <TextField label={"Tematy"} type="text" name="subjects" value={filters.subjects} onChange={handleFilterChange}/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Ocena"} type="text" name="averageRating" value={filters.averageRating} onChange={handleFilterChange}/>
                        </TableCell>
                        <TableCell>
                            <TextField label={"Miasto"} type="text" name="city" value={filters.city} onChange={handleFilterChange}/>

                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filterTeachers(teachers,filters).map((teacher) => (
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
                            <TableCell >{teacher.city}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}