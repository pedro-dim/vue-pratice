<template>
    <div ref="myDiv">
        <div class="bg-blue-400 text-white p-2 m-4 w-24 rounded cursor-pointer hover:scale-95" v-auto-animate
            v-for="(item, index) in list" :key="index">
            Aqui {{ item }}
        </div>


    </div>

    <button class="bg-pink-400 text-white p-1 -2 rounded flex justify-center" @click="shufle()">Shufle</button>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const myDiv = ref();
const list = ref([

    1, 2, 3, 4, 5, 6
]);




const shufle = () => {

    list.value.sort(() => 0.5 - Math.random());
    console.log(list.value);


}

onMounted(() => {

    autoAnimate(myDiv.value) // thats it!
})






</script>

<style scoped></style>