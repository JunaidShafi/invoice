<script setup>
const { userId, isLoaded } = useAuth();
</script>

<template>
  <div
    class="flex min-w-screen px-4 m-1 justify-between items-center shadow-red-300 shadow-md"
  >
    <NuxtLink to="/">
      <div class="flex items-center gap-3">
        <div><IconsLogo /></div>
        <div class="font-[700]">My Invoice App</div>
      </div>
    </NuxtLink>

    <div class="flex flex-row gap-3">
      <div v-if="userId">
        <Button variant="outline" as-child>
          <NuxtLink to="/createinvoice">Create Invoice</NuxtLink>
        </Button>
      </div>
      <div v-if="userId">
        <Button variant="outline" as-child>
          <NuxtLink to="/signin">Dashboard</NuxtLink>
        </Button>
      </div>
      <div v-if="userId">
        <Button variant="outline" as-child>
          <NuxtLink to="/signin">Reports</NuxtLink>
        </Button>
      </div>
    </div>

    <div>
      <div class="flex gap-8 flex-row m-3">
        <div v-if="!userId">
          <Button>
            <NuxtLink to="/signin"> Signin</NuxtLink>
          </Button>
        </div>
        <div v-if="!userId">
          <Button>
            <NuxtLink to="/signup"> Sign Up</NuxtLink>
          </Button>
        </div>
        <div v-if="userId">
          <UserButton />
        </div>
      </div>
    </div>
  </div>
</template>
