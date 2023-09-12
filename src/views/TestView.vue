<script setup lang="ts">
import { apiGetAdList } from '@/api/test'

onMounted(() => {
    handleGetAdList()
})
const handleGetAdList = async () => {
    const res = await apiGetAdList()
    console.log(res)
}
</script>

<template>
    <div>TestView</div>
    <div>
        <el-button>
            testing
        </el-button>
    </div>
    <el-icon>
        <IEpEdit/>
    </el-icon>
</template>

<style scoped>

</style>
