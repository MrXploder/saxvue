<template>
  <div class="center" style="flex-direction: column; gap: 10px">
    <sv-alert relief>
      <template #title>Relief Alert</template>
      This alert has a relief style.
    </sv-alert>
    <sv-alert relief success>
      <template #title>Success Relief</template>
      Success relief alert.
    </sv-alert>
    <sv-alert relief danger>
      <template #title>Danger Relief</template>
      Danger relief alert.
    </sv-alert>
  </div>
</template>
