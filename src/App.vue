<template>
  <router-view id="app"> </router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";

/* overall css */
.bg-vue {
  background-color: rgb(52, 73, 94);
  color: white;
}
.bg-vue2 {
  background-color: rgb(65, 184, 131);
  color: white;
}
.text-vue {
  color: rgb(52, 73, 94);
}
.text-vue2 {
  color: rgb(65, 184, 131);
}
.active a.router-link-exact-active {
  color: rgb(65, 184, 131) !important;
}
.img-page {
  width: 400px;
}
.border-vue {
  border-color: rgb(52, 73, 94) !important;
}
.btn-hover:hover {
  color: rgb(52, 73, 94) !important;
}
.btn-select {
  width: 80%;
}
.underline {
  text-decoration: underline;
}
.display-7 {
  font-size: 1.5rem;
}
</style>
