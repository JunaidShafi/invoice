<script setup>
const props = defineProps(['items','pending'])
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"
const itempage =(item)=>{
  navigateTo(`/invoice/${item}`)
}
</script>


<template>
  <div class=" flex flex-col w-full justify-center items-center pt-0.5 mt-8">
    <!-- <div class="flex justify-end items-end w-3/4 mx-5"> -->
<!-- <div class=" flex justify-end">
  <Button variant="ghost" as-child>
   
      <download-excel :data = "items" name="Data.xls" > 
        
    <IconsExcel/>
      </download-excel>
       </Button>
      </div> -->




    <!-- </div> -->
  
  

  <div class="w-3/5">
    
   
    <h1 class="font-extrabold text-3xl">Invoices</h1>
    <div >
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
          <TableRow v-for="(item,index) in items" :key="item.id" @click = itempage(item.id) >
             <TableCell class="text-left">{{index+1}} </TableCell>
            <TableCell class="font-medium">{{ item.customername }} </TableCell>
            <TableCell>{{ item.typeofproduct }}</TableCell>
            <TableCell class="flex justify-center items-center"> <Badge :class="{'bg-green-500': item.current_status==='paid', 'bg-red-500': item.current_status==='unpaid'}"  >
{{ item.current_status.toUpperCase() }}


            </Badge>    </TableCell>
            <TableCell class="text-right"> {{ item.amount }} </TableCell>   </TableRow>
        </TableBody>
      </Table>
    </div></div>
  </div>
</template>
