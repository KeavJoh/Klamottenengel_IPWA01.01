<template>
  <!-- Vorname -->
  <div class="container mt-5">
    <div class="row text-center mb-5 bg-vue2 text-vue p-3">
        <h3>Vielen Dank für Ihre Spende!</h3>
        <h5>Ihre Spendenanmeldung ist erfolgreich bei uns eingegangen und wird am ....... abgeholt.</h5>
    </div>
    <div class="row mb-4">
      <div class="col">
        <div class="form-outline">
          <input type="text" class="form-control" value="Kevin" disabled />
          <label class="form-label" for="firstName">Vorname</label>
        </div>
      </div>

      <!-- Lastname -->
      <div class="col">
        <div class="form-outline">
          <input type="text" class="form-control" value="Johr" disabled />
          <label class="form-label" for="lastName">Nachname</label>
        </div>
      </div>
    </div>

    <!-- Adress -->
    <div class="row">
      <div class="form-outline mb-4 col-md-6">
        <div>
          <input
            type="text"
            class="form-control"
            value="Lüder-Clüver-Straße 25"
            disabled
          />
          <label class="form-label" for="form6Example4"
            >Straße und Hausnummer</label
          >
        </div>
      </div>

      <!-- City -->
      <div class="form-outline mb-4 col-md-4">
        <div>
          <input type="text" class="form-control" value="Bremen" disabled />
          <label class="form-label" for="form6Example4">Stadt</label>
        </div>
      </div>

      <!-- Zipcode -->
      <div class="col-md-2">
        <div>
          <input type="text" class="form-control" value="28779" disabled />
          <label for="inputZip" class="form-label">Postleitzahl</label>
        </div>
      </div>
    </div>

    <!-- Phone -->
    <div class="form-outline">
      <div>
        <input type="text" class="form-control" value="015222633070" disabled />
        <label class="form-label" for="form6Example6">Telefonnummer</label>
      </div>
    </div>

    <!-- DateTime -->
    <div class="form-outline">
      <div>
        <input
          type="text"
          class="form-control"
          value="20/03/2023 19:00"
          disabled
        />
        <label class="form-label" for="form6Example6">Abholtermin</label>
      </div>
    </div>

    <!-- Zielland -->
    <div class="form-outline">
      <div>
        <input type="text" class="form-control" value="Somalia" disabled />
        <label class="form-label" for="form6Example6">Zielland</label>
      </div>
    </div>

    <!-- Informationen -->
    <div class="form-outline mt-3">
      <p class="underline">Informationen zu Ihrer Spende:</p>
      <div>
        <textarea type="text" class="form-control" disabled>
5*Pullover, 3*Hose</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheShippingOutput",
};
</script>

<style></style>
