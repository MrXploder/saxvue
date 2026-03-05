<template>
  <div class="center">
    <sv-button @click="active = true" flat>Open Overflow Hidden Dialog</sv-button>

    <sv-dialog overflow-hidden v-model="active">
      <template #header>
        <h4>Overflow Hidden</h4>
      </template>
      <p>
        Body scroll is prevented when this dialog is open. Try scrolling the page in the background
        — it won't work.
      </p>
      <template #footer>
        <sv-button @click="active = false" flat>Close</sv-button>
      </template>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: false,
  }),
};
</script>
