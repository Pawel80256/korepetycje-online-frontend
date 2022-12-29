import axios from "axios";

export const createOpinion = async (numericValue: number, textValue: string, clientId: string, teacherId: string) => {
    try {
        await axios.post("http://localhost:8080/api/opinion",
            {
                clientId,
                teacherId,
                textValue,
                numericValue,
                createdAt: new Date()
            })
    } catch (error) {
        console.log(error)
    }
}

export const getAllOpinions = async () => {
    try{
        const response = await axios.get('http://localhost:8080/api/opinions')
        return response.data
    }catch (error){
        console.log(error)
    }
}