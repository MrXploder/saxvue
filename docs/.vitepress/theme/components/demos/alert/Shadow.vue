<template>
  <div class="center" style="flex-direction: column; gap: 10px">
    <sv-alert shadow>
      <template #title>Shadow Alert</template>
      This alert has a shadow.
    </sv-alert>
    <sv-alert shadow success>
      <template #title>Success Shadow</template>
      Success shadow alert.
    </sv-alert>
  </div>
</template>
