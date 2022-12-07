<template>
  <div class="container mt-5">
    <div class="row text-center mb-5 bg-vue2 text-vue p-3">
      <h3>Vielen Dank für Ihre Spende!</h3>
      <h5>
        Ihre Spendenanmeldung ist erfolgreich bei uns eingegangen und Sie können diese jederzeit bei uns Abgeben.
      </h5>
    </div>

    <!-- Zielland -->
    <div class="form-outline">
      <div>
        <p class="bg-vue mb-0 p-2 display-7">{{ getZielland }}</p>
        <label class="form-label" for="form6Example6">Zielland</label>
      </div>
    </div>

    <!-- Informationen -->
    <div class="form-outline mt-3">
      <p class="underline">Informationen zu Ihrer Spende:</p>
      <div>
        <p class="bg-vue mb-0 p-2 display-7">{{ getInformationen }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheOfficeOutput",
  computed: {
    getZielland() {
      return this.$store.getters.getZielland;
    },
    getInformationen() {
      return this.$store.getters.getInformationen;
    },
  },
};
</script>

<style scoped></style>
