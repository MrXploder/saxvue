<template>
  <div class="center" style="flex-direction: column; align-items: flex-start; gap: 5px">
    <sv-radio v-model="picked" val="1"
      >Label<template #icon><i class="bx bx-yen"></i></template
    ></sv-radio>
    <sv-radio v-model="picked" val="2"
      >Won<template #icon><i class="bx bx-won"></i></template
    ></sv-radio>
    <sv-radio v-model="picked" val="3"
      >Euro<template #icon><i class="bx bx-euro"></i></template
    ></sv-radio>
    <sv-radio v-model="picked" val="4"
      >Dollar<template #icon><i class="bx bx-dollar"></i></template
    ></sv-radio>
  </div>
</template>
<script>
export default {
  data: () => ({ picked: '1' }),
};
</script>
