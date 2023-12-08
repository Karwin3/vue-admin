<script lang="ts" setup>
import { isCollapse } from './state'
</script>

<template>
    <el-aside>
        <el-menu :collapse="isCollapse" router unique-opened>
            <a class="logo" href="/">
                <img alt="logo" src="@/assets/logo.svg" />
            </a>
            <el-menu-item index="/dashboard">
                <el-icon>
                    <IEpSetting />
                </el-icon>
                <span>Dashboard</span>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <IEpSetting />
                    </el-icon>
                    <span>管理相关</span>
                </template>
                <el-menu-item index="/test">
                    <el-icon>
                        <IEpSetting />
                    </el-icon>
                    <span>账号管理</span>
                </el-menu-item>
                <el-menu-item index="2-2">
                    <el-icon>
                        <IEpSetting />
                    </el-icon>
                    <span>角色管理</span>
                </el-menu-item>
                <el-menu-item index="2-3">
                    <el-icon>
                        <IEpSetting />
                    </el-icon>
                    <span>菜单管理</span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-aside>
</template>

<style lang="scss" scoped>
.el-aside {
    width: auto;
    height: 100vh;
}

.el-menu {
    width: 200px;
    border-right: none;

    &.el-menu--collapse {
        width: 60px;
    }
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    img {
        width: 32px;
        height: 32px;
    }
}
</style>
