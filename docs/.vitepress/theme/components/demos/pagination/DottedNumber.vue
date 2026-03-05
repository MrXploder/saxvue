<template>
  <div class="center">
    <sv-pagination v-model="page" :length="10" dotted-number />
  </div>
</template>
<script>
export default {
  data: () => ({ page: 1 }),
};
</script>
