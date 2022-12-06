<template>
    <TheFreeColumsLayout>
        <template #mainSlot>
              <TheShippingOutput></TheShippingOutput>
        </template>
    </TheFreeColumsLayout>
</template>

<script>
import TheShippingOutput from "../components/TheShippingOutput";
import TheFreeColumsLayout from "../layouts/TheFreeColumsLayout";

export default {
name: "DonationOutput",
components: {
    TheShippingOutput,
    TheFreeColumsLayout,
}
}
</script>

<style>

</style>