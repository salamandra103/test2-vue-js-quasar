<template>
  <header class="header">
    <div class="left">
      <div class="button"></div>
      <div class="search"></div>
    </div>
    <div class="right">
      <div class="status"></div>
      <div class="calendar"></div>
      <div class="notification"></div>
      <div class="settings"></div>
      <div class="profile"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
