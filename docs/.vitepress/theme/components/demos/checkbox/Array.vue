<template>
  <div class="center" style="flex-direction: column; align-items: flex-start">
    <sv-checkbox val="vue" v-model="options">Vue</sv-checkbox>
    <sv-checkbox val="react" v-model="options">React</sv-checkbox>
    <sv-checkbox val="angular" v-model="options">Angular</sv-checkbox>
    <span style="background: rgba(0, 0, 0, 0.03); padding: 10px 20px; border-radius: 18px">{{
      options
    }}</span>
  </div>
</template>
<script>
export default {
  data: () => ({ options: ['vue'] }),
};
</script>
