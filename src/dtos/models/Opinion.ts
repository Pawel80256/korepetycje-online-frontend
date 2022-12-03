import {ClientDto} from "./Client";

export interface OpinionDto {
    id: string,
    textValue: string,
    numericValue: number,
    creaatedAt: Date,
    client: ClientDto
}