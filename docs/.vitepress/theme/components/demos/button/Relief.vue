<template>
  <div class="center">
    <sv-button relief :active="active == 0" @click="active = 0">Active</sv-button>
    <sv-button relief :active="active == 1" @click="active = 1">Default</sv-button>
    <sv-button relief disabled>Disabled</sv-button>
  </div>
</template>
<script>
export default {
  data: () => ({ active: 0 }),
};
</script>
