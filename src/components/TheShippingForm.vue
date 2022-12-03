<template>
  <div>
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
    <div class="form-outline mb-4">
      <input type="text" id="form6Example6" class="form-control" />
      <label class="form-label" for="form6Example6">Telefonnumer</label>
    </div>

    <div class="row">
      <div class="mt-4">
        <p>
          Bitte wählen Sie ein Kriesengebiet. Ist kein Kriesengebiet ausgewählt,
          verwalten wir Ihre Spenden nach Bedarf der Gebiete.
        </p>
        <select class="form-select mb-4" aria-label="Kriesengebiet">
          <option value="1">Mali</option>
          <option value="2">Somalia</option>
          <option value="3">Djibuti</option>
          <option value="4">Ukraine</option>
          <option value="5">Eritrea</option>
          <option value="6">Burkina-Faso</option>
          <option selected value="6">Nach Bedarf</option>
        </select>
      </div>
    </div>

    <!-- Message input -->
    <p>Bitte teilen Sie uns kurz mit, was Sie Spenden möchten</p>
    <div class="form-outline mb-4">
      <textarea
        class="form-control"
        id="AdditionalInformation"
        rows="4"
        placeholder="Beispiel: 2 Pullover, 3 paar Schuhe, 5 T-Shirt´s"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheShippingForm",
};
</script>

<style scoped></style>
