import { defineStore } from "pinia";

//Use this to acess state props

export const userStore = defineStore("user", {
  state: () => ({
    dataUser: [{ static: "New" }],
    name: "Adalberto Noronha",
  }),
  getters: {},
  actions: {
    async callApi() {
      try {
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const response = await fetch(url);
        const data = await response.json();
        console.log(this.name);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
