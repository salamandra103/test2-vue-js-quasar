<template>
  <div class="main">
    <Sidebar />
    <main class="main__container">
      <Header />
      <div class="row justify-center q-pt-md q-pb-md">
        <div class="col-10">
          <slot></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/containers/Header/Header.vue";
import Sidebar from "@/containers/Sidebar/Sidebar.vue";

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

.container {
  max-width: 1100px;
  width: 100%;
  margin: 0 136px;
  background-color: black;
  margin: 0 auto;
}
</style>
