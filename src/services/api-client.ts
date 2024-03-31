import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'c10c527ec3474c5b9b3ff32d979e581e'
    }
})