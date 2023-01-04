import axios from "axios";
import {Dayjs} from "dayjs";

export const createAppointment = async (teacherId: string, date: Dayjs) => {
    try {
        axios.post(`http://localhost:8080/api/appointment`, {teacherId, date})
    } catch (error) {
        console.log(error)
    }
}
export const bookAppointment = async (appointmentId: string, clientId: string, subjectName: string) => {
    try {
        await axios.put(`http://localhost:8080/api/appointment/${appointmentId}/book`,
            null,
            {
                params: {
                    clientId,
                    subjectName
                }
            })
    } catch (error) {
        console.log(error)
    }
}

export const deleteAppointment = async (appointmentId:string) =>{
    try{
        await axios.delete(`http://localhost:8080/api/appointment/${appointmentId}`)
    }catch (error){
        console.log(error)
    }
}