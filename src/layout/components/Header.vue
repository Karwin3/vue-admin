<script lang="ts" setup>
import { isCollapse } from './state'
import { apiGetUserInfo, apiLogout } from '@/api/user'
import { useTokenStore } from '@/stores/token'
import router from '@/router'

const tokenStore = useTokenStore()

onMounted(() => {
    handleGetUserInfo()
    handleGetUserInfo()
})
const userInfo = reactive({ portrait: '', username: '' })
/**
 * @description get user info
 */
const handleGetUserInfo = async () => {
    const {
        data: { success }
    } = await apiGetUserInfo()

    if (success) {
        userInfo.portrait =
            'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
        userInfo.username = 'admin'
    }
}

const handleLogout = async () => {
    const { data } = await apiLogout()
    // apiLogout return data is {}, so judge res === {}
    if (Object.keys(data).length === 0) {
        tokenStore.setToken('')
        window.localStorage.clear()
        await router.push('/login')
    }
}
</script>

<template>
    <el-header>
        <el-icon
            style="margin-right: 10px; cursor: pointer"
            @click="isCollapse = !isCollapse"
        >
            <IEpExpand v-show="isCollapse" />
            <IEpFold v-show="!isCollapse" />
        </el-icon>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">
                homepage
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                <a href="/">promotion management</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown style="margin-left: auto; cursor: pointer" trigger="click">
            <span
                class="el-dropdown-link"
                style="display: flex; align-items: center"
            >
                <el-avatar :src="userInfo.portrait" />
                <el-icon class="el-icon--right">
                    <IEpArrowDown />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        {{ userInfo.username }}
                    </el-dropdown-item>
                    <el-dropdown-item @click="handleLogout">
                        Logout
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-header>
</template>

<style lang="scss" scoped>
.el-header {
    display: flex;
    align-items: center;
}
</style>
