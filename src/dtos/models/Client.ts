import {initialUserDataDto, UserDataDto} from "./UserData";
import {AppointmentDto} from "./AppointmentDto";

export interface ClientDto {
    id: string
    appointments: AppointmentDto[]
    userData: UserDataDto
}

export const initialClientDto: ClientDto = {
    id: '',
    appointments: [],
    userData: initialUserDataDto
}
