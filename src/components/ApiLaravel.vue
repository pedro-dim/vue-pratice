<template>
    <div>

        <h1>Laravel</h1>
        <h2>
            {{ user.name }}

            {{ title }}

        </h2>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { userStore } from '../store/userStore.js';


const props = defineProps({
    title: {
        type: String,
        default: 'Default Value',
    },
})


const user = userStore()
const returned = []

onMounted(() => {

    console.log('test');


})


</script>

<style scoped></style>