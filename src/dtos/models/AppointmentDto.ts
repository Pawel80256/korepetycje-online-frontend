import {initialSubjectDto, SubjectDto} from "./Subject";
import {initialTeacherDto, TeacherDto} from "./Teacher";
import {ClientDto, initialClientDto} from "./Client";

export interface AppointmentDto {
    id: string,
    date: Date,
    subject: SubjectDto,
    teacher: TeacherDto,
    client: ClientDto
}

export const initialAppointmentDto = {
    id: '',
    date: new Date(),
    subject: initialSubjectDto,
    teacher: initialTeacherDto,
    client: initialClientDto
}