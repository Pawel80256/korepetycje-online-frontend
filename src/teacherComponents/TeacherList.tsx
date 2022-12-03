import {TeacherDto} from "../dtos/models/Teacher";
import {TeacherListElement} from "./TeacherListElement";
import {useAppDispatch} from "../app/hooks";
import {useEffect} from "react";
import {getAllTeachers} from "../app/slices/TeacherSlice";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";

interface TeacherListProps {
    teacherss: TeacherDto[]
}

export const TeacherList: React.FC<TeacherListProps> = (props: TeacherListProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllTeachers())
    }, [])

    const {teachers} = useSelector((state: RootState) => state.teachers)
    console.log(teachers)
    return <>
        {teachers.map(teacher => {
            return <TeacherListElement key={teacher.id} teacher={teacher}/>
        })}
    </>
}