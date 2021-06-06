import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '20826556-19d7dce6dc96816ed1b7dccf7';

const findImage = (query, page) => axios
    .get(
      `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then((response) => response.data.hits);

export default { findImage };
