<template>
  <q-btn no-caps class="btn">
    <div class="badge" :class="{ [`badge_${currentStatus.status}`]: true, badge_half: (currentStatus.status === 'success' && switch1 && !switch2) || (!switch1 && switch2), badge_full: currentStatus.status === 'success' && !switch2 && !switch2 }"></div>
    <Typography :font-type="'Button Medium'" :text="currentStatus.text" class="q-pl-sm"></Typography>

    <q-menu v-model="isVisible">
      <q-list style="min-width: 245px" class="q-pt-xs q-pb-xs text-neutral">
        <q-item clickable @click="changeStatus('success', 'Online')">
          <q-item-section class="col-shrink q-mr-xs">
            <div class="badge badge_success" :class="{ badge_half: (switch1 && !switch2) || (!switch1 && switch2), badge_full: !switch2 && !switch2 }"></div>
          </q-item-section>
          <q-item-section>
            <Typography :font-type="'14 Body Text Semibold'" :text="'Online'" />
          </q-item-section>
        </q-item>

        <q-item tag="label" dense>
          <q-item-section class="q-pl-lg">
            <q-item-label>
              <Typography :font-type="'14 Body Text Semibold'" :text="'Accept calls'" />
            </q-item-label>
          </q-item-section>
          <q-item-section class="col-shrink">
            <q-toggle v-model="switch1" />
          </q-item-section>
        </q-item>

        <q-item tag="label" dense>
          <q-item-section class="q-pl-lg">
            <q-item-label>
              <Typography :font-type="'14 Body Text Semibold'" :text="'Accept chats'" />
            </q-item-label>
          </q-item-section>
          <q-item-section class="col-shrink">
            <q-toggle v-model="switch2" />
          </q-item-section>
        </q-item>

        <q-item clickable @click="changeStatus('warning', 'Away')">
          <q-item-section class="col-shrink q-mr-xs">
            <div class="badge badge_warning"></div>
          </q-item-section>
          <q-item-section>
            <Typography :font-type="'14 Body Text Semibold'" :text="'Away'" />
          </q-item-section>
        </q-item>
        <q-item clickable @click="changeStatus('error', 'Do not disturb')">
          <q-item-section class="col-shrink q-mr-xs">
            <div class="badge badge_error"></div>
          </q-item-section>
          <q-item-section>
            <Typography :font-type="'14 Body Text Semibold'" :text="'Do not disturb'" />
          </q-item-section>
        </q-item>
        <q-item clickable @click="changeStatus('notification', 'Offline')">
          <q-item-section class="col-shrink q-mr-xs">
            <div class="badge badge_notification"></div>
          </q-item-section>
          <q-item-section>
            <Typography :font-type="'14 Body Text Semibold'" :text="'Offline'" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isVisible: false,
      switch1: false,
      switch2: false,
      currentStatus: {
        status: "success",
        text: "Online",
      },
    };
  },
  methods: {
    changeStatus(status: "success" | "warning" | "notification" | "error", text: string) {
      this.currentStatus.status = status;
      this.currentStatus.text = text;
    },
  },
});
</script>

<style lang="scss" scoped>
.btn {
  background-color: #f7f7fc;
  color: $neutral;

  &:hover {
    background-color: $neutral !important;
    color: $white;
  }
}

.badge {
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  border: 2px solid transparent;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  &_success {
    border-color: $green;
    background-color: $green;
  }

  &_warning {
    border-color: $warning;
    background-color: $warning;
  }

  &_error {
    border-color: $red;
    background-color: $red;
  }

  &_notification {
    border-color: #b9b9b9;
    background-color: $blue-grey-1;
    border-width: 1px;
  }

  &_half {
    &:after {
      left: 4px;
      background-color: white;
    }
  }

  &_full {
    border-width: 2px;

    &:after {
      z-index: 1;
      background-color: white;
    }
  }
}
</style>
