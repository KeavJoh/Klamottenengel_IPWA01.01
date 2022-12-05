<template>
  <Form
    @submit="submitData"
    :validation-schema="schema"
    v-slot="{ errors }"
    id="formId"
  >
    <div>
      <div class="row mb-3">
        <h3 class="underline">Abholung bei Ihnen</h3>
        <p>Nur innerhalb des PLZ Gebiet 28000 - 28999</p>
      </div>

      <!-- Firstname -->
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

        <!-- Lastname -->
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

      <!-- Adress -->
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

        <!-- City -->
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

        <!-- Zipcode -->
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

      <!-- Phone -->
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

      <!-- DateTimePicker -->
      <div>
        <div class="row">
          <div class="mt-4">
            <p class="underline">
              Bitte wählen Sie einen Abholtermin Mo-Fr zwischen 09:00 Uhr und
              20:00 Uhr
            </p>
            <Datepicker
              id="DateTime"
              @update:modelValue="handleDate"
              :value="date"
              v-model="date"
              :clearable="true"
              :no-today="true"
              :disabled-week-days="[6, 0]"
              week-start="0"
              :min-time="{ hours: 9, minutes: 0 }"
              :max-time="{ hours: 20, minutes: 0 }"
            />
            <div id="DatepickerDiv"></div>
          </div>
        </div>
      </div>

      <!-- Partnercountrie -->
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

        <!-- Information area -->
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

    <!-- Submit -->
    <button type="submit" class="btn btn-primary btn-block mt-4 mb-4">
      Place order
    </button>
  </Form>
</template>

<script setup>
import { ref } from "vue";
import Datepicker from "../../node_modules/@vuepic/vue-datepicker";
import "../../node_modules/@vuepic/vue-datepicker/dist/main.css";
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
    const date = ref();
    let pickedDateTime;
    let testDateObject;
    const handleDate = (modelData) => {
      date.value = modelData;
      this.testDateObject = date.value;
      let pickedDay = date.value.getDate();
      let pickedMonth = date.value.getMonth() + 1;
      let pickedYear = date.value.getFullYear();
      let pickedHours = date.value.getHours();
      let pickedMinutes = date.value.getMinutes();
      this.pickedDateTime = `${pickedDay}/${pickedMonth}/${pickedYear} ${pickedHours}:${pickedMinutes}`;
    };
    return {
      schema,
      date,
      pickedDateTime,
      handleDate,
      testDateObject,
    };
  },
  computed: {},
  components: {
    Field,
    Form,
    Datepicker,
  },
  methods: {
    submitData(values) {
      if (this.pickedDateTime == undefined) {
        document.getElementById(
          "DatepickerDiv"
        ).innerHTML += `<small class="text-danger">Bitte geben Sie ein Datum und Uhrzeit an</small>`;
      } else {
        console.log(values);
        this.$store
          .dispatch("loadDonation", {
            vorname: values.Vorname,
            nachname: values.Nachname,
            adresse: values.Adresse,
            stadt: values.Stadt,
            postleitzahl: values.Postleitzahl,
            telefonnummer: values.Telefonnummer,
            date: this.pickedDateTime,
            zielland: values.Zielland,
            informationen: values.Informationen,
          })
          .then(() => {
            console.log("Erfolgreich");
          });
      }
    },
  },
};
</script>

<style scoped></style>
