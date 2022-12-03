import {SubjectDto} from "./Subject";
import {UserDataDto} from "./UserData";
import {OpinionDto} from "./Opinion";

export interface TeacherDto {
    id: string
    userData: UserDataDto
    subjects: SubjectDto[]
    opinions: OpinionDto[]
}