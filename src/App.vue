<template>
  <div>
    <Header />

    <router-link class="text-grey rounded px-2 py-1" to="/">Home</router-link>
    <router-link class="text-grey rounded px-2 py-1" to="/about"
      >About</router-link
    >
    <router-link class="text-grey rounded px-2 py-1" to="/Form"
      >Form</router-link
    >

    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TestForm from "./views/TestForm.vue";

export default {
  name: "App",
  components: { TestForm, Header },
  data() {
    return {
      test: "Teste de paramentro",
    };
  },
};
</script>


<style scoped>
</style>
