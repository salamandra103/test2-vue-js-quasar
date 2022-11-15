<template>
  <MainLayout>
    <Activities />
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MainLayout from "@/layouts/Main.vue";
import Activities from "@/pages/Activities.vue";
export default defineComponent({
  name: "App",
  components: {
    MainLayout,
    Activities,
  },
});
</script>
