import axios from "axios";

import {baseUrl, imageBaseUrl} from "../config/urls";

const axiosMovieService=axios.create({
    baseURL:baseUrl
})


export {axiosMovieService}