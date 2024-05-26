import axios from "axios"

const Axios = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    withCredentials: true,  // Include credentials such as cookies in the request
})


export default Axios