import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Avatar} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {TeacherDto} from "../dtos/models/Teacher";
import {getAverageRating} from "../app/utils/utils";
import {useNavigate} from "react-router-dom";

interface TeacherListElementProps {
    teacher: TeacherDto
}

export const TeacherListElement: React.FC<TeacherListElementProps> = (props: TeacherListElementProps) => {
    const navigate = useNavigate();
    const {teacher} = props
    const subjectNames = teacher.subjects.map(subject => subject.subjectName)
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                marginTop: '2%',
                maxWidth: 500,
                flexGrow: 1,
                "&:hover":{
                    cursor:"pointer",
                    backgroundColor: "#C0E6FC"
                },
                backgroundColor: () =>
                    '#ECF8FF'
            }}
        >
            <Grid container spacing={2} onClick={()=>navigate(`/teacher/${teacher.id}`)}>
                <CssBaseline/>
                <Grid item>
                    <Avatar alt={"avatar"} src={"https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"}
                            sx={{width: 100, height: 100}}/>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={6}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {`${teacher.userData.firstName} ${teacher.userData.lastName}`}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Ocena ogólna
                                : {teacher.opinions.length === 0 ? 'Brak ocen' : getAverageRating(teacher.opinions)}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="text.secondary">
                                {subjectNames.join(', ')}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{cursor: 'pointer'}} variant="body2">
                                {teacher.city}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            150zł / h
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
