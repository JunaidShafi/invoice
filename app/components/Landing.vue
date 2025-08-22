<template>
  <div class="flex flex-col justify-center items-center">
    <div>
      <h1
        class="text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
      >
        THIS IS THE LANDING PAGE
      </h1>
    </div>
    <div class="pt-2">
      <Button
        class="text-sm bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 text-white"
      >
        <NuxtLink to="/signin"> Sign In</NuxtLink>
      </Button>
    </div>
  </div>
</template>
