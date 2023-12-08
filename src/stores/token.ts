export const useTokenStore = defineStore('tokenTemp', () => {
    const tokenTemp = ref('')
    const token = computed(() => {
        try {
            return tokenTemp.value || window.localStorage.getItem('token') || ''
        } catch (error) {
            tokenTemp.value = ''
            window.localStorage.removeItem('token')
            throw new Error('get token error and removed token ')
        }
    })

    function setToken(data: string) {
        tokenTemp.value = data
    }

    return {
        token,
        setToken
    }
})
