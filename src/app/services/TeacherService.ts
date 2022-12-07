import axios from "axios";

export const getTeacherById = async (teacherId:string) =>{
    try {
        const response = await axios.get(`http://localhost:8080/api/teacher/${teacherId}`);
        return (response.data)
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