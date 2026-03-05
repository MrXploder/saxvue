<template>
  <div class="center">
    <sv-alert>
      <template #title>Alert with Footer</template>
      Main content of the alert.
      <template #footer>
        <sv-button flat size="small">Accept</sv-button>
        <sv-button flat size="small" dark>Cancel</sv-button>
      </template>
    </sv-alert>
  </div>
</template>
