<template>
    <div :class="myCss">

        <router-link class="text-grey rounded px-2 py-1" to="/">Home</router-link>
        <router-link class="text-grey rounded px-2 py-1" to="/api">Api</router-link>
        <router-link class="text-grey rounded px-2 py-1" to="/about">About</router-link>
        <router-link class="text-grey rounded px-2 py-1" to="/form">Form</router-link>
        <router-link class="text-grey rounded px-2 py-1" to="/animate">Animate</router-link>


    </div>
</template>

<script setup>

import { ref, onMounted, reactive } from 'vue'


const myCss = ref('bg-green-800 text-white p-2 m-2');


</script>

<style scoped></style>