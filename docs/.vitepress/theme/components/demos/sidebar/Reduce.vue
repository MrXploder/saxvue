<template>
  <div style="overflow: hidden; position: relative; min-height: 500px">
    <sv-sidebar absolute reduce v-model="active" open>
      <template #logo>
        <b style="font-size: 1.2rem">Sv</b>
      </template>
      <sv-sidebar-item id="home">
        <template #icon><i class="bx bx-home"></i></template>
        Home
      </sv-sidebar-item>
      <sv-sidebar-item id="market">
        <template #icon><i class="bx bx-grid-alt"></i></template>
        Market Overview
      </sv-sidebar-item>
      <sv-sidebar-item id="Music">
        <template #icon><i class="bx bxs-music"></i></template>
        Music
      </sv-sidebar-item>
      <sv-sidebar-item id="donate">
        <template #icon><i class="bx bxs-donate-heart"></i></template>
        Donate
      </sv-sidebar-item>
      <sv-sidebar-item id="drink">
        <template #icon><i class="bx bx-drink"></i></template>
        Drink
      </sv-sidebar-item>
      <sv-sidebar-item id="shopping">
        <template #icon><i class="bx bxs-shopping-bags"></i></template>
        Shopping
      </sv-sidebar-item>
      <sv-sidebar-item id="chat">
        <template #icon><i class="bx bx-chat"></i></template>
        Chat
      </sv-sidebar-item>
    </sv-sidebar>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 'home',
  }),
};
</script>
