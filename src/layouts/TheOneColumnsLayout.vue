<template>
  <div>
    <TheNavbar></TheNavbar>
        <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <slot name="maintCol">
              <h1>Linke Seite</h1>
            </slot>
          </div>
        </div>
      </div>
    </main>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar";
import TheFooter from "../components/TheFooter";

export default {
name: "TheOneColumnsLayout",
components: {
    TheNavbar,
    TheFooter,
}
}
</script>

<style scoped>

</style>