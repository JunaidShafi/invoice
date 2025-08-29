<script setup lang="ts">
const props = defineProps(['items','pending','acountPaid','acountUnpaid'])
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const DonutData = [
  {
    color: "#3b82f6",
    name: "Paid",
    value: props.acountPaid,
  },
  {
    color: "Black",
    name: "Unpaid",
    value: props.acountUnpaid,
  },
]
</script>

<template>
  <div >   <Card class="w-[320px] h-[390px]">
      <CardTitle class="text-center">Paid and Unpaid Invoices</CardTitle>
      <DonutChart
        :data="DonutData.map((i) => i.value)"
        :height="205"
        :labels="DonutData"
        :hide-legend="false"
        :radius="0"
        :inner-radius="0.5"
        :outer-radius="0.5"
      >
        <div class="absolute text-center">
          <div class="font-semibold">Paid Invoices</div>
          <div>{{ ((acountPaid / (acountPaid + acountUnpaid)) * 100).toFixed(2) }} %</div>
        </div>
      </DonutChart>
   <CardFooter class="flex justify-between px-6 pb-6">
      <CardTitle>Paid Invoices {{ acountPaid }}</CardTitle>
      <CardTitle>Unpaid Invoices {{ acountUnpaid }}</CardTitle>
    </CardFooter>
    </Card>
  </div>
</template>
