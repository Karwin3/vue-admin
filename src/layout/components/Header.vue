<script lang="ts" setup>
import { isCollapse } from './state'
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
                <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <el-icon class="el-icon--right">
                    <IEpArrowDown />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
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
