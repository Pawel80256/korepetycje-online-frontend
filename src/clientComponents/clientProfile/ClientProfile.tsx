import {useParams} from "react-router-dom";
import {Grid, Paper, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {ClientDto, initialClientDto} from "../../dtos/models/Client";
import {getClientById} from "../../app/services/ClientService";
import {AppointmentList} from "../appointments/AppointmentList";

export const ClientProfile = () => {
    const params = useParams()
    const clientId = params.clientId
    const [client, setClient] = useState<ClientDto>(initialClientDto)

    useEffect(() => {
        getClientById(clientId!).then(response => {
            console.log(response)
            setClient(response)
        })
    }, [])

    return (
        <Grid container sx={{display: "flex", marginTop: "2%", marginBottom: "2%"}} direction={"column"} spacing={2}>
            <Grid item container sx={{display: "flex"}} direction={"row"}>
                <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px", textAlign:"center"}}>
                    <Typography style={{fontSize:"150%"}}>
                        {client.userData.firstName} {client.userData.lastName}
                    </Typography>
                    <Typography style={{fontSize:"150%"}}>
                        {client.userData.emailAddress}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item container sx={{display: "flex"}} direction={"row"}>
                <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>
                    <Typography style={{fontSize: "150%", fontWeight: "bold", textAlign:"center"}}>
                        Umówione lekcje
                    </Typography>
                    <AppointmentList appointments={client.appointments.filter(appointment => new Date(appointment.date).getTime() > new Date().getTime())}/>
                </Paper>
            </Grid>
            <Grid item container sx={{display: "flex"}} direction={"row"}>
                <Paper elevation={2} style={{margin: "auto", width: "60%", padding: "5px"}}>
                    <Typography style={{fontSize: "150%", fontWeight: "bold", textAlign:"center"}}>
                        Historia lekcji
                    </Typography>
                    <AppointmentList appointments={client.appointments.filter(appointment => new Date(appointment.date).getTime() <= new Date().getTime())}/>
                </Paper>
            </Grid>
        </Grid>
    )
}