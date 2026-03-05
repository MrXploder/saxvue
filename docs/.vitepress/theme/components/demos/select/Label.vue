<template>
  <div class="center con-selects">
    <sv-select label="Label" v-model="v1">
      <sv-option label="SaxVue" value="1">SaxVue</sv-option>
      <sv-option label="Vue" value="2">Vue</sv-option>
      <sv-option label="Javascript" value="3">Javascript</sv-option>
      <sv-option label="Typescript" value="5">Typescript</sv-option>
    </sv-select>
    <sv-select label-placeholder="Label-placeholder" v-model="v2">
      <sv-option label="SaxVue" value="1">SaxVue</sv-option>
      <sv-option label="Vue" value="2">Vue</sv-option>
      <sv-option label="Javascript" value="3">Javascript</sv-option>
      <sv-option label="Typescript" value="5">Typescript</sv-option>
    </sv-select>
    <sv-select placeholder="Placeholder" v-model="v3">
      <sv-option label="SaxVue" value="1">SaxVue</sv-option>
      <sv-option label="Vue" value="2">Vue</sv-option>
      <sv-option label="Javascript" value="3">Javascript</sv-option>
      <sv-option label="Typescript" value="5">Typescript</sv-option>
    </sv-select>
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '', v2: '', v3: '' }),
};
</script>
<style scoped>
.con-selects {
  flex-wrap: wrap;
  gap: 10px;
}
</style>
