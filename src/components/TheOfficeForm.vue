<template>
  <div class="row mb-3">
    <h3 class="underline">Abholung bei Ihnen</h3>
    <p>Unsere Öffnungszeiten sind Mo - Fr von 15:00 Uhr bis 20:00 Uhr</p>
    <Form @submit="submitData">
      <TheCountryClothesForm></TheCountryClothesForm>
      <button type="submit" class="btn btn-primary btn-block mb-4">
        Place order
      </button>
    </Form>
  </div>
</template>

<script>
import TheCountryClothesForm from "../components/TheCountryClothesForm";
import { Form } from "vee-validate";

export default {
  name: "TheOfficeForm",
  components: {
    TheCountryClothesForm,
    Form,
  },
  methods: {
    submitData(values) {
      console.log(values);
    },
  },
};
</script>

<style scoped></style>
