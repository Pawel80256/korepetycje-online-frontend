import axios from "axios";

export const createOpinion = async (numericValue: number, textValue: string, clientUserDataId: string, teacherId: string) => {
    try {
        await axios.post("http://localhost:8080/api/opinion",
            {
                clientUserDataId,
                teacherId,
                textValue,
                numericValue,
                createdAt: new Date()
            })
    } catch (error) {
        console.log(error)
    }
}