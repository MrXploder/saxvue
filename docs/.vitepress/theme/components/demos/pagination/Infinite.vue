<template>
  <div class="center">
    <sv-pagination v-model="page" infinite :length="10" />
  </div>
</template>
<script>
export default {
  data: () => ({ page: 1 }),
};
</script>
