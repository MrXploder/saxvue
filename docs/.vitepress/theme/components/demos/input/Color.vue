<template>
  <div class="center content-inputs">
    <sv-input v-model="v1" color="primary" placeholder="Primary" />
    <sv-input v-model="v2" success placeholder="Success" />
    <sv-input v-model="v3" danger placeholder="Danger" />
    <sv-input v-model="v4" warn placeholder="Warning" />
    <sv-input v-model="v5" dark placeholder="Dark" />
    <sv-input v-model="v6" color="#7d33ff" placeholder="HEX" />
    <sv-input v-model="v7" color="rgb(59,222,200)" placeholder="RGB" />
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '', v2: '', v3: '', v4: '', v5: '', v6: '', v7: '' }),
};
</script>
