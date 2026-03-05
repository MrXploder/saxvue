<template>
  <div class="center" style="flex-direction: column; gap: 10px">
    <sv-alert solid>
      <template #title>Solid Alert</template>
      This is a solid alert.
    </sv-alert>
    <sv-alert solid success>
      <template #title>Success Solid</template>
      Success solid alert.
    </sv-alert>
    <sv-alert solid danger>
      <template #title>Danger Solid</template>
      Danger solid alert.
    </sv-alert>
  </div>
</template>
