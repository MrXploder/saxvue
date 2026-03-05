<template>
  <div style="overflow: hidden; position: relative; min-height: 100px">
    <sv-navbar center v-model="active">
      <sv-navbar-item id="home">Home</sv-navbar-item>
      <sv-navbar-item id="about">About</sv-navbar-item>
      <sv-navbar-item id="docs">Docs</sv-navbar-item>
    </sv-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({ active: 'home' }),
};
</script>
