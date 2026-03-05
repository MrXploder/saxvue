<template>
  <div style="overflow: hidden; position: relative; min-height: 500px">
    <sv-sidebar square absolute v-model="active" open>
      <template #logo>
        <b style="font-size: 1.2rem">SaxVue</b>
      </template>
      <sv-sidebar-item id="home">
        <template #icon><i class="bx bx-home"></i></template>
        Home
      </sv-sidebar-item>
      <sv-sidebar-item id="market">
        <template #icon><i class="bx bx-grid-alt"></i></template>
        Market
      </sv-sidebar-item>
      <sv-sidebar-item id="music">
        <template #icon><i class="bx bxs-music"></i></template>
        Music
      </sv-sidebar-item>
    </sv-sidebar>
  </div>
</template>
<script>
export default {
  data: () => ({ active: 'home' }),
};
</script>
