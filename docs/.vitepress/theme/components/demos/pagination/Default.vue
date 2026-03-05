<template>
  <div class="center">
    <sv-pagination v-model="page" :length="20" />
  </div>
</template>
<script>
export default {
  data: () => ({ page: 1 }),
};
</script>
