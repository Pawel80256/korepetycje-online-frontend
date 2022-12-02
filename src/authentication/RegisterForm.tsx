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
import {
    initialRegisterRequest,
    RegisterRequest,
    registerRequestValidationSchema
} from "../dtos/requests/Authentication";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {UserClass} from "../constants/UserClass";


const theme = createTheme();

export const RegisterForm = () => {

    const formik = useFormik({
        initialValues: {registerRequest: initialRegisterRequest, userClass: UserClass.client},
        onSubmit: (values: { registerRequest: RegisterRequest, userClass: UserClass }) => {
            console.log(values)
        },
        validationSchema: registerRequestValidationSchema
    });


    return (
        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="xs" sx={{
                marginTop: '5%'
            }}>
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
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                        <Select
                                            name="userClass"
                                            id="userClass"
                                            labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            value={formik.values.userClass}
                                            // defaultValue={UserClass.client}
                                            label="Age"
                                            // onChange={(e) => formik.setFieldValue("userClass", e.target.value)}
                                            onChange={formik.handleChange}
                                        >
                                            <MenuItem value={UserClass.client}>Klient</MenuItem>
                                            <MenuItem value={UserClass.teacher}>Nauczyciel</MenuItem>
                                            {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <>
                                        <TextField
                                            id="firstName"
                                            name="firstName"
                                            value={formik.values.registerRequest.firstName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            autoComplete="given-name"
                                            label="Imię"
                                            // required
                                            fullWidth
                                            autoFocus
                                        />
                                        {formik.touched.registerRequest?.firstName && formik.errors.registerRequest?.firstName && typeof formik.errors.registerRequest?.firstName === "string" && (
                                            <div style={{color: "red"}}>{formik.errors.registerRequest?.firstName}</div>
                                        )}
                                    </>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="lastName"
                                        name="lastName"
                                        value={formik.values.registerRequest.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        // required
                                        fullWidth
                                        label="Nazwisko"
                                        autoComplete="family-name"
                                    />
                                    {/*{formik.touched.lastName && formik.errors.lastName && typeof formik.errors.lastName === "string" && (*/}
                                    {/*    <div style={{color: "red"}}>{formik.errors.lastName}</div>*/}
                                    {/*)}*/}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="emailAddress"
                                        name="emailAddress"
                                        value={formik.values.registerRequest.emailAddress}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        // required
                                        fullWidth
                                        label="Adres email"
                                        autoComplete="email"
                                    />
                                    {/*{formik.touched.emailAddress && formik.errors.emailAddress && typeof formik.errors.emailAddress === "string" && (*/}
                                    {/*    <div style={{color: "red"}}>{formik.errors.emailAddress}</div>*/}
                                    {/*)}*/}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        name="password"
                                        value={formik.values.registerRequest.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        // required
                                        fullWidth
                                        label="Hasło"
                                        type="password"
                                        autoComplete="new-password"
                                    />
                                    {/*{formik.touched.password && formik.errors.password && typeof formik.errors.password === "string" && (*/}
                                    {/*    <div style={{color: "red"}}>{formik.errors.password}</div>*/}
                                    {/*)}*/}
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                disabled={!registerRequestValidationSchema.isValidSync(formik.values)}
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