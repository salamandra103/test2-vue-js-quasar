<template>
  <MainLayout>
    <Activities />
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Activities from "@/pages/Activities.vue";
import MainLayout from "@/layouts/Main.vue";

export default defineComponent({
  name: "App",
  components: {
    Activities,
    MainLayout,
  },
});
</script>
