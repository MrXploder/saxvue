<template>
  <div class="center content-inputs">
    <sv-input v-model="value" placeholder="Name" />
  </div>
</template>
<script>
export default {
  data: () => ({ value: '' }),
};
</script>
