import {AppointmentDto} from "../../dtos/models/AppointmentDto";
import {AppointmentElement} from "./appointmentElement";

export interface AppointmentListProps {
    appointments: AppointmentDto[]
}

export const AppointmentList: React.FC<AppointmentListProps> = (props) => {
    const {appointments} = props
    return <>
        {appointments.map(a => {
            return <AppointmentElement appointment={a}/>
        })}
    </>
}
