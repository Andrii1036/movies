import {axiosMovieService} from "./axios.service";
import {endpoint} from "../config/urls";
import {apiKey} from "../config/apiKey";

const genreService = {
    getAll: (language) => axiosMovieService.get(`${endpoint.genre}${endpoint.movie}/list?api_key=${apiKey}`, {
        params: {
            language: language || 'en-US'
        }
    }).then(value => value.data.genres)
}

export {genreService}