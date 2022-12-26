import {AppointmentDto} from "../../dtos/models/AppointmentDto";
import {Avatar, Grid, Paper, Typography} from "@mui/material";
import * as React from "react";

export interface AppointmentElementProps {
    appointment: AppointmentDto
}

export const AppointmentElement = () => {
    return (
        <Paper style={{margin: "auto", width: "90%", padding: "5px", backgroundColor: "#ECF8FF"}}>
            <Grid item container direction={"row"}>

                <Grid item style={{width: "20%", alignItems: "center", textAlign: "center"}}>
                    <Avatar alt={"avatar"}
                            src={"https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"}
                            sx={{width: 100, height: 100, margin: "auto"}}/>

                </Grid>

                <Grid item style={{width: "30%"}}>
                    <Typography style={{fontSize: "150%"}}>
                        Imie Nazwisko
                    </Typography>
                    <Typography style={{fontSize: "130%"}}>
                        Miasto
                    </Typography>
                </Grid>

                <Grid item style={{width: "50%", textAlign: "right"}}>
                    <Typography>
                        20/09/2021 15:30
                    </Typography>
                    <Typography>
                        Przedmiot
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}