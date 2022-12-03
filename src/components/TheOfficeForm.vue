<template>
  <div class="row mb-3">
    <h3 class="underline">Abholung bei Ihnen</h3>
    <p>Unsere Öffnungszeiten sind Mo - Fr von 15:00 Uhr bis 20:00 Uhr</p>
    <TheCountryClothesForm></TheCountryClothesForm>
  </div>
</template>

<script>
import TheCountryClothesForm from "../components/TheCountryClothesForm";

export default {
  name: "TheOfficeForm",
  components: {
    TheCountryClothesForm,
  },
};
</script>

<style scoped></style>
