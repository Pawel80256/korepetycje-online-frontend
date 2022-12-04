import {Button, Grid, MenuItem, TextField} from "@mui/material";
import {useFormik} from "formik";
import {initialSearchTeacherRequest, searchTeacherRequest, searchTeacherValidationSchema} from "../app/formikSchemas";
import {useEffect, useState} from "react";
import {getAllSubjects} from "../app/services/SubjectService";
import {getAllCities, getTeachersBySubjectAndCity} from "../app/services/TeacherService";
import {TeacherDto} from "../dtos/models/Teacher";

export const SearchTeacherForm = () => {
    const [subjects, setSubjects] = useState<string[]>([])
    const [cities, setCities] = useState<string[]>([])
    const [foundTeachers, setFoundTeachers] = useState<TeacherDto[]>([])

    useEffect(() => {
        getAllSubjects().then(response => {
            setSubjects(response)
        })
        getAllCities().then(response => {
            setCities(response)
        })
    }, [])

    const formik = useFormik({
        initialValues: initialSearchTeacherRequest,
        onSubmit: (values: searchTeacherRequest) => {
            getTeachersBySubjectAndCity(values.subject, values.city).then(response => {
                console.log(response)
            })
        },
        validationSchema: searchTeacherValidationSchema
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container xs={7}
                  sx={{margin: 'auto', marginTop: "2%"}}>
                <Grid item xs={5}>
                    <TextField
                        id='subject'
                        name='subject'
                        select
                        label="Tematyka"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        helperText="Wybierz tematykę zajęć"
                        defaultValue={""}
                        fullWidth
                    >
                        {subjects.map((subject) => (
                            <MenuItem key={subject} value={subject}>
                                {subject}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        id='city'
                        name='city'
                        select
                        label="Lokalizacja"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        helperText="Wybierz lokalizację"
                        defaultValue={""}
                        fullWidth
                    >
                        {cities.map((city) => (
                            <MenuItem key={city} value={city}>
                                {city}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{height: "55px"}}
                    >
                        Wyszukaj
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}