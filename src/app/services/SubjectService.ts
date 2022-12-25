import axios from "axios";

export const getAllSubjects = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/subjects');
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getSubjectsByTeacherId = async (teacherId: string) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/teacher/${teacherId}/subjects`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const addSubject = async (teacherId: string, subjectName: string) => {
    try {
        await axios.post(`http://localhost:8080/api/teacher/${teacherId}/subject`, null, {
            params: {subjectName}
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteSubject = async (teacherId: string, subjectName: string) => {
    try {
        await axios.delete(`http://localhost:8080/api/teacher/${teacherId}/subject`, {
            params: {subjectName}
        })
    } catch (error) {
        console.log(error)
    }
}