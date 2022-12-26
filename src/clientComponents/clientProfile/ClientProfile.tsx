import {useParams} from "react-router-dom";
import {Grid, Paper, Typography} from "@mui/material";
import {AppointmentElement} from "../appointments/appointmentElement";
import {useEffect, useState} from "react";
import {ClientDto, initialClientDto} from "../../dtos/models/Client";
import {getClientById} from "../../app/services/ClientService";

export const ClientProfile = () => {
    const params = useParams()
    const clientId = params.clientId
    const [client, setClient] = useState<ClientDto>(initialClientDto)

    useEffect(() => {
        getClientById(clientId!).then(response => setClient(response))
    }, [])

    return (
        <Grid container sx={{display: "flex", marginTop: "2%", marginBottom: "2%"}} direction={"column"} spacing={2}>
            <Grid item container sx={{display: "flex"}} direction={"row"}>
                <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>
                    <Typography>
                        {client.userData.firstName}
                    </Typography>
                    <Typography>
                        {client.userData.lastName}
                    </Typography>
                    <Typography>
                        {client.userData.emailAddress}
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