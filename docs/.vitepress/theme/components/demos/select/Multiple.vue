<template>
  <div class="center con-selects" style="flex-wrap: wrap; gap: 10px">
    <sv-select label="Multiple" multiple danger placeholder="Multiple" v-model="value">
      <sv-option label="SaxVue" value="1">SaxVue</sv-option>
      <sv-option label="Vue" value="2">Vue</sv-option>
      <sv-option label="Javascript" value="3">Javascript</sv-option>
      <sv-option label="Sass" value="4">Sass</sv-option>
      <sv-option label="Typescript" value="5">Typescript</sv-option>
    </sv-select>
    <sv-select
      label="Filter Multiple"
      filter
      multiple
      placeholder="Filter Multiple"
      v-model="value2"
    >
      <sv-option label="SaxVue" value="1">SaxVue</sv-option>
      <sv-option label="Vue" value="2">Vue</sv-option>
      <sv-option label="Javascript" value="3">Javascript</sv-option>
      <sv-option label="Sass" value="4">Sass</sv-option>
      <sv-option label="Typescript" value="5">Typescript</sv-option>
    </sv-select>
  </div>
</template>
<script>
export default {
  data: () => ({ value: ['1', '2'], value2: ['4'] }),
};
</script>
