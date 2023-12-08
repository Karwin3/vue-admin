<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { apiLogin } from '@/api/user'
import { useTokenStore } from '@/stores/token'
import { useRoute, useRouter } from 'vue-router'

const tokenStore = useTokenStore()
const router = useRouter()
const route = useRoute()

const formRef = ref<FormInstance>()
const loginButtonLoading = ref(false)
const formData = reactive({ phone: '18201288771', password: '111111' })
const rules = reactive({
    phone: [
        { required: true, message: 'Please input phone', trigger: 'blur' },
        {
            pattern: /^1[3-9]\d{9}$/,
            message: 'Please input correct phone'
        }
    ],
    password: [
        { required: true, message: 'Please input password', trigger: 'blur' },
        {
            min: 6,
            message: 'Password must be at least 6 characters',
            trigger: 'blur'
        }
    ]
})

/**
 * @description handle login
 */
const handleLogin = async (formRef: FormInstance | undefined) => {
    if (!formRef) return
    await formRef.validate(async valid => {
        loginButtonLoading.value = true
        if (valid) {
            const {
                data: { success, content }
            } = await apiLogin(formData)
            if (success) {
                // eslint-disable-next-line camelcase
                const { access_token, refresh_token } = JSON.parse(content)
                tokenStore.setToken(access_token)
                window.localStorage.setItem('token', access_token)
                window.localStorage.setItem('refresh_token', refresh_token)
                ElMessage.success('Login success')
                await router.push((route.query.redirect as string) || '/')
            } else {
                ElMessage.error('Login failed')
            }
            loginButtonLoading.value = false
        }
    })
}

/**
 * @description handle reset
 */
const handleReset = async (formRef: FormInstance | undefined) => {
    if (!formRef) return
    formRef.resetFields()
}
</script>

<template>
    <div class="login-container">
        <el-card style="min-width: 400px">
            <template #header>
                <div>
                    <span>Login</span>
                </div>
            </template>
            <el-form
                ref="formRef"
                :model="formData"
                :rules="rules"
                label-position="top"
            >
                <el-form-item label="PHONE" prop="phone">
                    <el-input v-model="formData.phone" />
                </el-form-item>
                <el-form-item label="PASSWORD" prop="password">
                    <el-input v-model="formData.password" />
                </el-form-item>
                <el-form-item>
                    <el-button
                        :loading="loginButtonLoading"
                        style="width: 100%"
                        type="primary"
                        @click="handleLogin(formRef)"
                    >
                        Login
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button
                        style="width: 100%"
                        type="primary"
                        @click="handleReset(formRef)"
                    >
                        Reset
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<style lang="scss" scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
