import {AppointmentDto} from "../../dtos/models/AppointmentDto";
import {Avatar, Button, Grid, Paper, Typography} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {CancelBookingModal} from "./CancelBookingModal";

export interface AppointmentElementProps {
    appointment: AppointmentDto
}

export const AppointmentElement: React.FC<AppointmentElementProps> = (props) => {
    const {appointment} = props
    const [isOpenCancelBookingModal,setIsOpenCancelBookingModal] = useState<boolean>(false)
    return (
        <Paper style={{margin: "auto", width: "90%", padding: "5px", backgroundColor: "#ECF8FF",marginBottom:"2%"}}>
            <Grid item container direction={"row"}>

                <Grid item style={{width: "20%", alignItems: "center", textAlign: "center"}}>
                    <Avatar alt={"avatar"}
                            src={"https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"}
                            sx={{width: 100, height: 100, margin: "auto"}}/>

                </Grid>

                <Grid item style={{width: "30%"}}>
                    <Typography style={{fontSize: "150%"}}>
                        {appointment.teacher.userData.firstName} {appointment.teacher.userData.lastName}
                    </Typography>
                    <Typography style={{fontSize: "130%"}}>
                        {appointment.teacher.city}
                    </Typography>
                </Grid>

                <Grid item style={{width: "50%", textAlign: "right"}}>
                    <Typography>
                        {new Date(appointment.date).toLocaleDateString()}
                        <br/>
                        {new Date(appointment.date).getUTCHours()+2}:{new Date(appointment.date).getUTCMinutes()}
                    </Typography>
                    <Typography>
                        {appointment.subject.subjectName}
                    </Typography>
                    <Button variant={"contained"} color={"error"} onClick={()=>setIsOpenCancelBookingModal(true)}>
                        Anuluj wizytę
                    </Button>
                </Grid>
                <CancelBookingModal open={isOpenCancelBookingModal} setOpen={setIsOpenCancelBookingModal} appointmentId={appointment.id}/>
            </Grid>

        </Paper>
    )
}