import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useFormik} from "formik";
import {initialLoginRequest, LoginRequest, loginRequestValidationSchema,} from "../dtos/requests/Authentication";
import {useAppDispatch} from "../app/hooks";
import {login} from "../app/slices/AuthSlice";


const theme = createTheme();

export const LoginForm = () => {

    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: initialLoginRequest,
        onSubmit: (values: LoginRequest) => {
            console.log(values)
            dispatch(login(values)).then(()=>window.location.reload())

        },
        validationSchema: loginRequestValidationSchema
    });


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{
                marginTop: '5%'
            }}>
                <CssBaseline/>
                <form onSubmit={formik.handleSubmit}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Logowanie
                        </Typography>
                        <TextField
                            id="emailAddress"
                            name="emailAddress"
                            value={formik.values.emailAddress}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="given-name"
                            label="Adres email"
                            // required
                            fullWidth
                            autoFocus
                        />
                        <TextField
                            style={{marginTop: "2%"}}
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="given-name"
                            label="Hasło"
                            // required
                            type="password"
                            fullWidth
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Zaloguj
                        </Button>
                    </Box>
                </form>
            </Container>
        </ThemeProvider>
    );
}