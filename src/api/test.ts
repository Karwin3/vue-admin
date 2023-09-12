import request from '@/utils/request'

export const apiGetAdList = () => {
    return request({
        url: '/front/ad/getAdList',
        method: 'get'
    })
}
