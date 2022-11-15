<template>
  <div class="main">
    <Sidebar />
    <main class="main__container">
      <Header />
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

export default defineComponent({
  name: "Main",
  components: {
    Header,
    Sidebar,
  },
});
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: fit-content(200px) 1fr;
  grid-template-rows: 1fr;

  &__container {
    display: grid;
    grid-template-rows: 52px 1fr;
  }
}
</style>
