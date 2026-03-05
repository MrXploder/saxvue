<template>
  <div class="center">
    <sv-button @click="active = true">Full Screen Dialog</sv-button>
    <sv-dialog full-screen v-model="active">
      <template #header>
        <h4 style="margin: 0; padding: 10px">Full Screen Dialog</h4>
      </template>
      <p style="padding: 20px">This dialog takes the full screen.</p>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({ active: false }),
};
</script>
