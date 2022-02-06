import { apiKey } from "./apiKeys";
import axiosService from "./axios.service";

function ApiMovies() {
    this.fetchPopularMovies = () => {
        return axiosService.get(`movie/popular?api_key=${apiKey}&language=en-US&page=1`).then((response) => response.data.results);
    }

    this.fetchUpcomingMovies = () => {
        return axiosService.get(`movie/upcoming?api_key=${apiKey}&language=en-US&page=1`).then((response) => response.data.results);
    }

    this.fetchMovieById = (movie_id) => {
        return axiosService.get(`movie/${movie_id}?api_key=${apiKey}&language=en-US`).then((response) => response.data);
    }

    this.fetchMoviesGenres = () => {
        return axiosService.get(`genre/movie/list?api_key=${apiKey}&language=en-US`).then((response) => response.data.results);
    }

    this.fetchMoviesByGenre = (genreId, page) => {
        return axiosService.get(`movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`).then((response) => response.data.results);
    }

   
};



const apiIntance = new ApiMovies();

export default apiIntance;