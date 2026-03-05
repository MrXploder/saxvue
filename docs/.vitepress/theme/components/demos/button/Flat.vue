<template>
  <div class="center">
    <sv-button flat :active="active == 0" @click="active = 0">Active</sv-button>
    <sv-button flat :active="active == 1" @click="active = 1">Default</sv-button>
    <sv-button flat disabled>Disabled</sv-button>
  </div>
</template>
<script>
export default {
  data: () => ({ active: 0 }),
};
</script>
