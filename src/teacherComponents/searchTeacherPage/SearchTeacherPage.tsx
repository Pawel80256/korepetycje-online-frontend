import {SearchTeacherForm} from "../../otherComponents/SearchTeacherForm";
import {useAppSelector} from "../../app/hooks";
import {TeacherList} from "../TeacherList";

export const SearchTeacherPage = () => {
    const {searchedTeachers} = useAppSelector(state => state.teachers)
    return (
        <>
            <SearchTeacherForm></SearchTeacherForm>
            <TeacherList teachers={searchedTeachers}></TeacherList>
        </>
    )
}
