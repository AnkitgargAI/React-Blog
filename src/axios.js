import axios from 'axios';

const instance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

// to use default url staticly
instance.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// to add default headers accross all request
instance.defaults.headers.common['Auth'] = 'Auth 123';

export default instance