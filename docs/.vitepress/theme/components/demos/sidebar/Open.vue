<template>
  <div style="overflow: hidden; position: relative; min-height: 500px">
    <sv-navbar shadow square center-collapsed v-model="activeNav">
      <template #left>
        <sv-button @click="activeSidebar = !activeSidebar" flat icon>
          <i class="bx bx-menu"></i>
        </sv-button>
      </template>
      <sv-navbar-item :active="activeNav == 'guide'" id="guide">Guide</sv-navbar-item>
      <sv-navbar-item :active="activeNav == 'docs'" id="docs">Documents</sv-navbar-item>
      <sv-navbar-item :active="activeNav == 'components'" id="components"
        >Components</sv-navbar-item
      >
      <template #right>
        <sv-button flat>Login</sv-button>
        <sv-button>Get Started</sv-button>
      </template>
    </sv-navbar>
    <sv-sidebar absolute v-model="active" v-model:open="activeSidebar">
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
      <sv-sidebar-item id="Music">
        <template #icon><i class="bx bxs-music"></i></template>
        Music
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
    activeNav: 'guide',
    activeSidebar: false,
  }),
};
</script>
