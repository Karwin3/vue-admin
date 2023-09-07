<script lang="ts" setup>
import TheWelcome from '../components/TheWelcome.vue'
// no need to import ref
const a = ref(0)
console.log(a.value)
</script>

<template>
    <main>
        <TheWelcome/>
    </main>
    <div>
    </div>
</template>
