<script setup>
useHead({
  title: "Dashboard",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<template>
  <div class="flex flex-col">

   <div>
  <Dpaid/>
   </div>
  <div class="flex justify-center items-center">
    <DataTable />
  
</div>

 
  </div>
</template>
