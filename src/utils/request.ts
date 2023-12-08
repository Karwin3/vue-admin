import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { useTokenStore } from '@/stores/token'
import { apiRefreshToken } from '@/api/user'
import router from '@/router'

const tokenStore = useTokenStore()

const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_PREFIX,
    timeout: 5000
})
/**
 * @description request interceptor
 */
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token: string = tokenStore.token
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    async error => {
        if (error.response.status === 401) {
            // clear token and refresh again
            tokenStore.setToken('')
            window.localStorage.removeItem('token')
            const {
                data: { success, content }
            } = await apiRefreshToken()
            if (success) {
                // eslint-disable-next-line camelcase
                const { access_token, refresh_token } = JSON.parse(content)
                tokenStore.setToken(access_token)
                window.localStorage.setItem('token', access_token)
                window.localStorage.setItem('refresh_token', refresh_token)
                // Re-request the interface that reported an error due to invalid token
                return axiosInstance.request(error.config)
            } else {
                // refresh token failed, jump to login page
                ElMessage.error('token is invalid, please login again')
                await router.push({ name: 'Login' })
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    }
)
export default axiosInstance
