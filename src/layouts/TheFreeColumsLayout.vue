<template>
  <div>
    <TheNavbar />
    <main>
      <div class="container-fluid d-flex align-items-center">
        <slot name="mainSlot"></slot>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar";
import TheFooter from "../components/TheFooter";

export default {
  name: "TheFreeColumnsLayout",
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>

<style scoped></style>
