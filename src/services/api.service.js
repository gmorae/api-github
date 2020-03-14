import Axios from 'axios';

const Api = Axios.create({
    baseURL: 'https://api.github.com/users/',
    headers: {
        "Content-Type" : "application/json",
    }
});


export default Api;