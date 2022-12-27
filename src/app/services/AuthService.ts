import {RegisterRequest} from "../../dtos/requests/Authentication";
import axios from "axios";

export const register = (registerRequest:RegisterRequest) =>{
    try{
        axios.post(`http://localhost:8080/api/register`,registerRequest)
    }catch(error){
        console.log(error)
    }
}