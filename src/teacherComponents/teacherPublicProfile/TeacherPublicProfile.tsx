import {Avatar, Grid, Paper} from "@mui/material";
import {useParams} from "react-router-dom";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import {getTeacherById} from "../../app/services/TeacherService";
import {TeacherDto} from "../../dtos/models/Teacher";

export const TeacherPublicProfile = () => {
    const params = useParams();
    const {teacherId} = params
    const [teacher,setTeacher] = useState<TeacherDto>()

    useEffect(()=>{
        getTeacherById(teacherId!).then(response=>{
            setTeacher(response)
        })
    })
    return (

            <Grid container sx = {{display:"flex", marginTop:"2%"}} direction={"row"}>
                <Paper elevation={2} style={{margin:"auto", width:"60%"}}>
                <Grid item container direction = "row">
                    <Grid item style={{width:"20%", alignItems:"center", textAlign:"center"}}>
                        <Avatar alt={"avatar"} src={"https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"}
                                sx={{width: 100, height: 100, margin:"auto"}}/>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {`${teacher?.userData.firstName} ${teacher?.userData.lastName}`  }
                        </Typography>
                    </Grid>
                    <Grid item style={{width:"50%"}}>
                         qwe
                    </Grid>
                    <Grid item style={{width:"30%"}}>
                        qwe
                    </Grid>
                </Grid>
                </Paper>
            </Grid>

    )
}