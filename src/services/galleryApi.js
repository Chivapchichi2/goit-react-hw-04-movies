import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c79ebc5a4bb0dc4a78ae7b9d9db9a8b5';

const getTrendingMovies = (page) => axios
    .get(`trending/movie/day?api_key=${API_KEY}&page=${page}`)
    .then((response) => response.data.results);

const getByQueryMovies = (query, page) => axios
    .get(`search/movie?api_key=${API_KEY}&page=${page}&query=${query}`)
    .then((response) => response.data.results);

export default { getTrendingMovies, getByQueryMovies };
