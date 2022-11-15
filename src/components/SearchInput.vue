<template>
  <div class="search">
    <q-icon name="search" />
    <input type="search" placeholder="Search TextMagic workspace" @input="$emit('input', $event)" @change="$emit('change', $event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="scss" scoped>
.search {
  min-height: 36px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  background: #f7f7fc;
  padding: 0 14px;
  color: $distinct;
  font-size: 14px;

  input[type="search"] {
    height: 100%;
    width: 100%;
    background-color: transparent;
    font-weight: 400;
    padding-left: 10px;
    padding-right: 14px;

    &::placeholder {
      color: $light;
    }
  }
}
</style>
