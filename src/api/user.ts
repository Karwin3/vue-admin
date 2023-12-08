import request from '@/utils/request'
import type { ApiLoginFormData } from '@/typings/api'

/**
 * @description login
 * @param data
 */
export const apiLogin = (data: ApiLoginFormData) => {
    return request({
        url: '/front/user/login',
        method: 'post',
        data: `phone=${data.phone}&password=${data.password}`
    })
}

/**
 * @description get user info
 */
export const apiGetUserInfo = () => {
    return request({
        url: '/front/user/getInfo',
        method: 'get'
    })
}

/**
 * @description logout
 */
export const apiLogout = () => {
    return request({
        url: '/front/user/logout',
        method: 'post'
    })
}

/**
 * @description refresh token
 */
export const apiRefreshToken = () => {
    return request({
        url: '/front/user/refresh_token',
        method: 'post',
        params: {
            refreshtoken: window.localStorage.getItem('efresh_token')
        }
    })
}
