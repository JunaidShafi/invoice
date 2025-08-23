<script setup>
const route = useRoute();

const { pending, data: items } = useFetch(`/sinvoice/${route.params.id}`);
</script>

<template>
  <div class="flex items-center justify-center w-screen gap-8">
    <div v-if="!pending">
      <h1>Invoice No #{{ items[0].id }}</h1>
      <h2>Status {{ items[0].current_status.toUpperCase() }}</h2>
      <h3>Amount Rs. {{ items[0].amount }}</h3>
    </div>
    <div v-else>
      <div>Loading Items...</div>
    </div>
    <div>
      <DeleteInvoice />
    </div>

    <div>
      <UpdateInvoice />
    </div>
  </div>
</template>
