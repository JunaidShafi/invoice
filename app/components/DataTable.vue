<script setup>
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

  const {pending, data:items} =  useFetch("/fetchdata")
function handledelete(item){
 const { pending, data:response} =  $fetch(`/removeitem/${item}`);
 if (!pending){
  console.log("ifblock")
  refreshNuxtData()
 }
}
const itempage =(item)=>{
  navigateTo(`/invoice/${item}`)
}

</script>

<template>
  <div class="w-3/4">
    
   
    <h1 class="font-extrabold text-3xl">Invoices</h1>
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader class="">
          <TableRow>
            <TableHead>S/No.</TableHead>
            <TableHead> Customer Name</TableHead>
            <TableHead>Type of Product</TableHead>
            <TableHead> Status </TableHead>
            <TableHead class="text-right"> Amount </TableHead>
      
       
          </TableRow>
        </TableHeader>
          <div v-if="pending">Loading Items</div>
        <TableBody v-if="!pending">
          <TableRow v-for="item in items" :key="item.id" @click = itempage(item.id) >
             <TableCell class="text-left">{{ item.id }} </TableCell>
            <TableCell class="font-medium">{{ item.customername }} </TableCell>
            <TableCell>{{ item.typeofproduct }}</TableCell>
            <TableCell> {{ item.current_status.toUpperCase() }} </TableCell>
            <TableCell class="text-right"> {{ item.amount }} </TableCell>   </TableRow>
            <TableCell class="text-right">
            
            </TableCell>
              
       
        </TableBody>
      </Table>
    </div>
  </div>
</template>
