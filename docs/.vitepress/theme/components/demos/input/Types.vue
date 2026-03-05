<template>
  <div class="center content-inputs">
    <sv-input v-model="v1" type="text" placeholder="Text" />
    <sv-input v-model="v2" type="password" placeholder="Password" />
    <sv-input v-model="v3" type="search" placeholder="Search" />
    <sv-input v-model="v4" type="url" placeholder="Url" />
    <sv-input v-model="v5" type="time" placeholder="Time" />
    <sv-input v-model="v6" type="date" placeholder="Date" />
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '', v2: '', v3: '', v4: '', v5: '', v6: '' }),
};
</script>
