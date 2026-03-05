<template>
  <div style="overflow: hidden; position: relative; min-height: 500px">
    <sv-sidebar absolute v-model="active" open>
      <template #logo>
        <b style="font-size: 1.2rem">SaxVue</b>
      </template>
      <sv-sidebar-item id="home">
        <template #icon><i class="bx bx-home"></i></template>
        Home
      </sv-sidebar-item>
      <sv-sidebar-item id="market">
        <template #icon><i class="bx bx-grid-alt"></i></template>
        Market Overview
      </sv-sidebar-item>
      <sv-sidebar-group>
        <template #header>
          <sv-sidebar-item arrow>
            <template #icon><i class="bx bx-group"></i></template>
            Social media
          </sv-sidebar-item>
        </template>
        <sv-sidebar-item id="Instagram">
          <template #icon><i class="bx bxl-instagram"></i></template>
          Instagram
        </sv-sidebar-item>
        <sv-sidebar-item id="twitter">
          <template #icon><i class="bx bxl-twitter"></i></template>
          Twitter
        </sv-sidebar-item>
        <sv-sidebar-item id="Facebook">
          <template #icon><i class="bx bxl-facebook"></i></template>
          Facebook
        </sv-sidebar-item>
      </sv-sidebar-group>
      <sv-sidebar-group>
        <template #header>
          <sv-sidebar-item arrow>
            <template #icon><i class="bx bx-code-alt"></i></template>
            Coding
          </sv-sidebar-item>
        </template>
        <sv-sidebar-item id="github">
          <template #icon><i class="bx bxl-github"></i></template>
          Github
        </sv-sidebar-item>
        <sv-sidebar-item id="codepen">
          <template #icon><i class="bx bxl-codepen"></i></template>
          Codepen
        </sv-sidebar-item>
        <sv-sidebar-item id="discord">
          <template #icon><i class="bx bxl-discord"></i></template>
          Discord
        </sv-sidebar-item>
      </sv-sidebar-group>
      <sv-sidebar-item id="donate">
        <template #icon><i class="bx bxs-donate-heart"></i></template>
        Donate
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
