<template>
    <div :class="myClass">
        ChildComponent
    </div>
    <button class="bg-green-400 p-2 text-white rounded m-1" @click="Do">Click</button>
</template>

<script setup>
import { ref } from 'vue';

const test = ref('test');
const myClass = "bg-blue-400 p-2 text-white"


const Do = () => {
    console.log('My function works')
    this.$emit('myEvent')
}


</script>





$query_stm = "SELECT TODES FROM users WHERE gender= 'undefined' "