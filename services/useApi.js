import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-medidascosturas.herokuapp.com/api/v1/'
})

export default api