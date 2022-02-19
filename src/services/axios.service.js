import axios from "axios";

import {baseUrl} from "../config/urls";

const axiosMovieService=axios.create({
    baseURL:baseUrl
})


export {axiosMovieService}