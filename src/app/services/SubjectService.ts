import axios from "axios";

export const getAllSubjects = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/subjects');
        return response.data;
    } catch (error) {
        console.log(error)
    }
}