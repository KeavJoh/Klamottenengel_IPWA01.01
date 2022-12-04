<template>
  <Form @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
    <div>
      <div class="row mb-3">
        <h3 class="underline">Abholung bei Ihnen</h3>
        <p>Nur innerhalb des PLZ Gebiet 28000 - 28999</p>
      </div>
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="row mb-4">
        <div class="col">
          <div class="form-outline">
            <Field
              as="input"
              name="Vorname"
              type="text"
              id="firstName"
              class="form-control"
            />
            <label class="form-label" for="firstName">Vorname</label>
          </div>
          <small class="text-danger" v-if="errors.Vorname">{{
            errors.Vorname
          }}</small>
        </div>
        <div class="col">
          <div class="form-outline">
            <Field
              as="input"
              name="Nachname"
              type="text"
              id="lastName"
              class="form-control"
            />
            <label class="form-label" for="lastName">Nachname</label>
          </div>
          <small class="text-danger" v-if="errors.Nachname">{{
            errors.Nachname
          }}</small>
        </div>
      </div>

      <!-- Text input -->
      <div class="row">
        <div class="form-outline mb-4 col-md-6">
          <div>
            <Field
              as="input"
              name="Adresse"
              type="text"
              id="form6Example4"
              class="form-control"
            />
            <label class="form-label" for="form6Example4"
              >Straße und Hausnummer</label
            >
          </div>
          <small class="text-danger" v-if="errors.Adresse">{{
            errors.Adresse
          }}</small>
        </div>
        <div class="form-outline mb-4 col-md-4">
          <div>
            <Field
              as="input"
              name="Stadt"
              type="text"
              id="form6Example4"
              class="form-control"
            />
            <label class="form-label" for="form6Example4">Stadt</label>
          </div>
          <small class="text-danger" v-if="errors.Stadt">{{
            errors.Stadt
          }}</small>
        </div>
        <div class="col-md-2">
          <div>
            <Field
              as="input"
              name="Postleitzahl"
              type="text"
              class="form-control"
              id="inputZip"
            />
            <label for="inputZip" class="form-label">Postleitzahl</label>
          </div>
          <small class="text-danger" v-if="errors.Postleitzahl">{{
            errors.Postleitzahl
          }}</small>
        </div>
      </div>
      <!-- Number input -->
      <div class="form-outline">
        <div>
          <Field
            as="input"
            name="Telefonnummer"
            type="text"
            id="form6Example6"
            class="form-control"
          />
          <label class="form-label" for="form6Example6">Telefonnummer</label>
        </div>
        <small class="text-danger" v-if="errors.Telefonnummer">{{
          errors.Telefonnummer
        }}</small>
      </div>

      <div>
        <div class="row">
          <div class="mt-4">
            <p class="underline">
              Bitte wählen Sie einen Abholtermin Mo-Fr zwischen 09:00 Uhr und
              20:00 Uhr
            </p>
              <Datepicker
                id="DateTime"
                v-model="date"
                :clearable="true"
                :no-today="true"
                :disabled-week-days="[6, 0]"
                week-start="0"
                :min-time="{ hours: 9, minutes: 0 }"
                :max-time="{ hours: 20, minutes: 0 }"
              />
          </div>
        </div>
      </div>

      <div>
        <div>
          <div class="row">
            <div class="mt-4">
              <p class="underline">
                Bitte wählen Sie ein Kriesengebiet. Ist kein Kriesengebiet
                ausgewählt, verwalten wir Ihre Spenden nach Bedarf der Gebiete.
              </p>
              <Field
                as="select"
                name="Zielland"
                class="form-select mb-2"
                aria-label="Kriesengebiet"
              >
                <option value="1">Mali</option>
                <option value="2">Somalia</option>
                <option value="3">Djibuti</option>
                <option value="4">Ukraine</option>
                <option value="5">Eritrea</option>
                <option value="6">Burkina-Faso</option>
                <option value="6">Nach Bedarf</option>
              </Field>
            </div>
          </div>
          <small class="text-danger" v-if="errors.Zielland">{{
            errors.Zielland
          }}</small>
        </div>

        <!-- Message input -->
        <p class="underline">
          Bitte teilen Sie uns kurz mit, was Sie Spenden möchten
        </p>
        <div class="form-outline mb-2">
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
      <small class="text-danger" v-if="errors.Informationen">{{
        errors.Informationen
      }}</small>
    </div>
    <button type="submit" class="btn btn-primary btn-block mt-4 mb-4">
      Place order
    </button>
  </Form>
</template>

<script setup>
import { ref } from "vue";
import Datepicker from "../../node_modules/@vuepic/vue-datepicker";
import "../../node_modules/@vuepic/vue-datepicker/dist/main.css";

const date = ref();
</script>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";

export default {
  name: "TheShippingForm",
  data() {
    const schema = yup.object().shape({
      Vorname: yup
        .string()
        .required("Bitte geben Sie Ihren Vornamen an.")
        .trim(),
      Nachname: yup
        .string()
        .required("Bitte geben Sie Ihren Nachnamen an.")
        .trim(),
      Adresse: yup.string().required("Bitte geben Sie Ihre Adresse an.").trim(),
      Stadt: yup.string().required("Bitte geben Sie Ihren Wohnort an").trim(),
      Postleitzahl: yup
        .number("Bitte verwenden Sie nur Zahlen")
        .required("Bitte geben Sie Ihre Postleitzahl an")
        .min(28000, "Keine gültige PLZ")
        .max(28999, "Keine gültige PLZ"),
      Telefonnummer: yup
        .string()
        .required("Bitte geben SIe Ihre Telefonnummer an"),
      Zielland: yup.string().required("Biite geben Sie ein Zielland ein "),
      Informationen: yup
        .string()
        .required("Bitte teilen Sie uns kurz mit was Sie spenden möchten"),
    });
    return {
      schema,
    };
  },
  components: {
    Field,
    Form,
    Datepicker,
  },
  methods: {
    submitData(values) {
      console.log(values);
    },
  },
};
</script>

<style scoped></style>
