<template>
  <div class="center content-inputs">
    <sv-input label-placeholder="Name" v-model="v1" />
    <sv-input label-placeholder="Email" v-model="v2" />
    <sv-input label="Date of birth" v-model="v3" type="date" />
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '', v2: '', v3: '' }),
};
</script>
