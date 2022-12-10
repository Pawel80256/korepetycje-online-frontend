import {ClientDto, initialClientDto} from "./Client";

export interface OpinionDto {
    id: string,
    textValue: string,
    numericValue: number,
    createdAt: Date,
    client: ClientDto
}

export const initialOpinionDto: OpinionDto = {
    id: '',
    textValue: '',
    numericValue: 0,
    createdAt: new Date(),
    client: initialClientDto
}