<template>
  <header class="header">
    <div class="header__left">
      <q-btn color="primary" no-caps class="header__button">
        Create
        <q-menu :style="{ color: '#4E4B66', width: ' 188px', maxHeight: 'initial', padding: '10px 0' }">
          <q-list>
            <template v-for="(item, index) in createMenu" :key="index">
              <q-item class="header-create__item" clickable v-close-popup>
                <q-icon v-if="item.iconName" :style="{ marginRight: '14px', fontSize: '1.2em' }" :name="item.iconName" />
                <q-item-section>
                  <Typography :font-type="'14 Body Text Semibold'" :text="item.label" />
                </q-item-section>
              </q-item>
              <q-separator v-if="item.split" />
            </template>
          </q-list>
        </q-menu>
      </q-btn>
      <div class="header__search">
        <q-icon name="search" />
        <input type="search" placeholder="Search TextMagic workspace" />
      </div>
    </div>
    <div class="header__right">
      <div class="header-status">
        <button type="button" class="header-status__button" :class="{ [currentStatus]: true, active: isShowStatus }" @click="isShowStatus = !isShowStatus">
          <Typography :font-type="'Button Medium'" :text="'Online'"></Typography>
        </button>
        <div class="header-status__container" :class="{ active: isShowStatus }">
          <ul class="header-status__list">
            <li class="header-status__item success">
              <Typography :font-type="'14 Body Text Semibold'" :text="'Online'" />
            </li>
            <li class="header-status__item">
              <label>
                <Typography :font-type="'14 Body Text Semibold'" :text="'Accept calls'" />
                <q-toggle v-model="switch1" />
              </label>
            </li>
            <li class="header-status__item">
              <label>
                <Typography :font-type="'14 Body Text Semibold'" :text="'Accept chats'" />
                <q-toggle v-model="switch2" />
              </label>
            </li>
            <li class="header-status__item warning">
              <Typography :font-type="'14 Body Text Semibold'" :text="'Away'" />
            </li>
            <li class="header-status__item error">
              <Typography :font-type="'14 Body Text Semibold'" :text="'Do not disturb'" />
            </li>
            <li class="header-status__item notification">
              <Typography :font-type="'14 Body Text Semibold'" :text="'Offline'" />
            </li>
          </ul>
        </div>
      </div>
      <div class="header__tools">
        <ul>
          <li>
            <button type="button" class="calendar">
              <q-icon :name="'calendar_month'" />
            </button>
          </li>
          <li>
            <button type="button" class="notification">
              <q-icon :name="'notification_important'" />
            </button>
          </li>
          <li>
            <button type="button" class="settings">
              <q-icon :name="'settings'" />
            </button>
          </li>
        </ul>
      </div>

      <!-- <div class="profile"></div> -->
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Typography from "@/components/Typography.vue";

export default defineComponent({
  name: "Header",
  components: {
    Typography,
  },
  data() {
    return {
      isShowStatus: false,
      currentStatus: "success",
      search: "",
      switch1: true,
      switch2: true,
      createMenu: [
        {
          label: "Text message",
          iconName: "sms",
        },
        {
          label: "Email",
          iconName: "email",
        },
        {
          label: "Call",
          iconName: "phone",
          split: true,
        },
        {
          label: "Campaign",
          iconName: "work",
        },
        {
          label: "Task",
          iconName: "task",
        },
        {
          label: "Deal",
          iconName: "monetization_on",
          split: true,
        },
        {
          label: "Contact",
          iconName: "contacts",
        },
        {
          label: "Organization",
          iconName: "home_work",
        },
        {
          label: "List",
          iconName: "list_alt",
        },
        {
          label: "Segment",
          iconName: "pie_chart",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  padding: 0 32px;
  background-color: $white;
  box-shadow: inset 0px -1px 0px #e6e9f1;
  display: flex;
  flex-flow: row wrap;
  align-content: center;

  &-create {
    &__container {
      color: $neutral;
      width: 188px;
      max-height: initial;
      padding: 10px 0;
    }

    &__item {
      align-items: center;
      height: 32px;
      min-height: 32px;
    }
  }

  &-status {
    position: relative;

    &__button {
      width: 88px;
      height: 36px;
      border-radius: 4px;
      background-color: #f7f7fc;
      transition: background-color 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $distinct;

      &:before {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 999px;
        margin: 6px;
      }

      &.success {
        &:before {
          background-color: $affirmation;
        }
      }

      &.active {
        background-color: $distinct;
        color: $white;

        &:hover {
          background-color: #989aad;
        }
      }

      &:hover:not(.active) {
        background-color: #e5e5e5;
      }
    }

    &__container {
      background: #ffffff;
      box-shadow: 0px 6.25px 16px rgba(0, 0, 0, 0.085);
      border-radius: 4px;
      position: absolute;
      right: 0;
      top: 100%;
      max-width: 245px;
      width: 245px;
      transition: transform 0.5s, opacity 0.3s;
      opacity: 0;

      &.active {
        opacity: 1;
      }
    }

    &__list {
      padding: 5px 0;
    }

    &__item {
      height: 36px;
      padding: 0 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      padding-left: 34px;

      label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }

      &:hover {
        background: #f7f7fc;
      }

      &:before {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 999px;
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
      }

      &.success {
        &:before {
          background-color: $affirmation;
        }
      }

      &.warning {
        &:before {
          background-color: $warning;
        }
      }

      &.error {
        &:before {
          background-color: $error;
        }
      }

      &.notification {
        &:before {
          background-color: #e6e9f1;
          border: 1px solid #b9b9b9;
        }
      }
    }
  }

  &__tools {
    display: flex;
    flex-flow: row wrap;

    ul {
      display: flex;
      flex-flow: row wrap;
      padding: 0 6px;

      li {
        margin: 0 13px;

        button {
          background-color: transparent;
          transition: transform .2s;

          i {
            font-size: 1.5em;
            color: $distinct;
          }

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }


  }

  &__left {
    display: flex;
    align-content: center;
    flex: 1 0 auto;
  }

  &__right {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  &__search {
    height: 36px;
    max-width: 360px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-left: 10px;
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
}
</style>
