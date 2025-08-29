<script setup>
useHead({
  title: "Dashboard",
  meta: [{ name: "description", content: "My amazing site." }],
});


const {pending, data:resp} =  useFetch("/fetchdata");





</script>

<template>
  <div v-if="!pending" class="flex flex-col pt-0.5 mt-0.5">

   <div class=" flex justify-center items-center  w-3/5 pt-0.5 mt-0.5">
   <Dpaid :items="resp.inv" :pending :acountPaid="resp.paid" :acountUnpaid="resp.unpaid"/>
   </div>
  <div class="flex justify-center items-center">
    <DataTable :items="resp.inv" :pending/>
  
</div> 
  </div>
<div v-else >Loading</div>


</template>
