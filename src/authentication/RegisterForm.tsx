import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useFormik} from "formik";
import Select, { SelectChangeEvent } from '@mui/material/Select';

import {
    initialRegisterRequest,
    RegisterRequest,
    registerRequestValidationSchema
} from "../dtos/requests/Authentication";
import {MenuItem} from "@mui/material";
import {Roles} from "../app/enums/Roles";
import {useSnackbar} from "notistack";
import {register} from "../app/services/AuthService";


const theme = createTheme();

export const RegisterForm: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();

    const formik = useFormik({
        initialValues: initialRegisterRequest,
        onSubmit: (values: RegisterRequest) => {
            if(values.role === Roles.TEACHER.toString() && values.city.trim() === ''){
                enqueueSnackbar("Podaj nazwę miasta", { variant: 'error' });
            }else{
                console.log(values)
                register(values)
            }
        },
        validationSchema: registerRequestValidationSchema
    });


    return (
        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Rejestracja
                    </Typography>
                    <Box sx={{mt: 3}}>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs ={12}>
                                    <Select
                                        fullWidth
                                        id="role"
                                        name="role"
                                        value={formik.values.role}
                                        onChange={formik.handleChange}
                                        onBlur = {formik.handleBlur}
                                        autoFocus
                                    >
                                        <MenuItem value={Roles.CLIENT.toString()}>Uczeń</MenuItem>
                                        <MenuItem value={Roles.TEACHER.toString()}>Nauczyciel</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <>
                                        <TextField
                                            id="firstName"
                                            name="firstName"
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            autoComplete="given-name"
                                            label="Imię"
                                            fullWidth
                                            autoFocus
                                        />
                                        {formik.touched.firstName && formik.errors.firstName && typeof formik.errors.firstName === "string" && (
                                            <div style={{color: "red"}}>{formik.errors.firstName}</div>
                                        )}
                                    </>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="lastName"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        fullWidth
                                        label="Nazwisko"
                                        autoComplete="family-name"
                                    />
                                    {formik.touched.lastName && formik.errors.lastName && typeof formik.errors.lastName === "string" && (
                                        <div style={{color: "red"}}>{formik.errors.lastName}</div>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="emailAddress"
                                        name="emailAddress"
                                        value={formik.values.emailAddress}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        fullWidth
                                        label="Adres email"
                                        autoComplete="email"
                                    />
                                    {formik.touched.emailAddress && formik.errors.emailAddress && typeof formik.errors.emailAddress === "string" && (
                                        <div style={{color: "red"}}>{formik.errors.emailAddress}</div>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        fullWidth
                                        label="Hasło"
                                        type="password"
                                        autoComplete="new-password"
                                    />
                                    {formik.touched.password && formik.errors.password && typeof formik.errors.password === "string" && (
                                        <div style={{color: "red"}}>{formik.errors.password}</div>
                                    )}
                                </Grid>
                                {formik.values.role === Roles.TEACHER.toString() &&
                                <Grid item xs={12}>
                                    <TextField
                                        id="city"
                                        name="city"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        fullWidth
                                        label="Miasto"
                                    />
                                    {formik.touched.city && formik.errors.city && typeof formik.errors.city === "string" && (
                                        <div style={{color: "red"}}>{formik.errors.city}</div>
                                    )}
                                </Grid>
                                }

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Zarejestruj
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Posiadasz już konto? Zaloguj się
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Container>

        </ThemeProvider>
    );
}