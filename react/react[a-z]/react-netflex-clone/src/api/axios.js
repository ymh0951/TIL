import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'f1e7da3f22c0c8a2f0ad3287d5c15e0d',
        language: 'ko-KR'
    },
});

export default instance;