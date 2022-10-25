

<template>


<div class="test" v-if="data">

  <pre>{{data}}</pre>

</div>

<div class="test" v-else="data">

<pre>{{'Nao existe nenhum registro'}}</pre>

</div>

</template>




<script setup>

import {ref, onMounted} from 'vue'

const data = ref(null)

onMounted( async()=>{

data.value = await fetch('https://api.storyblok.com/v2/cdn/stories/landing-page?version=draft&token=3SzY5WlQOMrjN3czquz8JAtt').then((response)=> response.jason())



})






</script>




<style scoped>

.test{


background-color: orange;
color: #fff;
padding: 8px;
border-radius: 0.4rem;

}


</style>