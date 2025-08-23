<template>
  <div>
    <h1 v-if="isLoading">Loading... {{ Math.round(progress) }}%</h1>
    <button @click="simulateLoading">Simulate Loading</button>
  </div>
</template>

<script setup lang="ts">
import { useLoadingIndicator } from "#app/composables/loading-indicator";

const { isLoading, progress, start, finish } = useLoadingIndicator();

const simulateLoading = () => {
  start();
  setTimeout(() => {
    finish();
  }, 2000); // Simulate a 2-second loading process
};
</script>
