<template>
  <div class="center content-inputs">
    <sv-input v-model="v1" success placeholder="Success">
      <template #message-success>The email is valid</template>
    </sv-input>
    <sv-input v-model="v2" danger placeholder="Danger">
      <template #message-danger>Required</template>
    </sv-input>
    <sv-input v-model="v3" warn placeholder="Warning">
      <template #message-warn>The email already exists</template>
    </sv-input>
    <sv-input v-model="v4" primary placeholder="Primary">
      <template #message-primary>Help text</template>
    </sv-input>
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '', v2: '', v3: '', v4: '' }),
};
</script>
