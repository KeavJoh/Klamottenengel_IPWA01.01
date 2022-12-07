<template>
  <TheFreeColumsLayout>
    <template #mainSlot>
      <TheShippingOutput v-if="!getFormularStatus"></TheShippingOutput>
      <TheOfficeOutput v-if="getFormularStatus == true"></TheOfficeOutput>
    </template>
  </TheFreeColumsLayout>
</template>

<script>
import TheShippingOutput from "../components/TheShippingOutput";
import TheFreeColumsLayout from "../layouts/TheFreeColumsLayout";
import TheOfficeOutput from "../components/TheOfficeOutput";

export default {
  name: "DonationOutput",
  components: {
    TheShippingOutput,
    TheFreeColumsLayout,
    TheOfficeOutput,
  },
  computed: {
    getFormularStatus() {
      return this.$store.getters.getActiveOfficeFormular;
    },
  }
};
</script>

<style></style>
