import axios from "axios";

const API_URL = "http://localhost:8080/api";

// const register = (email, password) => {
//     return axios.post(API_URL + "signup", {
//         email,
//         password,
//     });
// };

const login = (emailAddress: string, password: string) => {
    return axios
        .post(API_URL + "/authenticate", {
            emailAddress,
            password,
        })
        .then((response) => {
            // if (response.data.accessToken) {
            //     localStorage.setItem("user", JSON.stringify(response.data));
            // }
            console.log(response.data)
            // return response.data;
        });
};

const logout = () => {
    // localStorage.removeItem("user");
    console.log("logout")
};

const teacherAuthService = {
    // register,
    login,
    logout,
};

export default teacherAuthService;