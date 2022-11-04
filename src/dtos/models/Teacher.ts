import {SubjectDto} from "./Subject";
import {UserDataDto} from "./UserData";

export interface TeacherDto {
    id: string
    userData: UserDataDto
    subjects: SubjectDto[]
}