<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const { pending, data, status } = useFetch("/fetchdata");
let countPaid = ref(0);
let countUnpaid = ref(0);
if (!pending.value) {
  data.value.map((i) =>
    i.current_status === "paid"
      ? (countPaid.value += 1)
      : (countUnpaid.value += 1)
  );
}
const refresh = computed(() => {
  return countPaid.value;
});
const DonutData = [
  {
    color: "#3b82f6",
    name: "Paid",
    value: countPaid.value,
  },
  {
    color: "Black",
    name: "Unpaid",
    value: countUnpaid.value,
  },
];
</script>

<template>
  <div v-if="(countPaid === 0, refr)">
    <Card class="w-[350px]">
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
          <div>{{ (countPaid / (countPaid + countUnpaid)) * 100 }} %</div>
        </div>
      </DonutChart>
    </Card>
  </div>
</template>
