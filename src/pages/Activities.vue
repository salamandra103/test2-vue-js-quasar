<template>
  <Breadcrumbs />
  <ProfileBar @tabChangeHandler="tabChangehandler" />

  <div class="content">
    <div>
      <div class="row search q-mb-md q-gutter-sm">
        <SearchInput style="height: 40px" class="bg-white col" />
        <q-btn color="white" text-color="distinct" no-caps style="width: 40px; height: 40px" class="col-shrink">
          <q-icon name="unfold_more" />
        </q-btn>
      </div>
      <q-tab-panels v-model="tab" animated class="transparent">
        <q-tab-panel name="activities" class="q-pa-none">
          <div class="row q-mb-sm items-center justify-between">
            <div class="row items-center q-gutter-sm">
              <Typography :font-type="'20 Page Title'" :text="'Open activities'" class="text-neutral" />
              <Typography :font-type="'16 Subhead Semibold'" :text="'4'" class="text-light" />
            </div>
            <q-btn flat color="white" text-color="distinct" no-caps>
              <q-icon name="expand_less" />
            </q-btn>
          </div>

          <div>
            <Card v-for="(item, index) in cards" :key="index" :card="item" />
          </div>
        </q-tab-panel>

        <q-tab-panel name="logs">
          <div class="text-h6">logs</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="visits">
          <div class="text-h6">visits</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="files">
          <div class="text-h6">files</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <ContactSidebar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Breadcrumbs from "@/components/Breadcrumbs.vue";
import ProfileBar from "@/components/ProfileBar.vue";
import SearchInput from "@/components/SearchInput.vue";
import Card from "@/components/Card.vue";
import ContactSidebar from "@/components/ContactSidebar.vue";

import { cardsMock } from "./data";

export default defineComponent({
  components: {
    Breadcrumbs,
    ProfileBar,
    SearchInput,
    Card,
    ContactSidebar,
  },
  data() {
    return {
      tab: "activities",
      cards: cardsMock,
    };
  },
  methods: {
    tabChangehandler(tabValue: string) {
      this.tab = tabValue;
    },
  },
});
</script>

<style lang="scss">
.content {
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  padding-right: 70px;
}

.search {
  .q-btn:before {
    content: initial;
  }
}
</style>
