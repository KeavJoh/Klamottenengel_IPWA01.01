<template>
  <!-- Vorname -->
  <div class="container mt-5">
    <div class="row text-center mb-5 bg-vue2 text-vue p-3">
      <h3>Vielen Dank für Ihre Spende!</h3>
      <h5>
        Ihre Spendenanmeldung ist erfolgreich bei uns eingegangen und wird am
        ....... abgeholt.
      </h5>
    </div>
    <div class="row mb-4">
      <div class="col-md-6">
        <div class="form-outline">
          <p class="bg-vue mb-0 p-2">{{ getVorname }}</p>
          <label class="form-label" for="firstName">Vorname</label>
        </div>
      </div>

      <!-- Lastname -->
      <div class="col-md-6">
        <div class="form-outline">
          <p class="bg-vue mb-0 p-2">{{ getNachname }}</p>
          <label class="form-label" for="lastName">Nachname</label>
        </div>
      </div>
    </div>

    <!-- Adress -->
    <div class="row">
      <div class="form-outline mb-4 col-md-6">
        <div>
          <p class="bg-vue mb-0 p-2">{{ getAdresse }}</p>
          <label class="form-label" for="form6Example4"
            >Straße und Hausnummer</label
          >
        </div>
      </div>

      <!-- City -->
      <div class="form-outline mb-4 col-md-4">
        <div>
          <p class="bg-vue mb-0 p-2">{{ getStadt }}</p>
          <label class="form-label" for="form6Example4">Stadt</label>
        </div>
      </div>

      <!-- Zipcode -->
      <div class="col-md-2">
        <div>
          <p class="bg-vue mb-0 p-2">{{ getPostleitzahl }}</p>
          <label for="inputZip" class="form-label">Postleitzahl</label>
        </div>
      </div>
    </div>

    <!-- Phone -->
    <div class="form-outline">
      <div>
        <p class="bg-vue mb-0 p-2">{{ getTelefonnumer }}</p>
        <label class="form-label" for="form6Example6">Telefonnummer</label>
      </div>
    </div>

    <!-- DateTime -->
    <div class="form-outline">
      <div>
        <p class="bg-vue mb-0 p-2">{{ getDate }}</p>
        <label class="form-label" for="form6Example6">Abholtermin</label>
      </div>
    </div>

    <!-- Zielland -->
    <div class="form-outline">
      <div>
        <p class="bg-vue mb-0 p-2">{{ getZielland }}</p>
        <label class="form-label" for="form6Example6">Zielland</label>
      </div>
    </div>

    <!-- Informationen -->
    <div class="form-outline mt-3">
      <p class="underline">Informationen zu Ihrer Spende:</p>
      <div>
        <p class="bg-vue mb-0 p-2">{{ getInformationen }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheShippingOutput",
  computed: {
    getVorname() {
      return this.$store.getters.getVorname;
    },
    getNachname() {
      return this.$store.getters.getNachname;
    },
    getAdresse() {
      return this.$store.getters.getAdresse;
    },
    getStadt() {
      return this.$store.getters.getStadt;
    },
    getPostleitzahl() {
      return this.$store.getters.getPostleitzahl;
    },
    getTelefonnumer() {
      return this.$store.getters.getTelefonnumer;
    },
    getDate() {
      return this.$store.getters.getDate;
    },
    getZielland() {
      return this.$store.getters.getZielland;
    },
    getInformationen() {
      return this.$store.getters.getInformationen;
    },
  },
};
</script>

<style></style>
