<template>
  <div class="contact-sidebar">
    <div class="row justify-between items-center q-mb-md">
      <Typography :font-type="'18 Headline'" :text="'Details'" class="text-neutral" />
      <q-btn flat text-color="neutral" no-caps>
        <q-icon name="more_vert" />
      </q-btn>
    </div>
    <Typography :font-type="'12 Body Text Semibold'" :text="'Assigned to'" class="text-distinct" />
    <div class="row q-pt-sm q-pb-md">
      <div class="row items-center q-gutter-sm">
        <img src="@/assets/profile_avatar.png" :style="{ maxWidth: '24px', height: '24px' }" alt="" />
        <Typography :font-type="'14 Body Text Semibold'" :text="'Franklin Strickland'" class="text-neutral" />
      </div>
    </div>

    <div class="q-mb-md">
      <div class="q-mb-xs">
        <Typography :font-type="'12 Body Text Semibold'" :text="'Status'" class="text-distinct" />
      </div>
      <Typography :font-type="'10 Caption CAPS'" :text="'Lead'" class="text-capitalize contact-sidebar__status" />
    </div>
    <div class="q-mb-md">
      <div class="q-mb-xs q-gutter-xs">
        <Typography :font-type="'12 Body Text Semibold'" :text="'Email'" class="text-distinct" />
        <Typography :font-type="'12 Body Text Semibold'" :text="'(Work)'" class="text-light" />
      </div>
      <Typography :font-type="'14 Body Text Semibold'" :text="'kenzilaw@textmagic.com'" class="text-neutral" />
    </div>
    <div class="q-mb-md">
      <div class="q-mb-xs q-gutter-xs">
        <Typography :font-type="'12 Body Text Semibold'" :text="'Phone'" class="text-distinct" />
        <Typography :font-type="'12 Body Text Semibold'" :text="'(Home)'" class="text-light" />
      </div>
      <Typography :font-type="'14 Body Text Semibold'" :text="'(990) 338-9983'" class="text-neutral" />
    </div>
    <div class="q-mb-md">
      <div class="q-mb-xs q-gutter-xs">
        <Typography :font-type="'12 Body Text Semibold'" :text="'Organization'" class="text-distinct" />
      </div>
      <div class="row items-center q-gutter-sm">
        <img src="@/assets/master.png" :style="{ maxWidth: '24px', maxHeight: '24px' }" alt="" />
        <Typography :font-type="'14 Body Text Semibold'" :text="'MasterCard'" class="text-neutral" />
      </div>
    </div>

    <div class="q-mb-md">
      <div class="q-mb-xs q-gutter-xs">
        <Typography :font-type="'12 Body Text Semibold'" :text="'List'" class="text-distinct" />
      </div>
      <div class="row items-center q-gutter-sm">
        <Typography :font-type="'14 Body Text Semibold'" :text="'Key account'" class="text-distinct contact-sidebar__tag" />
        <Typography :font-type="'14 Body Text Semibold'" :text="'Important'" class="text-distinct contact-sidebar__tag" />
      </div>
    </div>

    <div class="q-mb-md">
      <div class="q-mb-xs q-gutter-xs">
        <Typography :font-type="'12 Body Text Semibold'" :text="'Segments'" class="text-distinct" />
      </div>
      <div class="row items-center q-gutter-sm">
        <Typography :font-type="'14 Body Text Semibold'" :text="'Summer client'" class="text-distinct contact-sidebar__tag" />
      </div>
    </div>

    <div class="q-mb-md">
      <div class="q-mb-xs q-gutter-xs">
        <Typography :font-type="'12 Body Text Semibold'" :text="'Segments'" class="text-distinct" />
      </div>
      <div class="contact-sidebar__followers">
        <img src="@/assets/profile_avatar.png" alt="" />
        <img src="@/assets/profile_avatar.png" alt="" />
        <img src="@/assets/profile_avatar.png" alt="" />
        <img src="@/assets/profile_avatar.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="scss">
.contact-sidebar {
  padding: 24px;
  background: #ffffff;
  border: 1px solid #ebeef5;
  border-radius: 8px;

  &__status {
    border-radius: 999px;
    border: 1px solid #c7bbdd;
    color: #746197;
    background: #f7f5fa;
    height: 20px;
    line-height: 20px;
    padding: 3px 8px;
  }

  &__tag {
    padding: 0px 6px 2px;
    background: #ebeef5;
    border-radius: 4px;
  }

  &__followers {
    display: flex;
    flex-flow: row nowrap;
    img {
      border: 2px solid #fff;
      position: relative;
      border-radius: 999px;
      overflow: hidden;
      z-index: 1;
      width: 24px;
      height: 24px;
      & + img {
        position: relative;
        z-index: 0;
      }

      &:not(&:first-of-type) {
        transform: translateX(-10px);
      }
    }
  }
}
</style>
