<template>
  <div
    class="center"
    style="display: flex; flex-direction: column; align-items: flex-start; gap: 5px"
  >
    <sv-switch val="html" v-model="options">Html</sv-switch>
    <sv-switch val="css" v-model="options">Css</sv-switch>
    <sv-switch val="javascript" v-model="options">Javascript</sv-switch>
    <sv-switch val="vue" v-model="options">Vue</sv-switch>
    <span
      style="
        background: rgba(0, 0, 0, 0.03);
        padding: 10px 20px;
        border-radius: 18px;
        margin-top: 10px;
      "
      >{{ options }}</span
    >
  </div>
</template>
<script>
export default {
  data: () => ({ options: ['javascript', 'vue'] }),
};
</script>
