<template>
  <div class="center">
    <sv-pagination :disabled-items="[2, 5, 8]" v-model="page" :length="20" />
  </div>
</template>
<script>
export default {
  data: () => ({ page: 1 }),
};
</script>
