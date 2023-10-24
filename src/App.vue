<template>
  <div>
    <TestForm />
  </div>
</template>

<script>
import TestForm from "./components/TestForm.vue";

export default {
  name: "App",
  components: { TestForm },
  data() {
    return {
      test: "Teste de paramentro",
    };
  },
};
</script>


<style scoped></style>
