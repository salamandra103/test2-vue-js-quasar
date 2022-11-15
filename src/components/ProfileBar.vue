<template>
  <div class="profile">
    <div class="profile__head row q-gutter-md text-neutral">
      <img src="@/assets/profile_avatar.png" alt="" />
      <div>
        <Typography :font-type="'20 Page Title'" :text="'Jennifer Crowford'" class="q-pb-sm" />

        <a href="#" class="text-neutral row items-center">
          <Typography :font-type="'14 Body Text Regular'" :text="' Sunflower Limited'" />
          <q-icon :name="'arrow_outward'" class="q-pl-xs" />
        </a>
      </div>
    </div>

    <div class="profile__bottom row">
      <div class="profile__tabs self-end">
        <q-tabs v-model="tab" dense class="text-blue-grey-7" active-color="neutral" indicator-color="primary" align="left">
          <q-tab name="activities" no-caps>
            <Typography :font-type="'14 Body Text Semibold'" :text="'Activities'" />
          </q-tab>
          <q-tab name="logs" no-caps>
            <Typography :font-type="'14 Body Text Semibold'" :text="'Logs'" />
          </q-tab>

          <q-tab name="visits" no-caps>
            <Typography :font-type="'14 Body Text Semibold'" :text="'Visits'" />
          </q-tab>
          <q-tab name="files" no-caps>
            <div class="row q-gutter-sm">
              <Typography :font-type="'14 Body Text Semibold'" :text="'Files'" />
              <span style="opacity: 0.5">8</span>
            </div>
          </q-tab>
        </q-tabs>
      </div>

      <div class="profile__buttons row q-gutter-sm q-pb-sm col justify-end">
        <q-btn color="white" text-color="distinct" no-caps>
          <q-icon :name="'phone'" class="q-mr-sm" style="font-size: 1.2em" />
          Call
        </q-btn>
        <q-btn color="white" text-color="distinct" no-caps>
          <q-icon name="email" class="q-mr-sm" style="font-size: 1.2em" />
          Email
        </q-btn>
        <q-btn color="white" text-color="distinct" no-caps>
          <q-icon name="sms" class="q-mr-sm" style="font-size: 1.2em" />
          Text
        </q-btn>
        <q-btn color="white" text-color="distinct" no-caps>
          <q-icon name="edit" class="q-mr-sm" style="font-size: 1.2em" />
          Edit
        </q-btn>
        <q-btn color="white" text-color="distinct" no-caps>
          <q-icon name="more_vert" class="q-mr-sm" style="font-size: 1.2em" />
          More
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tab: "activities",
      splitterModel: 20,
    };
  },

  watch: {
    tab(value) {
      this.$emit("tabChangeHandler", value);
    },
  },
});
</script>

<style lang="scss" scoped>
.q-btn:before {
  content: initial;
}

.q-tab {
  padding: 0 0px;
  margin: 0 16px;
}

.profile {
  padding: 32px 32px 0;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 8px;
  background-color: #f7e6f6;
  background-image: url("@/assets/profile-bar-background.png");
  background-position: 0 0;
  background-size: cover;

  &__head {
    margin-bottom: 36px;
  }

  &__tabs {
    margin: 0 -16px;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
