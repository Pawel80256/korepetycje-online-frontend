import axios from "axios";

export const getAppointmentsByClientId = async (clientId: string) => {
    try {
        return await axios.get(`http://localhost:8080/api/client/${clientId}/appointments`)
    } catch (error) {
        console.log(error)
    }
}

export const getClientById = async (clientId: string) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/client/${clientId}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllClients = async () =>{
    try{
        const response = await axios.get('http://localhost:8080/api/clients')
        return response.data
    }catch (error){
        console.log(error)
    }
}