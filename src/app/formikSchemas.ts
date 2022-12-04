import * as Yup from "yup";

export interface searchTeacherRequest {
    subject: string,
    city: string
}

export const initialSearchTeacherRequest: searchTeacherRequest = {
    subject: '',
    city: ''
}

export const searchTeacherValidationSchema = Yup.object({
    subject: Yup.string().required("Podaj tematykę zajęć"),
    city: Yup.string().required("Podaj lokalzację")
})