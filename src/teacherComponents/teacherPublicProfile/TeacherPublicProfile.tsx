import {Avatar, Button, Divider, Grid, Paper, TextField} from "@mui/material";
import {useParams} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {getTeacherById, updateCity} from "../../app/services/TeacherService";
import {initialTeacherDto, TeacherDto} from "../../dtos/models/Teacher";
import {getAverageRating, sortParagraphsByOrder} from "../../app/utils/utils";
import {TeacherParagraphList} from "../teacherProfileInfo/TeacherParagraphList";
import StarRatings from 'react-star-ratings';
import {MyCalendar} from "../calendar/MyCalendar";
import {OpinionList} from "../opinions/OpinionList";
import OpinionNumericValueList from "../opinions/OpinionNumericValueList";
import {CreateAppointmentModal} from "../calendar/CreateAppointmentModal";
import EditIcon from '@mui/icons-material/Edit';
import {EditChoiceModal} from "../editSubjects/EditChoiceModal";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export const TeacherPublicProfile = () => {
    const params = useParams();
    const {teacherId} = params
    const [teacher, setTeacher] = useState<TeacherDto>(initialTeacherDto)
    const [isOpenCreateAppointmentModal, setIsOpenCreateAppointmentModal] = useState<boolean>(false)
    const [isOpenEditChoiceModal, setIsOpenEditChoiceModal] = useState<boolean>(false)
    const [isEditingCity, setIsEditingCity] = useState<boolean>(false)
    const [city, setCity] = useState<string>(teacher.city)
    //todo:determine role from redux or smth
    const isTeacher: boolean = true

    useEffect(() => {
        getTeacherById(teacherId!).then(response => {
            setTeacher(response)
        })
    }, [])


    return (
        <Grid container sx={{display: "flex", marginTop: "2%", marginBottom: "2%"}} direction={"column"} spacing={2}>
            <Grid item container sx={{display: "flex"}} direction={"row"}>

                <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>
                    <Grid item container direction="row">

                        <Grid item style={{width: "20%", alignItems: "center", textAlign: "center"}}>
                            <Avatar alt={"avatar"}
                                    src={"https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"}
                                    sx={{width: 100, height: 100, margin: "auto"}}/>

                        </Grid>

                        <Grid item container style={{width: "50%"}} direction={"column"}>
                            <Grid item>
                                <Typography gutterBottom variant="h5" component="div" style={{fontWeight: "bold"}}>
                                    {`${teacher?.userData.firstName} ${teacher?.userData.lastName}`}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    {`Korepetytor przedmiotów: ${teacher?.subjects.map(s => s.subjectName).join(", ")}`}
                                    <EditIcon
                                        fontSize={"small"}
                                        onClick={() => setIsOpenEditChoiceModal(true)}
                                        sx={{"&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"}}}
                                    />
                                </Typography>
                            </Grid>
                            <Grid item>
                                {isEditingCity
                                    ?
                                    <>
                                        <TextField
                                            defaultValue={teacher.city}
                                            onChange={(event => setCity(event.target.value))}
                                        />
                                        <CheckIcon
                                            sx={{
                                                "&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"},
                                                color: "blue"
                                            }}
                                            onClick={() => {
                                                updateCity(teacherId!, city)
                                                window.location.reload()
                                            }}
                                        />
                                        <ClearIcon
                                            sx={{
                                                "&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"},
                                                color: "red"
                                            }}
                                            onClick={() => setIsEditingCity(false)}
                                        />
                                    </>
                                    :
                                    <Typography gutterBottom variant="subtitle1" component="div" color="text.secondary">
                                        {teacher?.city}
                                        <EditIcon
                                            sx={{"&:hover": {cursor: "pointer", backgroundColor: "#C0E6FC"}}}
                                            fontSize={"small"}
                                            onClick={() => setIsEditingCity(true)}
                                        />
                                    </Typography>
                                }
                            </Grid>
                        </Grid>

                        <Grid item container style={{width: "30%"}} direction={"column"} spacing={1}>
                            <Grid item style={{marginLeft: "auto", marginRight: "auto"}}>
                                <Button
                                    variant="contained"
                                >
                                    Umów spotkanie
                                </Button>
                            </Grid>

                            <Grid item>
                                <>
                                    {console.log(teacher)}
                                    <Typography>
                                        Ocena:
                                        <StarRatings rating={getAverageRating(teacher.opinions)} numberOfStars={5}
                                                     starRatedColor="#3990E8" starDimension={"15px"}
                                                     starSpacing={"1px"}/>
                                    </Typography>
                                    <Typography>
                                        {`Opinie: ${teacher?.opinions.length}`}
                                    </Typography>
                                </>
                            </Grid>
                        </Grid>

                    </Grid>
                </Paper>
            </Grid>

            <Grid item>
                <TeacherParagraphList paragraphs={sortParagraphsByOrder(teacher.profileInfo)} isTeacher={isTeacher}/>
            </Grid>

            <Grid item sx={{display: "flex"}}>
                <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>

                    <MyCalendar appointments={teacher.appointments}/>
                    {isTeacher &&
                    <Button
                        variant={"contained"}
                        fullWidth
                        onClick={() => setIsOpenCreateAppointmentModal(true)}
                    >
                        Dodaj termin
                    </Button>
                    }
                </Paper>
            </Grid>

            <Grid item>
                <Paper elevation={2}
                       style={{margin: "auto", width: "60%", padding: "15px"}}>
                    <OpinionNumericValueList opinions={teacher.opinions}/>
                    <Divider style={{marginTop: "2%", marginBottom: "2%"}}/>
                    <OpinionList opinions={teacher.opinions}/>
                </Paper>
            </Grid>
            <CreateAppointmentModal open={isOpenCreateAppointmentModal} setOpen={setIsOpenCreateAppointmentModal}/>
            <EditChoiceModal open={isOpenEditChoiceModal} setOpen={setIsOpenEditChoiceModal}
                             subjects={teacher.subjects}/>
        </Grid>
    )
}