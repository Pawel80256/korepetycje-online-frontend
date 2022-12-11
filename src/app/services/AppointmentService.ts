import axios from "axios";

export const bookAppointment = async (appointmentId: string, userDataId: string, subjectName: string) => {
    try {
        await axios.put(`http://localhost:8080/api/appointment/${appointmentId}/book`,
            null,
            {
                params: {
                    userDataId,
                    subjectName
                }
            })
    } catch (error) {
        console.log(error)
    }
}