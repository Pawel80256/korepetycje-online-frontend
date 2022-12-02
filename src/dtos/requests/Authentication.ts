import * as Yup from "yup";
import {UserClass} from "../../constants/UserClass";

export interface RegisterRequest {
    firstName: String,
    lastName: String,
    password: String,
    emailAddress: String,
}

export interface LoginRequest {
    emailAddress: string,
    password: string
}

export const initialRegisterRequest: RegisterRequest = {
    firstName: '',
    lastName: '',
    password: '',
    emailAddress: ''
}

export const initialLoginRequest: LoginRequest = {
    emailAddress: '',
    password: '',
}
//todo: add typing
export const registerRequestValidationSchema = Yup.object({
    userClass: Yup.mixed().oneOf(Object.values(UserClass)),
    registerRequest: Yup.object({
        firstName: Yup.string().required('Wprowadź imię'),
        lastName: Yup.string().required('Wprowadź nazwisko'),
        password: Yup.string().required('Wprowadź hasło'),
        emailAddress: Yup.string().email('Niepoprawny adres email').required('Wprowadź adres email')
    }).required("Wprowadź dane")

})

export const loginRequestValidationSchema = Yup.object({
    emailAddress: Yup.string().required("Wprowadź adres mailowy"),
    password: Yup.string().required("Wprowadź hasło")
})