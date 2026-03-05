<template>
  <div class="center">
    <sv-button :active="active == 0" @click="active = 0">Default</sv-button>
    <sv-button success flat :active="active == 1" @click="active = 1">Success</sv-button>
    <sv-button danger border :active="active == 2" @click="active = 2">Danger</sv-button>
    <sv-button warn gradient :active="active == 3" @click="active = 3">Warn</sv-button>
    <sv-button dark shadow :active="active == 4" @click="active = 4">Dark</sv-button>
    <sv-button color="#7d33ff" relief :active="active == 5" @click="active = 5">HEX</sv-button>
    <sv-button color="rgb(59,222,200)" gradient :active="active == 6" @click="active = 6"
      >RGB</sv-button
    >
  </div>
</template>
<script>
export default {
  data: () => ({ active: 0 }),
};
</script>
