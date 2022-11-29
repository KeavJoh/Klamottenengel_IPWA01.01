<template>
  <TheFreeColumnsLayout>
    <template #mainSlot>
      <div class="container">
        <div class="container-fluid mt-3">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 class="text-vue">Wilkommen beim Klamottenengel</h1>
              <h2 class="text-vue2">
                Hier ist Ihre Spende in den richtigen Händen!
              </h2>
              <hr />
            </div>
          </div>
          <!-- Bild Rechts -->
          <div class="row mt-3 p-3 rounded">
            <div class="col-md-6 d-flex align-items-center">
              <p class="fs-4 text-center">
                Spenden Sie Ihre Altkleider und helfen Sie anderen Menschen! Und
                das nicht irgendwo, sonder genau dort, wo Sie helfen möchten.
              </p>
            </div>
            <div class="col-md-6">
              <img
                class="img-page rounded border border-vue border-5 mx-auto d-block"
                src="../assets/Spenden_Bild_Home.jpg"
              />
            </div>
          </div>
          <!-- Bild Links -->
          <div class="row mt-3 bg-vue p-3 rounded">
            <div class="col-md-6">
              <img
                class="img-page rounded border border-5 mx-auto d-block"
                src="../assets/Spenden_Bild_Home_2.jpg"
              />
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <p class="fs-4 text-center">
                Wir säubern und reparieren Ihre Altkleider und hauchen diesen
                neues Leben ein!
              </p>
            </div>
          </div>
          <!-- Bild Rechts -->
          <div class="row mt-3 p-3 rounded">
            <div class="col-md-6 d-flex align-items-center">
              <p class="fs-4 text-center">
                Alles aus einer Hand! Von der Aufbereitung über den Versand bis
                hin zur Verteilung.
              </p>
            </div>
            <div class="col-md-6">
              <img
                class="img-page rounded border border-vue border-5 mx-auto d-block"
                src="../assets/Spenden_Bild_Home_3.jpg"
              />
            </div>
          </div>
          <!-- Bild Links -->
          <div class="row mt-3 bg-vue p-3 rounded">
            <div class="col-md-6">
              <img
                class="img-page rounded border border-5 mx-auto d-block"
                src="../assets/Spenden_Bild_Home_4.jpg"
              />
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <p class="fs-4 text-center">
                Auch Kuscheltiere oder Spielwaren aus Holz können Sie gerne bei
                uns Spenden!
              </p>
            </div>
          </div>
          <!-- Partnerländer Button -->
          <div class="row mt-5">
            <div class="col-12 mx-auto">
              <p class="fs-3 text-center">
                Hier finden Sie unsere aktuellen Partnerländer
              </p>
              <div class="col-12 mx-auto text-center">
                <router-link
                  to="/partner_countries"
                  class="btn btn-hover bg-vue2 fs-3"
                  >Unsere Partnerländer</router-link
                >
              </div>
            </div>
          </div>
          <!-- Abgabemöglichkeiten -->
          <div class="row mt-5">
            <div class="row">
              <div class="col-sm-12 text-center">
                <p class="fs-3">Wie möchten Sie Ihre Spende bei uns Abgeben?</p>
              </div>
            </div>
            <div class="col-sm-6 text-center mt-3">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Vor Ort in dem Büro in Bremen</h5>
                  <p class="card-text">
                    Gerne nehmen Wir Ihre Spende in unserem Büro in Bremen
                    entgegen. Füllen sie einfach das folgende Formular aus und
                    kommen sie während unserer Öffnungszeiten Mo - Fr von 15-20
                    Uhr vorbei.
                  </p>
                  <router-link to="/form/office" class="btn btn-hover bg-vue2 fs-4 btn-select"
                    >Zur Abgabe</router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-sm-6 text-center mt-3">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Abholung bei Ihnen</h5>
                  <p class="card-text">
                    Innerhalb des Postleitzahlgebietes 28XXX kommen wir gerne
                    bei Ihnen vorbei und Sammeln Ihre Spenden direkt bei Ihnen
                    zu Hause oder auf der Arbeit ein. Abholzeiten sind Mo - Fr
                    von 09-20 Uhr.
                  </p>
                  <router-link to="/form/shipping" class="btn btn-hover bg-vue2 fs-4 btn-select"
                    >Zur Abholung</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheFreeColumnsLayout>
</template>

<script>
import TheFreeColumnsLayout from "../layouts/TheFreeColumsLayout";

export default {
  name: "HomePage",
  components: {
    TheFreeColumnsLayout,
  },
};
</script>

<style scoped></style>
