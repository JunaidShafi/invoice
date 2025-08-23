<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const updated = ref("");

const route = useRoute();

async function handleupdate() {
  try {
    await $fetch(`/updateitem/${route.params.id[0]}`, {
      method: "PUT",
      body: {
        stat: updated.value,
      },
    });
    refreshNuxtData();
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button class="bg-green-500"> Status </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="updated" @click="handleupdate">
        <DropdownMenuRadioItem value="paid"> Paid </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="unpaid"> Unpaid </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
