<script setup>
import { Title } from "#components";

useHead({
  title: "Welcome to App",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>
<template>
  <div>
    <!-- <NuxtLoadingIndicator/> -->
    <Landing />
  </div>
</template>
