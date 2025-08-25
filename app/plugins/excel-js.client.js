import JsonExcel from "vue-json-excel3";

export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp)
  nuxtApp.vueApp.component("downloadExcel", JsonExcel);
})
