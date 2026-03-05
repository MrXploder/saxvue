<template>
  <div class="center">
    <sv-button icon :active="active == 0" @click="active = 0"
      ><i class="bx bx-home-alt"></i
    ></sv-button>
    <sv-button icon success flat :active="active == 1" @click="active = 1"
      ><i class="bx bxs-phone-call"></i
    ></sv-button>
    <sv-button icon danger border :active="active == 2" @click="active = 2"
      ><i class="bx bxs-heart"></i
    ></sv-button>
    <sv-button icon warn gradient :active="active == 3" @click="active = 3"
      ><i class="bx bxs-bell-ring"></i
    ></sv-button>
    <sv-button icon color="#7d33ff" relief :active="active == 5" @click="active = 5"
      ><i class="bx bxs-paper-plane"></i
    ></sv-button>
    <sv-button icon color="rgb(59,222,200)" gradient :active="active == 6" @click="active = 6"
      ><i class="bx bxs-purchase-tag"></i
    ></sv-button>
  </div>
</template>
<script>
export default {
  data: () => ({ active: 0 }),
};
</script>
