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