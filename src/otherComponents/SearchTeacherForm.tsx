import {Grid, MenuItem, TextField} from "@mui/material";
import {useFormik} from "formik";
import {initialSearchTeacherRequest, searchTeacherRequest, searchTeacherValidationSchema} from "../app/formikSchemas";
import {useEffect, useState} from "react";
import {getAllSubjects} from "../app/services/SubjectService";
import {getAllCities} from "../app/services/TeacherService";

export const SearchTeacherForm = () => {
    const [subjects, setSubjects] = useState<string[]>([])
    const [cities, setCities] = useState<string[]>([])

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
            // dispatch(login(values))
        },
        validationSchema: searchTeacherValidationSchema
    });

    return (
        <Grid container xs={7}
              sx={{margin: 'auto', marginTop: "2%"}}>
            <Grid item xs={6}>
                <TextField
                    id='subject'
                    select
                    label="Tematyka"
                    // value="subject"
                    onChange={formik.handleChange}
                    helperText="Wybierz tematykę zajęć"
                    defaultValue={""}
                >
                    {subjects.map((subject) => (
                        <MenuItem key={subject} value={subject}>
                            {subject}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id='city'
                    select
                    label="Lokalizacja"
                    // value="subject"
                    onChange={formik.handleChange}
                    helperText="Wybierz lokalizację"
                    defaultValue={""}
                >
                    {cities.map((city) => (
                        <MenuItem key={city} value={city}>
                            {city}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    )
}