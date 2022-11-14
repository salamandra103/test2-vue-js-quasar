<template>
  <div class="sidebar">
    <nav class="sidebar sidebar_container">
      <ul>
        <li v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index">
          <a href="#"><img src="#" alt="" />dsad</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
