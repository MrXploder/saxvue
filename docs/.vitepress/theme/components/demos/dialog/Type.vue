<template>
  <div class="center" style="gap: 10px">
    <sv-button
      @click="
        type = 'alert';
        active = true;
      "
      >Alert</sv-button
    >
    <sv-button
      @click="
        type = 'confirm';
        active = true;
      "
      >Confirm</sv-button
    >
    <sv-button
      @click="
        type = 'prompt';
        active = true;
      "
      >Prompt</sv-button
    >
    <sv-dialog :type="type" v-model="active">
      <template #header>
        <h4 style="margin: 0; padding: 10px">Dialog {{ type }}</h4>
      </template>
      <p style="padding: 10px">
        This is a dialog of type: <b>{{ type }}</b>
      </p>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({ active: false, type: 'alert' }),
};
</script>
