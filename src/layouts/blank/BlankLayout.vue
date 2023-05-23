<template>
  <v-app>
    <RouterView class="page" />
  </v-app>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
<style scoped lang="scss">
 v-app {
     padding: 2rem!important;
 }
</style>
