<template>
  <div class="center" style="gap: 10px">
    <sv-button
      @click="
        active = true;
        dialogColor = 'primary';
      "
      flat
      >Primary</sv-button
    >
    <sv-button
      @click="
        active = true;
        dialogColor = 'success';
      "
      success
      flat
      >Success</sv-button
    >
    <sv-button
      @click="
        active = true;
        dialogColor = 'danger';
      "
      danger
      flat
      >Danger</sv-button
    >
    <sv-button
      @click="
        active = true;
        dialogColor = 'warn';
      "
      warn
      flat
      >Warn</sv-button
    >
    <sv-button
      @click="
        active = true;
        dialogColor = 'dark';
      "
      dark
      flat
      >Dark</sv-button
    >

    <sv-dialog :color="dialogColor" v-model="active">
      <template #header>
        <h4>{{ dialogColor }} Dialog</h4>
      </template>
      <p>
        This dialog has a <b>{{ dialogColor }}</b> color theme.
      </p>
      <template #footer>
        <sv-button @click="active = false" flat>OK</sv-button>
      </template>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: false,
    dialogColor: 'primary',
  }),
};
</script>
