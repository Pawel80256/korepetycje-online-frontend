import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {Button, Grid} from "@mui/material";

interface FormValues {
    role: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    city?: string;
}

export const NewRegisterForm: React.FC = () => {
    const [isTeacher, setIsTeacher] = useState(false);

    return (
        <Formik
            initialValues={{
                role: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                city: '',
            }}
            validate={(values: FormValues) => {
                const errors: Partial<FormValues> = {};
                if (!values.role) {
                    errors.role = 'Wybierz rolę';
                }
                if (!values.firstName) {
                    errors.firstName = 'Wprowadź imię';
                }
                if (!values.lastName) {
                    errors.lastName = 'Wprowadź nazwisko';
                }
                if (!values.email) {
                    errors.email = 'Wprowadź adres email';
                }
                if (!values.password) {
                    errors.password = 'Wprowadź hasło';
                }
                if (values.role === 'Nauczyciel' && !values.city) {
                    errors.city = 'Wprowadź miasto';
                }
                return errors;
            }}
            onSubmit={(values: FormValues, {setSubmitting}) => {
                console.log(values);
                setSubmitting(false);
            }}
        >
            {({isSubmitting, values, setFieldValue}) => (
                <Form>
                    <Grid container>
                        <Grid item xs={12}>
                            <Field
                                name="role"
                                as="select"
                                value={values.role}
                                onChange={(event: any) => {
                                    setFieldValue("role", event.target.value)
                                    setIsTeacher(event.target.value === 'Nauczyciel');
                                }}
                            >
                                <option value="">--Wybierz rolę--</option>
                                <option value="Klient">Klient</option>
                                <option value="Nauczyciel">Nauczyciel</option>
                            </Field>
                            <ErrorMessage name="role"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field name="firstName" type="text" placeholder="Imię"/>
                            <ErrorMessage name="firstName"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field name="lastName" type="text" placeholder="Nazwisko"/>
                            <ErrorMessage name="lastName"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field name="email" type="email" placeholder="Adres email"/>
                            <ErrorMessage name="email"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Field name="password" type="password" placeholder="Hasło"/>
                            <ErrorMessage name="password"/>
                        </Grid>
                        {isTeacher && (
                            <Grid item xs={12}>
                                <Field name="city" type="text" placeholder="Miasto"/>
                                <ErrorMessage name="city"/>
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <Button type="submit" disabled={isSubmitting}>
                                Zarejestruj
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};
