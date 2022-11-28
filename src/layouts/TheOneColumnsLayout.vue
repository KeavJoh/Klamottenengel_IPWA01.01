<template>
  <div>
    <TheNavbar></TheNavbar>
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