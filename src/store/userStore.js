import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({ count: 0, name: "Alice", age: "36" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
