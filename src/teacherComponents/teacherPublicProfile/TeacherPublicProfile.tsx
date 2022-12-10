import {Avatar, Button, Divider, Grid, Paper} from "@mui/material";
import {useParams} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {getTeacherById} from "../../app/services/TeacherService";
import {initialTeacherDto, TeacherDto} from "../../dtos/models/Teacher";
import {getAverageRating} from "../../app/utils/utils";
import {TeacherParagraphList} from "../teacherProfileInfo/TeacherParagraphList";
import StarRatings from 'react-star-ratings';
import {MyCalendar} from "../calendar/MyCalendar";
import {OpinionList} from "../opinions/OpinionList";
import OpinionNumericValueList from "../opinions/OpinionNumericValueList";

export const TeacherPublicProfile = () => {
    const params = useParams();
    const {teacherId} = params
    const [teacher, setTeacher] = useState<TeacherDto>(initialTeacherDto)

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
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="subtitle1" component="div" color="text.secondary">
                                    {teacher?.city}
                                </Typography>
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
                <TeacherParagraphList paragraphs={teacher.profileInfo}/>
            </Grid>

            <Grid item sx={{display: "flex"}}>
                <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>
                    <MyCalendar dateTimes={teacher.appointments.map(appointment => new Date(appointment.date))}/>
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

        </Grid>
    )
}