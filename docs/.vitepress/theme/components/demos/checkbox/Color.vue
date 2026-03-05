<template>
  <div class="center" style="flex-direction: column; align-items: flex-start">
    <sv-checkbox v-model="option1">Primary</sv-checkbox>
    <sv-checkbox success v-model="option2">Success</sv-checkbox>
    <sv-checkbox danger v-model="option3">Danger</sv-checkbox>
    <sv-checkbox warn v-model="option4">Warning</sv-checkbox>
    <sv-checkbox dark v-model="option5">Dark</sv-checkbox>
    <sv-checkbox color="#7d33ff" v-model="option6">HEX</sv-checkbox>
    <sv-checkbox color="rgb(59,222,200)" v-model="option7">RGB</sv-checkbox>
  </div>
</template>
<script>
export default {
  data: () => ({
    option1: true,
    option2: true,
    option3: true,
    option4: true,
    option5: true,
    option6: true,
    option7: true,
  }),
};
</script>
