<template>
  <div>
    <div class="row">
      <div class="mt-4">
        <p>
          Bitte wählen Sie einen Abholtermin Mo-Fr zwischen 09:00 Uhr und 20:00
          Uhr
        </p>
        <Datepicker
          id="DateTime"
          v-model="date"
          :clearable="true"
          :no-today="true"
          :disabled-week-days="[6, 0]"
          week-start="0"
          :min-time="{ hours: 9, minutes: 0 }"
          :max-time="{ hours: 20, minutes: 0 }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Datepicker from "../../node_modules/@vuepic/vue-datepicker";
import "../../node_modules/@vuepic/vue-datepicker/dist/main.css";

const date = ref();
</script>

<script>
export default {
  name: "TheDateTimePicker",
};
</script>

<style scoped></style>
