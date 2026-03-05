<template>
  <div class="center con-selects" style="flex-wrap: wrap; gap: 10px">
    <sv-select placeholder="Loading" v-model="v1" loading>
      <sv-option label="SaxVue" value="1">SaxVue</sv-option>
      <sv-option label="Vue" value="2">Vue</sv-option>
    </sv-select>
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '1' }),
};
</script>
