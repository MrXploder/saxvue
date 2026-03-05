<template>
  <div class="center con-selects">
    <sv-select
      v-for="(c, i) in colors"
      :key="i"
      :state="c.color"
      :label="c.color"
      placeholder="Select"
      v-model="c.value"
    >
      <sv-option label="SaxVue" value="1">SaxVue</sv-option>
      <sv-option label="Vue" value="2">Vue</sv-option>
      <sv-option label="Javascript" value="3">Javascript</sv-option>
      <sv-option label="Typescript" value="5">Typescript</sv-option>
    </sv-select>
  </div>
</template>
<script>
export default {
  data: () => ({
    colors: [
      { color: 'primary', value: '1' },
      { color: 'danger', value: '1' },
      { color: 'success', value: '2' },
      { color: 'warn', value: '3' },
      { color: 'dark', value: '4' },
    ],
  }),
};
</script>
<style scoped>
.con-selects {
  flex-wrap: wrap;
  gap: 10px;
}
</style>
