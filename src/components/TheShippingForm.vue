<template>
  <div class="mt-5">
    <!-- 2 column grid layout with text inputs for the first and last names -->
    <div class="row mb-4">
      <div class="col">
        <div class="form-outline">
          <input type="text" id="firstName" class="form-control" />
          <label class="form-label" for="firstName">Vorname</label>
        </div>
      </div>
      <div class="col">
        <div class="form-outline">
          <input type="text" id="lastName" class="form-control" />
          <label class="form-label" for="lastName">Nachname</label>
        </div>
      </div>
    </div>

    <!-- Text input -->
    <div class="row">
      <div class="form-outline mb-4 col-md-6">
        <input type="text" id="form6Example4" class="form-control" />
        <label class="form-label" for="form6Example4"
          >Straße und Hausnummer</label
        >
      </div>
      <div class="form-outline mb-4 col-md-4">
        <input type="text" id="form6Example4" class="form-control" />
        <label class="form-label" for="form6Example4">Stadt</label>
      </div>
      <div class="col-md-2">
        <input type="text" class="form-control" id="inputZip" />
        <label for="inputZip" class="form-label">Postleitzahl</label>
      </div>
    </div>
    <!-- Number input -->
    <div class="form-outline">
      <input type="text" id="form6Example6" class="form-control" />
      <label class="form-label" for="form6Example6">Telefonnumer</label>
    </div>

    <TheDateTimePicker></TheDateTimePicker>

    <TheCountryClothesForm></TheCountryClothesForm>
  </div>
</template>

<script>
import TheCountryClothesForm from "../components/TheCountryClothesForm";
import TheDateTimePicker from "../components/TheDateTimePicker";

export default {
  name: "TheShippingForm",
  components: {
    TheCountryClothesForm,
    TheDateTimePicker,
  },
};
</script>

<style scoped></style>
