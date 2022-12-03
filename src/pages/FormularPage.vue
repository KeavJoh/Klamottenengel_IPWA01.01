<template>
  <TheFreeColumsLayout>
    <template #mainSlot>
      <form class="container mt-5">
        <div class="row">
          <div class="col-md-12 form-check form-switch form-check-reverse ms-2">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckReverse"
              @click="changeForm"
            />
            <label class="form-check-label" for="flexSwitchCheckReverse"
              >Übergabe an der Geschäftsstelle</label
            >
          </div>
        </div>
        <div v-if="officeForm" class="row mt-5">
          <TheOfficeForm></TheOfficeForm>
        </div>
        <div v-if="!officeForm" class="row mt-5">
          <TheShippingForm></TheShippingForm>
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Place order
        </button>
      </form>
    </template>
  </TheFreeColumsLayout>
</template>

<script>
import TheFreeColumsLayout from "@/layouts/TheFreeColumsLayout";
import TheOfficeForm from "../components/TheOfficeForm";
import TheShippingForm from "../components/TheShippingForm";

export default {
  name: "OfficeFormularPage",
  data() {
    return {
      officeForm: false,
    };
  },
  components: {
    TheFreeColumsLayout,
    TheOfficeForm,
    TheShippingForm,
  },
  methods: {
    changeForm() {
      if (this.officeForm == false) {
        this.officeForm = true;
      } else {
        this.officeForm = false;
      }
    },
  },
};
</script>

<style scoped></style>
