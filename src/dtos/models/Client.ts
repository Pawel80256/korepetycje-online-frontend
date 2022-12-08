import {initialUserDataDto, UserDataDto} from "./UserData";

export interface ClientDto {
    id: string
    userData: UserDataDto
}

export const initialClientDto:ClientDto = {
    id:'',
    userData: initialUserDataDto
}
