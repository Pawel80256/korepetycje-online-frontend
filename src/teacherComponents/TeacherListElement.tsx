import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {Avatar} from "@mui/material";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export const TeacherListElement = () => {
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
                <Grid item>
                        <Avatar alt={"avatar"} src={"https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"}
                                sx={{ width: 100, height: 100 }}/>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Paweł Nowacki
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Ocena ogólna : (gwiazdki)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Matematyka
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
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
