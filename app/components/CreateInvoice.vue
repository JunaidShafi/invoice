<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

useHead({
  title: "Create Invoice",
});

const formSchema = toTypedSchema(
  z.object({
    customername: z.string().min(2).max(50),
    typeofproduct: z.string().min(2).max(50),
    amount: z.number().gt(0),
    status: z.enum(["paid", "unpaid"]),
  })
);



const loading = ref(false)
const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  try {
    loading.value = !loading.value 
    console.log(loading.value)
    const response = await $fetch("/formdata", {
      method: "POST",
      body: values,
    });
    form.resetForm();
    await navigateTo("/dashboard")
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="flex flex-col p-2 mb-2 justify-center items-center w-2/6">
    <h1 class="font-extrabold text-6xl">Create Invoice</h1>
    <form
      @submit="onSubmit"
      class="flex flex-col items-center justify-center w-full"
    >
      <div class="w-full">
        <FormField v-slot="{ componentField }" name="customername">
          <FormItem class="m-3">
            <FormLabel>Customername</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Customer Name"
                v-bind="componentField"
              />
            </FormControl>
            <FormDescription> Name of the Customer </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="typeofproduct">
          <FormItem class="m-3">
            <FormLabel>Type of Product</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Product Name"
                v-bind="componentField"
              />
            </FormControl>
            <FormDescription> Product that was bought </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="amount">
          <FormItem class="m-3">
            <FormLabel>Amount</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Amount"
                v-bind="componentField"
              />
            </FormControl>
            <FormDescription> Amount in Rupees </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="status">
          <FormItem class="m-3 w-2/6">
            <FormLabel>Status</FormLabel>
            <Select v-bind="componentField">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Status of Invoice" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="paid">Paid </SelectItem>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormDescription> Status of Your Invoice </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
      <div>
        <Button type="submit" v-if="!loading" >Submit</Button>
        <Button  disabled class="bg-gray-700" v-if="loading" ><IconsSpinner /> </Button>
      </div>
    </form>
  </div>
</template>
