import {TeacherDto} from "../dtos/models/Teacher";
import {TeacherListElement} from "./TeacherListElement";

interface TeacherListProps {
    teachers: TeacherDto[]
}

export const TeacherList: React.FC<TeacherListProps> = (props: TeacherListProps) => {
    const {teachers} = props
    return <>
        {teachers.map(teacher => {
            return <TeacherListElement teacher={teacher}/>
        })}
    </>
}