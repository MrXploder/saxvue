<template>
  <div class="center">
    <sv-pagination v-model="page" :length="10" progress />
  </div>
</template>
<script>
export default {
  data: () => ({ page: 1 }),
};
</script>
