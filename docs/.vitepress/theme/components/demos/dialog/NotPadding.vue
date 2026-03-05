<template>
  <div class="center">
    <sv-button @click="active = true">Not Padding</sv-button>
    <sv-dialog not-padding v-model="active">
      <template #header>
        <h4 style="margin: 0; padding: 10px">No Padding Dialog</h4>
      </template>
      <img style="width: 100%; display: block" src="/foto1.png" alt="Example" />
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({ active: false }),
};
</script>
