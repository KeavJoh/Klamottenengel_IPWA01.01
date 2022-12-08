<template>
  <TheFreeColumsLayout>
    <template #mainSlot>
      <div class="container mt-5">
        <div class="row text-center mb-5 bg-vue2 text-vue p-3">
          <h3>Unsere Aktuellen Partnerländer</h3>
          <h5>
            Je nach Spendenaufkommen beliefern wir unsere Partnerländer alle 3 - 4 Monate
          </h5>
        </div>
        <div class="row ms-5 me-5">
          <div class="col-md-4 mb-5">
            <div class="card card-size">
              <img src="../assets/Djibuti.png" alt="" />
              <div class="card-body">
                <p class="card-text text-center display-6">Djibuti</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card">
              <img src="../assets/Mali.png" alt="" />
              <div class="card-body">
                <p class="card-text text-center display-6">Mali</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card">
              <img src="../assets/Ukraine.png" alt="" />
              <div class="card-body">
                <p class="card-text text-center display-6">Ukraine</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row ms-5 me-5">
          <div class="col-md-4 mb-5">
            <div class="card">
              <img src="../assets/Burkina_Faso.png" alt="" />
              <div class="card-body">
                <p class="card-text text-center display-6">Burkina-Faso</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card">
              <img src="../assets/Eritrea.png" alt="" />
              <div class="card-body">
                <p class="card-text text-center display-6">Eritrea</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card">
              <img src="../assets/Somalia.png" alt="" />
              <div class="card-body">
                <p class="card-text text-center display-6">Somalia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheFreeColumsLayout>
</template>

<script>
import TheFreeColumsLayout from "../layouts/TheFreeColumsLayout";

export default {
  name: "PartnerCountries",
  components: {
    TheFreeColumsLayout,
  },
};
</script>

<style scoped>
.darc-size {
  height: 60%;
  width: 60%;
}
</style>
