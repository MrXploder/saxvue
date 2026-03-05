<template>
  <div class="center">
    <sv-button size="xl" :active="active == 0" @click="active = 0">XLarge</sv-button>
    <sv-button size="large" :active="active == 1" @click="active = 1">Large</sv-button>
    <sv-button :active="active == 2" @click="active = 2">Default</sv-button>
    <sv-button size="small" :active="active == 3" @click="active = 3">Small</sv-button>
    <sv-button size="mini" :active="active == 4" @click="active = 4">Mini</sv-button>
  </div>
</template>
<script>
export default {
  data: () => ({ active: 0 }),
};
</script>
