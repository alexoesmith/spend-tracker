<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const email = ref("");
const password = ref("");

const authStore = useAuthStore();

const signIn = () => {
  authStore.signUserIn(email.value, password.value);
};
</script>

<template>
  <form @submit.prevent="signIn">
    <input type="text" name="email" id="email" v-model="email" />
    <input type="password" name="password" id="password" v-model="password" />
    <button type="submit">Submit</button>
  </form>
</template>
