import axios from "axios";

export const getAllCities = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/teacher/cities');
        return (response.data)
    } catch (error) {
        console.log(error)
    }
}