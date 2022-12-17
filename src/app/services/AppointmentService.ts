import axios from "axios";

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