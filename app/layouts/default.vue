<script setup></script>
<template>
  <div
    class="flex flex-col mx-0.5 justify-between min-h-screen overflow-hidden"
  >
    <div>
      <Navbar />
    </div>
    <div>
      <slot />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
