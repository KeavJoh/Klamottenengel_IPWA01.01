<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-vue">
          <router-link class="navbar-brand mx-auto" to="/"
        ><img
          src="../assets/Klamottenengel_Logo_No.png"
          alt="Klamottenengel Logo"
          class="img-fluid"
          style="width: 5em"
      /></router-link>
    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample11"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse text-center h5"
        id="navbarsExample11"
      >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Startseite</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/process">Ablauf</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/partner_countries"
              >Partnerländer</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/about_us">Über Uns</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="mx-auto text-center">
      <router-link to="/form/donate" class="btn btn-hover bg-vue2 fs-5"
        >Spenden</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style scoped>
.navbar {
  padding-top: unset !important;
  padding-bottom: unset !important;
}
</style>
