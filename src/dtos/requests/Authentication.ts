import * as Yup from "yup";

export interface LoginRequest {
    emailAddress: string,
    password: string
}

export const initialLoginRequest: LoginRequest = {
    emailAddress: '',
    password: '',
}

export const loginRequestValidationSchema = Yup.object({
    emailAddress: Yup.string().required("Wprowadź adres mailowy"),
    password: Yup.string().required("Wprowadź hasło")
})

export interface RegisterRequest {
    firstName: String,
    lastName: String,
    password: String,
    emailAddress: String,
}

export const initialRegisterRequest: RegisterRequest = {
    firstName: '',
    lastName: '',
    password: '',
    emailAddress: ''
}
//todo: add typing
export const registerRequestValidationSchema = Yup.object({
    firstName: Yup.string().required('Wprowadź imię'),
    lastName: Yup.string().required('Wprowadź nazwisko'),
    password: Yup.string().required('Wprowadź hasło'),
    emailAddress: Yup.string().email('Niepoprawny adres email').required('Wprowadź adres email')
})