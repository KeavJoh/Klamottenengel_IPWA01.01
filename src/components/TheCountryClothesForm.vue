<template>
  <div>
    <div class="row">
      <div class="mt-4">
        <p class="underline">
          Bitte wählen Sie ein Kriesengebiet. Ist kein Kriesengebiet ausgewählt,
          verwalten wir Ihre Spenden nach Bedarf der Gebiete.
        </p>
        <Field
          as="select"
          name="Zielland"
          class="form-select mb-4"
          aria-label="Kriesengebiet"
        >
          <option value="1">Mali</option>
          <option value="2">Somalia</option>
          <option value="3">Djibuti</option>
          <option value="4">Ukraine</option>
          <option value="5">Eritrea</option>
          <option value="6">Burkina-Faso</option>
          <option selected value="6">Nach Bedarf</option>
        </Field>
      </div>
    </div>

    <!-- Message input -->
    <p class="underline">
      Bitte teilen Sie uns kurz mit, was Sie Spenden möchten
    </p>
    <div class="form-outline mb-4">
      <Field
        as="textarea"
        name="Informationen"
        class="form-control"
        id="AdditionalInformation"
        rows="4"
        placeholder="Beispiel: 2 Pullover, 3 paar Schuhe, 5 T-Shirt´s"
      ></Field>
    </div>
  </div>
</template>

<script>
import { Field } from "vee-validate";

export default {
  name: "TheCountryClothesForm",
  components: {
    Field,
  },
  methods: {},
};
</script>

<style scoped></style>
