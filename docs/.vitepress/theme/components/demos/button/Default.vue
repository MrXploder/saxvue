<template>
  <div class="center">
    <sv-button :active="active == 0" @click="active = 0">Active</sv-button>
    <sv-button :active="active == 1" @click="active = 1">Default</sv-button>
    <sv-button disabled>Disabled</sv-button>
  </div>
</template>
<script>
export default {
  data: () => ({ active: 0 }),
};
</script>
