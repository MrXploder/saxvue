<template>
  <div class="center" style="flex-direction: column; gap: 10px">
    <sv-alert :color="color">
      <template #title> SaxVue Framework </template>
      SaxVue is a <b>UI component framework</b> built with Vue.js for creating projects easily.
    </sv-alert>
    <div style="display: flex; gap: 5px; flex-wrap: wrap">
      <sv-button :active="color == 'primary'" @click="color = 'primary'" flat>Primary</sv-button>
      <sv-button :active="color == 'success'" @click="color = 'success'" success flat
        >Success</sv-button
      >
      <sv-button :active="color == 'danger'" @click="color = 'danger'" danger flat
        >Danger</sv-button
      >
      <sv-button :active="color == 'warn'" @click="color = 'warn'" warn flat>Warn</sv-button>
      <sv-button :active="color == 'dark'" @click="color = 'dark'" dark flat>Dark</sv-button>
      <sv-button :active="color == '#7d33ff'" @click="color = '#7d33ff'" color="#7d33ff" flat
        >HEX</sv-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({ color: 'danger' }),
};
</script>
