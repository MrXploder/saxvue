<template>
  <div class="center content-inputs">
    <sv-input v-model="v1" border placeholder="Name" />
    <sv-input v-model="v2" border color="success" placeholder="Success" />
    <sv-input v-model="v3" border color="danger" placeholder="Danger" />
    <sv-input v-model="v4" border shadow placeholder="Shadow" />
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '', v2: '', v3: '', v4: '' }),
};
</script>
