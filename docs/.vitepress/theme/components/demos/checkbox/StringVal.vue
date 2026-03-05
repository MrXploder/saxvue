<template>
  <div class="center" style="flex-direction: column; align-items: flex-start">
    <sv-checkbox val="automatically" v-model="option">Save data automatically</sv-checkbox>
    <span style="background: rgba(0, 0, 0, 0.03); padding: 10px 20px; border-radius: 18px">{{
      option ? option : 'null'
    }}</span>
  </div>
</template>
<script>
export default {
  data: () => ({ option: null }),
};
</script>
