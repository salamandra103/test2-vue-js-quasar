<template>
  <header class="header">
    <div class="row col q-gutter-sm">
      <q-btn color="primary" no-caps>
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
      <div class="header__search q-pl-sm">
        <SearchInput @input="searchInputHandler" />
      </div>
    </div>
    <div class="row q-gutter-sm">
      <Status />
      <Tools />
      <Profile />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Status from "./Status.vue";
import Tools from "./Tools.vue";
import Profile from "./Profile.vue";

import SearchInput from "@/components/SearchInput.vue";

export default defineComponent({
  name: "Header",
  components: {
    Status,
    Tools,
    Profile,
    SearchInput,
  },
  data() {
    return {
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
  methods: {
    searchInputHandler(e: any) {
      this.search = e.target.value;
    },
  },
});
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 999px;
  width: 22px;
  height: 22px;
  object-fit: cover;
  overflow: hidden;
}

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

  &__search {
    width: 360px;
  }
}
</style>
