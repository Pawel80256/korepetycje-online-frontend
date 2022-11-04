import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Avatar} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {TeacherDto} from "../dtos/models/Teacher";

interface TeacherListElementProps {
    teacher: TeacherDto
}

export const TeacherListElement: React.FC<TeacherListElementProps> = (props: TeacherListElementProps) => {
    const {teacher} = props
    // const subjectNames = teacher.subjects.map(subject => subject.subjectName)
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
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
                                Ocena ogólna : (dorobic utils obliczajacy srednia)
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="text.secondary">
                                {/*{subjectNames.join(', ')}*/}
                                Matematyka, Informatyka, j.angielski
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{cursor: 'pointer'}} variant="body2">
                                Zambrów ul. Bema 4/26
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
