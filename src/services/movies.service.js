import {axiosMovieService} from "./axios.service";
import {endpoint} from "../config/urls";
import {apiKey} from "../config/apiKey";

const moviesService = {
    getAll: ({language, genre, pageNumber,primary_release_year}) => axiosMovieService.get(`${endpoint.discover}${endpoint.movie}?api_key=${apiKey}`, {
        params: {
            language: language,
            with_genres: genre,
            page:pageNumber,
            primary_release_year:primary_release_year
        }
    }).then(value => value.data),
    getByName: ({name, language}) => axiosMovieService.get(`${endpoint.search}${endpoint.movie}?api_key=${apiKey}&query=${name}`, {
        params: {
            language: language
        }
    }).then(value => value.data),
    getTopRated:({language})=>axiosMovieService.get(`${endpoint.movie}${endpoint.topRated}?api_key=${apiKey}`,{
        params:{
            language: language
        }
    })
        .then(value => value.data),
    getById:({id,language,append_to_response})=>axiosMovieService.get(`${endpoint.movie}/${id}?api_key=${apiKey}`,{
        params:{
        language: language,
        append_to_response:append_to_response
        }
    }).then(value => value.data)
}

export {moviesService}