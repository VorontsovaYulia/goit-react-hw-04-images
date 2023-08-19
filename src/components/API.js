import axios from "axios";

const API_KEY = '38157746-35969d34d7ab2e6c4c682cf10';
axios.defaults.baseURL = "https://pixabay.com/api"


export const fetchImages = async (query, page) => {
    const response = await axios.get(`/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data.hits;
}


