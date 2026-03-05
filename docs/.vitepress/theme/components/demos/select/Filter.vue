<template>
  <div class="center con-selects">
    <sv-select filter placeholder="Filter" v-model="value">
      <sv-option label="SaxVue" value="1">SaxVue</sv-option>
      <sv-option label="Vue" value="2">Vue</sv-option>
      <sv-option label="Javascript" value="3">Javascript</sv-option>
      <sv-option label="Sass" value="4">Sass</sv-option>
      <sv-option label="Typescript" value="5">Typescript</sv-option>
      <sv-option label="Webpack" value="6">Webpack</sv-option>
      <sv-option label="Nodejs" value="7">Nodejs</sv-option>
    </sv-select>
  </div>
</template>
<script>
export default {
  data: () => ({ value: '' }),
};
</script>
