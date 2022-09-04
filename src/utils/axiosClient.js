import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/',
})

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000

axiosClient.defaults.withCredentials = true

export default axiosClient
