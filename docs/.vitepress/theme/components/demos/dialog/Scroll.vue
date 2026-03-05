<template>
  <div class="center">
    <sv-button @click="active = true">Scroll Dialog</sv-button>
    <sv-dialog scroll v-model="active">
      <template #header>
        <h4 style="margin: 0; padding: 10px">Scrollable Dialog</h4>
      </template>
      <div style="padding: 10px">
        <p v-for="n in 20" :key="n">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph {{ n }} of 20.
        </p>
      </div>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({ active: false }),
};
</script>
