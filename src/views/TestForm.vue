<template>
  <form class="max-w-sm mx-auto mt-8 shadow-md p-8 rounded">
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="username">
        Username
      </label>
      <input
        v-model="username"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Enter your username"
      />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 font-bold mb-2" for="password">
        Password
      </label>
      <input
        v-model="password"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Enter your password"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        @click="submitForm"
      >
        Submit
      </button>
    </div>
  </form>
  <hr />
  <div>
    {{ username }}
    {{ password }}
  </div>
</template>
  
<script>
export default {
  name: "TestForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Enviado!");
    },
  },
};
</script>
  