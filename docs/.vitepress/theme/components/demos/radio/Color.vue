<template>
  <div class="center" style="flex-direction: column; align-items: flex-start; gap: 5px">
    <sv-radio v-model="picked" val="1">Primary</sv-radio>
    <sv-radio success v-model="picked" val="2">Success</sv-radio>
    <sv-radio danger v-model="picked" val="3">Danger</sv-radio>
    <sv-radio warn v-model="picked" val="4">Warning</sv-radio>
    <sv-radio dark v-model="picked" val="5">Dark</sv-radio>
    <sv-radio color="#7d33ff" v-model="picked" val="6">HEX</sv-radio>
    <sv-radio color="rgb(59,222,200)" v-model="picked" val="7">RGB</sv-radio>
  </div>
</template>
<script>
export default {
  data: () => ({ picked: '2' }),
};
</script>
