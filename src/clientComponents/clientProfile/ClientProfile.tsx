import {useParams} from "react-router-dom";
import {Grid, Paper, Typography} from "@mui/material";
import {AppointmentElement} from "../appointments/appointmentElement";

export const ClientProfile = () => {
    const params = useParams()

    return (
        <Grid container sx={{display: "flex", marginTop: "2%", marginBottom: "2%"}} direction={"column"} spacing={2}>
            <Grid item container sx={{display: "flex"}} direction={"row"}>
                <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>
                    <Typography>
                        imie
                    </Typography>
                    <Typography>
                        nazwisko
                    </Typography>
                    <Typography>
                        email
                    </Typography>
                </Paper>
            </Grid>
            <Grid item container sx={{display: "flex"}} direction={"row"}>
                <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>
                    <Typography style={{fontSize: "150%", fontWeight: "bold"}}>
                        Umówione wizyty
                    </Typography>
                    <AppointmentElement/>
                </Paper>
            </Grid>
            <Grid item container sx={{display: "flex"}} direction={"row"}>
                <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>
                    <Typography style={{fontSize: "150%", fontWeight: "bold"}}>
                        Historia wizyt
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}