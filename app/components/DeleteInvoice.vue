<script setup>
const route = useRoute();

async function handledelete() {
  await $fetch(`/removeitem/${route.params.id[0]}`);
  navigateTo("/dashboard");
}
</script>

<template>
  <Button variant="destructive" @click="handledelete">Delete</Button>
</template>
