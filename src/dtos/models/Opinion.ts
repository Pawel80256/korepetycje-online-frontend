import {ClientDto, initialClientDto} from "./Client";
import {initialTeacherDto, TeacherDto} from "./Teacher";

export interface OpinionDto {
    id: string,
    textValue: string,
    numericValue: number,
    createdAt: Date,
    client: ClientDto
    teacher:TeacherDto
}

export const initialOpinionDto: OpinionDto = {
    id: '',
    textValue: '',
    numericValue: 0,
    createdAt: new Date(),
    client: initialClientDto,
    teacher:initialTeacherDto
}