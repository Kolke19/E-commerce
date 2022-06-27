import axios from 'axios';

const clientAxios = axios.create({
    baseUrl: 'http://localhost:7500/'
})

export default clientAxios;