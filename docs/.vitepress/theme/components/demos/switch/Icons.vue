<template>
  <div
    class="center"
    style="display: flex; align-items: center; justify-content: center; gap: 10px"
  >
    <sv-switch v-model="a1"
      ><template #off><i class="bx bxs-volume-mute"></i></template
      ><template #on><i class="bx bxs-volume-full"></i></template
    ></sv-switch>
    <sv-switch danger v-model="a2"><i class="bx bxs-microphone"></i></sv-switch>
    <sv-switch success v-model="a3"
      ><template #off><i class="bx bx-x"></i></template
      ><template #on><i class="bx bx-check"></i></template
    ></sv-switch>
    <sv-switch dark v-model="a5"
      ><template #circle
        ><i v-if="!a5" class="bx bxs-moon"></i><i v-else class="bx bxs-sun"></i></template
    ></sv-switch>
  </div>
</template>
<script>
export default {
  data: () => ({ a1: false, a2: false, a3: false, a5: false }),
};
</script>
