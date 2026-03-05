<template>
  <div class="center">
    <sv-button @click="active = true">Square Dialog</sv-button>
    <sv-dialog square v-model="active">
      <template #header>
        <h4 style="margin: 0; padding: 10px">Square Dialog</h4>
      </template>
      <p style="padding: 10px">This dialog has square corners.</p>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({ active: false }),
};
</script>
