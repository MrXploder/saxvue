<template>
  <div class="center con-selects" style="flex-wrap: wrap; gap: 10px">
    <sv-select placeholder="Success" v-model="v1">
      <template #message-success>Option Valid</template>
      <sv-option label="SaxVue" value="1">SaxVue</sv-option>
      <sv-option label="Vue" value="2">Vue</sv-option>
    </sv-select>
    <sv-select placeholder="Danger" v-model="v2">
      <template #message-danger>Required</template>
      <sv-option label="SaxVue" value="1">SaxVue</sv-option>
      <sv-option label="Vue" value="2">Vue</sv-option>
    </sv-select>
    <sv-select placeholder="Warning" v-model="v3">
      <template #message-warn>Select your option</template>
      <sv-option label="SaxVue" value="1">SaxVue</sv-option>
      <sv-option label="Vue" value="2">Vue</sv-option>
    </sv-select>
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '', v2: '', v3: '' }),
};
</script>
