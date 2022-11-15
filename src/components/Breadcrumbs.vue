<template>
  <div class="row q-gutter-md q-mb-md">
    <button type="button" class="back">
      <q-icon size="1.5em" name="chevron_left" />
    </button>
    <q-breadcrumbs separator="---" class="text-distinct" active-color="distinct">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="blue-grey-2" />
      </template>
      <q-breadcrumbs-el>
        <Typography :font-type="'14 Body Text Semibold'" :text="'Contacts'" />
      </q-breadcrumbs-el>
      <q-breadcrumbs-el>
        <Typography :font-type="'14 Body Text Semibold'" :text="'Jennifer Crowford'" />
      </q-breadcrumbs-el>
    </q-breadcrumbs>
  </div>
</template>

<style lang="scss" scoped>
.back {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background-color: #ebeef5;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  color: $blue-grey-4;

  &:hover {
    background-color: $primary;
    color: $white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
}
</style>
