<template>
  <div class="center">
    <sv-button :active="active == 0" @click="active = 0"
      ><i class="bx bx-home-alt"></i> Home</sv-button
    >
    <sv-button success flat :active="active == 1" @click="active = 1"
      ><i class="bx bxs-phone-call"></i> Call</sv-button
    >
    <sv-button danger border :active="active == 2" @click="active = 2"
      ><i class="bx bxs-heart"></i> Like</sv-button
    >
    <sv-button warn gradient :active="active == 3" @click="active = 3"
      ><i class="bx bxs-bell-ring"></i> Notifications</sv-button
    >
    <sv-button color="#7d33ff" relief :active="active == 5" @click="active = 5"
      ><i class="bx bxs-paper-plane"></i> Send</sv-button
    >
    <sv-button color="rgb(59,222,200)" gradient :active="active == 6" @click="active = 6"
      ><i class="bx bxs-purchase-tag"></i> Save</sv-button
    >
  </div>
</template>
<script>
export default {
  data: () => ({ active: 0 }),
};
</script>
