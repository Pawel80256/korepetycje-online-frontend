import {AppointmentDto} from "../../dtos/models/AppointmentDto";
import {AppointmentElement} from "./appointmentElement";
import {Grid} from "@mui/material";

export interface AppointmentListProps {
    appointments: AppointmentDto[]
}

export const AppointmentList: React.FC<AppointmentListProps> = (props) => {
    const {appointments} = props
    return <Grid container>
        {appointments.map(a => {
            return <AppointmentElement appointment={a}/>
        })}
    </Grid>
}
