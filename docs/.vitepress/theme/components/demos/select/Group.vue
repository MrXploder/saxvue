<template>
  <div class="center con-selects" style="flex-wrap: wrap; gap: 10px">
    <sv-select label="Group" placeholder="Group" v-model="v1">
      <sv-option-group>
        <div slot="title">Vuejs</div>
        <sv-option label="SaxVue" value="1">SaxVue</sv-option>
        <sv-option label="Vue" value="2">Vue</sv-option>
        <sv-option label="Javascript" value="3">Javascript</sv-option>
      </sv-option-group>
      <sv-option-group>
        <div slot="title">Others</div>
        <sv-option label="Sass" value="4">Sass</sv-option>
        <sv-option label="Typescript" value="5">Typescript</sv-option>
      </sv-option-group>
    </sv-select>
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '3' }),
};
</script>
