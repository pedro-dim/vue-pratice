<template>
  <div>
    <p>Open the console to see the lifecycle hooks messages.</p>
  </div>
</template>
  
<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";


// Data
const message = ref("Hello, Vue!");

// Lifecycle Hooks
onBeforeMount(() => {
  console.log("onBeforeMount: Component is about to be mounted.");
});

onMounted(() => {
  console.log("onMounted: Component has been mounted.");
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate: Component is about to be updated.");
});

onUpdated(() => {
  console.log("onUpdated: Component has been updated.");
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount: Component is about to be unmounted.");
});

onUnmounted(() => {
  console.log("onUnmounted: Component has been unmounted.");
});

return {
  message,
};

</script>
  