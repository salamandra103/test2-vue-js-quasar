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
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="activities">
          <div class="text-h4 q-mb-md">Mails</div>
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
    <div>sidebar</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Breadcrumbs from "@/components/Breadcrumbs.vue";
import ProfileBar from "@/components/ProfileBar.vue";
import SearchInput from "@/components/SearchInput.vue";

export default defineComponent({
  components: {
    Breadcrumbs,
    ProfileBar,
    SearchInput,
  },
  data() {
    return {
      tab: "activities",
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
