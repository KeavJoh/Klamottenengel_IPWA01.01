<template>
  <TheTwoColumnsLayout>
    <template #leftCol>
        <div class="bg-vue">Hallo</div>
    </template>
    <template #rightCol>
        <div class="bg-vue2">Test</div>
    </template>
  </TheTwoColumnsLayout>
</template>

<script>
import TheTwoColumnsLayout from "../layouts/TheTwoColumnsLayout"

export default {
name:"HomePage",
components: {
    TheTwoColumnsLayout,
}
}
</script>

<style scoped>

</style>