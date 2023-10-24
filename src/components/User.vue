<template>
    <div>
        <h1>User Component</h1>
        <p>
            Data from data "name": {{ name }}
        </p>
        <p>
            Data from Pinia store "name": {{ user.name }}

        </p>
    </div>
</template>

<script>

import { userStore } from '../store/userStore'

export default {
    setup() {
        const user = userStore()
        return { user }
    },
    methods: {
        doIt() {
            console.log(`Hello ${this.name}`);
        },
    },
    mounted() {
        this.doIt();
    },
};
</script>

<style scoped></style>