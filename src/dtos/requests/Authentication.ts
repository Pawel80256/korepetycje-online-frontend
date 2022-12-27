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
    role:string,
    firstName: String,
    lastName: String,
    password: String,
    emailAddress: String,
    city:string
}

export const initialRegisterRequest: RegisterRequest = {
    role:'',
    firstName: '',
    lastName: '',
    password: '',
    emailAddress: '',
    city:''
}
//todo: add typing
export const registerRequestValidationSchema = Yup.object({
    role:Yup.string().required('Wprowadź typ konta'),
    firstName: Yup.string().required('Wprowadź imię'),
    lastName: Yup.string().required('Wprowadź nazwisko'),
    password: Yup.string().required('Wprowadź hasło'),
    emailAddress: Yup.string().email('Niepoprawny adres email').required('Wprowadź adres email'),
    city:Yup.string().notRequired()
})