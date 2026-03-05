<template>
  <div class="center content-inputs">
    <sv-input v-model="v1" placeholder="Search">
      <template #icon><i class="bx bx-search"></i></template>
    </sv-input>
    <sv-input v-model="v2" placeholder="Email" icon-after>
      <template #icon><i class="bx bx-mail-send"></i></template>
    </sv-input>
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '', v2: '' }),
};
</script>
