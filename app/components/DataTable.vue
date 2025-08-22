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
let loading = ref(true);

const items = await $fetch("/fetchdata", {
  method: "GET",
});
await console.log(items);
loading = false;
</script>

<template>
  <div class="w-3/4">
    <h1 class="font-extrabold text-3xl">Invoices</h1>
    <div v-if="!loading">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead> Customer Name</TableHead>
            <TableHead>Type of Product</TableHead>
            <TableHead> Status </TableHead>
            <TableHead class="text-right"> Amount </TableHead>
            <TableHead class="text-right"> Delete </TableHead>
            <TableHead class="text-right"> Update Status </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow v-for="item in items" :key="item.id">
            <TableCell class="font-medium">{{ item.customername }} </TableCell>
            <TableCell>{{ item.typeofproduct }}</TableCell>
            <TableCell> {{ item.current_status.toUpperCase() }} </TableCell>
            <TableCell class="text-right"> {{ item.amount }} </TableCell>
            <TableCell class="text-right">
              <Button onclick="console.log({{id}})" variant="destructive">
                x</Button
              >
            </TableCell>
            <TableCell class="text-right">
              <Button variant="secondary"> Update</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
