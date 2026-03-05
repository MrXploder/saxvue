<template>
  <div class="center content-inputs">
    <sv-input v-model="v1" loading placeholder="Loading..." />
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '' }),
};
</script>
