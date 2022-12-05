import {SearchTeacherForm} from "../../otherComponents/SearchTeacherForm";
import {useAppSelector} from "../../app/hooks";
import {TeacherList} from "../TeacherList";
import {Divider, Grid} from "@mui/material";

export const SearchTeacherPage = () => {
    const {searchedTeachers} = useAppSelector(state => state.teachers)
    return (

        <Grid sx={{display: "flex", marginTop: "4%"}} direction="column">
            <h1 style={{margin: "auto"}}>Wyszukaj swojego nauczuciela!</h1>
            <SearchTeacherForm></SearchTeacherForm>
            <Divider style={{marginTop: "2%", marginBottom: "2%"}}/>
            <h2 style={{margin: "auto"}}>Wynik wyszukiwania</h2>
            <TeacherList teachers={searchedTeachers}></TeacherList>
        </Grid>


    )
}
