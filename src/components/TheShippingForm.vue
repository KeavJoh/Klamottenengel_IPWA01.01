<template>
  <Form @submit="submitData">
    <div>
      <div class="row mb-3">
        <h3 class="underline">Abholung bei Ihnen</h3>
      </div>
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <Field
              as="input"
              name="firstName"
              type="text"
              id="firstName"
              class="form-control"
            />
            <label class="form-label" for="firstName">Vorname</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline">
            <Field
              as="input"
              name="lastName"
              type="text"
              id="lastName"
              class="form-control"
            />
            <label class="form-label" for="lastName">Nachname</label>
          </div>
        </div>
      </div>

      <!-- Text input -->
      <div class="row">
        <div class="form-outline mb-4 col-md-6">
          <Field
            as="input"
            name="adressLabel"
            type="text"
            id="form6Example4"
            class="form-control"
          />
          <label class="form-label" for="form6Example4"
            >Straße und Hausnummer</label
          >
        </div>
        <div class="form-outline mb-4 col-md-4">
          <Field
            as="input"
            name="cityLabel"
            type="text"
            id="form6Example4"
            class="form-control"
          />
          <label class="form-label" for="form6Example4">Stadt</label>
        </div>
        <div class="col-md-2">
          <Field
            as="input"
            name="zipCode"
            type="text"
            class="form-control"
            id="inputZip"
          />
          <label for="inputZip" class="form-label">Postleitzahl</label>
        </div>
      </div>
      <!-- Number input -->
      <div class="form-outline">
        <Field
          as="input"
          name="phoneNumber"
          type="text"
          id="form6Example6"
          class="form-control"
        />
        <label class="form-label" for="form6Example6">Telefonnumer</label>
      </div>

      <TheDateTimePicker></TheDateTimePicker>

      <TheCountryClothesForm></TheCountryClothesForm>
    </div>
    <button type="submit" class="btn btn-primary btn-block mb-4">
      Place order
    </button>
  </Form>
</template>

<script>
import TheCountryClothesForm from "../components/TheCountryClothesForm";
import TheDateTimePicker from "../components/TheDateTimePicker";
import { Form, Field } from "vee-validate";

export default {
  name: "TheShippingForm",
  components: {
    TheCountryClothesForm,
    TheDateTimePicker,
    Field,
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
