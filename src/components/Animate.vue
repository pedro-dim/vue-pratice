<template>
    <div>


    </div>


    <h1>{{ user.dataUser }}</h1>
    <h1>{{ prop1 }}</h1>
</template>

<script setup>


//he 'defineProps' Function is native and import isn't needed

import { userStore } from '../store/userStore';
import { ref, onMounted } from 'vue';


const props = defineProps(['prop1', 'prop2']);

const btnClass = ref("bg-green-400 text-white p-2 m-2 w-12 rounded justify-center flex");

const user = userStore();




onMounted: {

    user.callApi();

}




</script>