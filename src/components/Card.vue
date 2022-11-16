<template>
  <div class="row card">
    <div class="card__type">
      <div class="card__type-icon">
        <q-icon v-if="card.type === 'task'" name="task" />
        <q-icon v-if="card.type === 'deal'" name="monetization_on" />
        <q-icon v-if="card.type === 'ticket'" name="mail" />
        <q-icon v-if="card.type === 'company'" name="volume_up" />
      </div>
    </div>
    <div class="card__container q-pa-md bg-white col">
      <div class="row items-center justify-between q-mb-sm">
        <Typography :font-type="'12 Caption'" :text="card.type.toUpperCase()" class="text-light" />
        <Typography :font-type="'14 Body Text Regular'" :text="card.date" :class="{ 'text-orange': isMoreCurrentDate, 'text-red': !isMoreCurrentDate, 'text-distinct': isMoreCurrentDate === null }" />
      </div>
      <Typography :font-type="'16 Subhead Semibold'" :text="card.title" class="text-neutral q-mb-sm" />
      <Typography :font-type="'14 Body Text Regular'" :text="card.description" class="text-neutral" />

      <div class="row q-mt-md">
        <div class="col row items-center">
          <div class="card__status flex items-center q-mr-md">
            <Typography :font-type="'10 Caption CAPS'" :text="card.status" class="text-capitalize" />
          </div>
          <div class="q-gutter-xs row items-center">
            <q-icon v-if="card.priority === 'low'" name="expand_more" color="green" />
            <q-icon v-if="card.priority === 'high'" name="expand_less" color="green" />
            <q-icon v-if="card.priority === 'urgent'" name="keyboard_double_arrow_up" color="red" />
            <Typography :font-type="'14 Body Text Semibold'" :text="card.priority" class="text-capitalize text-distinct" />
          </div>
        </div>
        <div class="col-shrink">
          <div class="card__avatar">
            <img src="@/assets/profile_avatar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ICard } from "@/pages/data";

export default defineComponent({
  props: {
    card: {
      type: Object as PropType<ICard>,
    },
  },
  computed: {
    isMoreCurrentDate() {
      if (this.$props.card?.date) {
        return new Date(this.$props.card?.date).getTime() <= new Date().getTime();
      }
      return null;
    },
  },
});
</script>

<style lang="scss">
.card {
  margin-bottom: 8px;
  padding-left: 46px;
  position: relative;
  &:last-of-type {
    margin-bottom: 0;
  }

  &__type {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    color: $distinct;
    padding-top: 10px;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      top: 56px;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      background: #e6e9f1;
    }
    &-icon {
      position: relative;
      z-index: 1;
      width: 36px;
      height: 36px;
      border-radius: 999px;
      background-color: $white;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__container {
    border-radius: 4px;
  }

  &__avatar {
    width: 24px;
    height: 24px;
    border-radius: 999px;
    overflow: hidden;
    object-fit: cover;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__status {
    border-radius: 999px;
    border: 1px solid #c7bbdd;
    color: #746197;
    background: #f7f5fa;
    height: 20px;
    line-height: 20px;
    padding: 3px 8px;
  }
}
</style>
