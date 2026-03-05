<template>
  <div class="center">
    <sv-pagination :loading-items="[3]" v-model="page" :length="20" />
  </div>
</template>
<script>
export default {
  data: () => ({ page: 1 }),
};
</script>
