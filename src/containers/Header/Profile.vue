<template>
  <q-btn outline color="transparent" text-color="distinct" no-caps style="height: 36px">
    <Typography :font-type="'14 Body Text Semibold'" :text="'TextMagic'" />
    <img src="@/assets/avatar.png" class="avatar q-ml-sm" alt="" />
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.q-btn:before {
  content: initial;
}

.q-btn--outline {
  border: 1px solid #e6e9f1;
}
</style>
