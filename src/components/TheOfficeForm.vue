<template>
  <div class="row mb-3">
    <h3 class="underline">Abgabe in der Geschäftsstelle</h3>
    <p>Unsere Öffnungszeiten sind Mo - Fr von 15:00 Uhr bis 20:00 Uhr</p>
    <Form @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
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
                <option value="7">Nach Bedarf</option>
              </Field>
            </div>
          </div>
          <small class="text-danger" v-if="errors.Zielland">{{
            errors.Zielland
          }}</small>
        </div>

        <!-- Message input -->
        <p class="underline mt-2">
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
        <small class="text-danger" v-if="errors.Informationen">{{
          errors.Informationen
        }}</small>
      </div>
      <button type="submit" class="btn btn-primary btn-block mb-4 mt-4">
        Place order
      </button>
      >
    </Form>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";

export default {
  name: "TheOfficeForm",
  data() {
    const schema = yup.object().shape({
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
    Form,
    Field,
  },
  methods: {
    submitData(values) {
      this.$store
        .dispatch("loadDonationOffice", {
          zielland: values.Zielland,
          informationen: values.Informationen,
        })
        .then(() => {
          this.$store.dispatch("setFormularStatus", {
            activeOfficeFormular: true,
          });
          this.$router.push("/form/execute");
        });
    },
  },
};
</script>

<style scoped></style>
