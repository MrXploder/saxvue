<template>
  <div class="center" style="flex-direction: column; gap: 10px">
    <sv-alert gradient>
      <template #title>Gradient Alert</template>
      This alert has a gradient background.
    </sv-alert>
    <sv-alert gradient success>
      <template #title>Success Gradient</template>
      Success gradient alert.
    </sv-alert>
    <sv-alert gradient danger>
      <template #title>Danger Gradient</template>
      Danger gradient alert.
    </sv-alert>
  </div>
</template>
