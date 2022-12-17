import axios from "axios";
import {AddParagraphRequestDto} from "../../dtos/models/ParagraphDto";

export const getTeacherById = async (teacherId: string) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/teacher/${teacherId}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllCities = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/teacher/cities');
        return (response.data)
    } catch (error) {
        console.log(error)
    }
}

export const getTeachersBySubjectAndCity = async (subject: string, city: string) => {
    try {
        const response = await axios.get(
            'http://localhost:8080/api/teachersBySubjectAndCity',
            {params: {subject, city}}
        )
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addToProfileInfo = async (teacherId: string, paragraph: AddParagraphRequestDto) => {
    try {
        await axios.post(`http://localhost:8080/api/teacher/${teacherId}/profileInfo`,
            {
                paragraphs: [paragraph]
            })
    } catch (error) {
        console.log(error)
    }
}

export const changeParagraphOrder = async (teacherId: string, paragraphId: string, orderUp: boolean) => {
    try {
        axios.put(`http://localhost:8080/api/teacher/${teacherId}/paragraph/${paragraphId}/order`,
            null,
            {
                params: {orderUp}
            })
    } catch (error) {
        console.log(error)
    }
}