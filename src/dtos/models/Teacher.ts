import {SubjectDto} from "./Subject";
import {initialUserDataDto, UserDataDto} from "./UserData";
import {OpinionDto} from "./Opinion";
import {ParagraphDto} from "./ParagraphDto";

export interface TeacherDto {
    id: string
    userData: UserDataDto
    subjects: SubjectDto[]
    profileInfo: ParagraphDto[]
    opinions: OpinionDto[]
    city: string
}

export const initialTeacherDto:TeacherDto = {
    id:'',
    userData:initialUserDataDto,
    subjects:[],
    profileInfo:[],
    opinions:[],
    city:''
}
