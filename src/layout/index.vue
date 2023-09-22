<script lang="ts" setup>
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
</script>

<template>
    <div>
        <el-container>
            <Aside />
            <el-container style="flex-direction: column; height: 100vh">
                <Header />
                <el-main>
                    <el-scrollbar>
                        <router-view />
                    </el-scrollbar>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style lang="scss" scoped></style>
