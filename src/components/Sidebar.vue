<template>
  <aside class="sidebar" :class="{ hide: !isVisible }">
    <nav class="sidebar__container">
      <ul class="sidebar__list">
        <li class="sidebar__item" v-for="(item, index) in menu" :key="index">
          <a href="#" class="sidebar__link">
            <q-icon v-if="item.iconName" class="sidebar__link-icon" :name="item.iconName" />
            <Typography :font-type="'14 Body Text Semibold'" class="sidebar__link-text" :text="item.label" />
            <q-badge v-if="item.counter" class="sidebar__link-counter" rounded color="red" :label="item.counter" />
          </a>
        </li>
      </ul>
    </nav>

    <span class="sidebar__link sidebar__link_exit" @click="toggleVisible">
      <q-icon class="sidebar__link-icon" :name="'arrow_circle_left'" />
      <Typography :font-type="'14 Body Text Semibold'" class="sidebar__link-text" :text="'Minimize menu'" />
    </span>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Typography from "@/components/Typography.vue";

export default defineComponent({
  name: "Sidebar",
  components: {
    Typography,
  },
  data() {
    return {
      isVisible: true,
      menu: [
        {
          label: "Home",
          iconName: "home",
        },
        {
          label: "Messenger",
          iconName: "sms",
          counter: 5,
        },
        {
          label: "Tickets",
          iconName: "mail",
        },
        {
          label: "Campaigns",
          iconName: "work",
        },
        {
          label: "Contacts",
          iconName: "contacts",
        },
        {
          label: "Tasks",
          iconName: "task",
        },
        {
          label: "Deals",
          iconName: "monetization_on",
        },
        {
          label: "Files",
          iconName: "folder",
        },
        {
          label: "Automations",
          iconName: "settings_applications",
        },
        {
          label: "Reports",
          iconName: "analytics",
        },
      ],
    };
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
  },
});
</script>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
  min-height: 100vh;
  background-image: url("@/assets/sidebar-background.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #2f2f44;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 16px 8px;
  transition: width 0.5s;

  &.hide {
    width: 68px;
  }

  &__container {
    flex: 1 0 auto;
  }

  &__item {
    margin-bottom: 5px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__link {
    color: $light;
    transition: color 0.2s;
    text-decoration: none;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 0 16px;
    position: relative;

    &:hover {
      color: $white;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      text-decoration: none;
    }

    &-icon {
      font-size: 1.5em;
      margin-right: 18px;
    }

    &-counter {
      position: absolute;
      right: 16px;
      top: 13px;
      z-index: 1;
      background-color: #ed6a61 !important;
      transition: transform 0.5s;

      .hide & {
        transform: translate(10px, -10px);
      }
    }

    &-text {
      flex: 1 0 auto;
      transform: translateX(0);
      transition: transform 0.5s;

      .hide & {
        transform: translateX(200px);
      }
    }
  }
}
</style>
