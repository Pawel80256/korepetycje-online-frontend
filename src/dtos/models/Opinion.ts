import {ClientDto, initialClientDto} from "./Client";

export interface OpinionDto {
    id: string,
    textValue: string,
    numericValue: number,
    creaatedAt: Date,
    client: ClientDto
}

export const initialOpinionDto:OpinionDto = {
    id: '',
    textValue: '',
    numericValue:0,
    creaatedAt: new Date(),
    client: initialClientDto
}