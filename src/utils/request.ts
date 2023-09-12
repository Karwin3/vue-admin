import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_PREFIX,
    timeout: 5000
})

export default axiosInstance
