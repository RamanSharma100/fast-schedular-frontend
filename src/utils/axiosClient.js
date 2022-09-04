import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://api.fastschedular.live/',
})

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000

axiosClient.defaults.withCredentials = true

export default axiosClient
