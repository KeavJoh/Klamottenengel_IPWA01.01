<template>
  <!-- Remove the container if you want to extend the Footer to full width. -->
  <div class="footer bg-vue">
    <footer class="text-center text-white bg-vue">
      <div class="container">
        <section class="mt-5">
          <div class="row text-center d-flex justify-content-center pt-2">
            <div class="col-md-2">
              <h6 class="font-weight-bold active">
                <router-link to="/" class="text-white no-underline">Startseite</router-link>
              </h6>
            </div>
            <div class="col-md-2">
              <h6 class="font-weight-bold active">
                <router-link to="/process" class="text-white no-underline">Ablauf</router-link>
              </h6>
            </div>
            <div class="col-md-2">
              <h6 class="font-weight-bold active">
                <router-link to="/partner_countries" class="text-white no-underline">Partnerländer</router-link>
              </h6>
            </div>
            <div class="col-md-2">
              <h6 class="font-weight-bold active">
                <router-link to="/about_us" class="text-white no-underline">Über Uns</router-link>
              </h6>
            </div>
            <div class="col-md-2">
              <h6 class="font-weight-bold active">
                <router-link to="/impressum" class="text-white no-underline">Impressum</router-link>
              </h6>
            </div>
          </div>
        </section>
        <hr class="my-5" />
        <section class="mb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2022 Copyright:
        <router-link class="text-white" to="/"
          >Klamottenengel</router-link
        >
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  margin-top: 5em;
}
.no-underline {
    text-decoration: none;
}
</style>
