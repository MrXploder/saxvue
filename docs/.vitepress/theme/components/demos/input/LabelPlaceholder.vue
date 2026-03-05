<template>
  <div class="center content-inputs">
    <sv-input label-placeholder="Label-placeholder" v-model="v1" />
    <sv-input placeholder="Placeholder" v-model="v2" />
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '', v2: '' }),
};
</script>
