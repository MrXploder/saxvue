<template>
  <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap">
    <sv-card color="primary">
      <template #title><h3>Primary</h3></template>
      <template #text><p>A card with primary color.</p></template>
    </sv-card>
    <sv-card color="success">
      <template #title><h3>Success</h3></template>
      <template #text><p>A card with success color.</p></template>
    </sv-card>
    <sv-card color="danger">
      <template #title><h3>Danger</h3></template>
      <template #text><p>A card with danger color.</p></template>
    </sv-card>
  </div>
</template>
