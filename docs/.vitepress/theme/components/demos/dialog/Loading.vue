<template>
  <div class="center">
    <sv-button @click="active = true">Loading Dialog</sv-button>
    <sv-dialog loading v-model="active">
      <template #header>
        <h4 style="margin: 0; padding: 10px">Loading...</h4>
      </template>
      <p style="padding: 10px">Please wait while we process your request.</p>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({ active: false }),
};
</script>
