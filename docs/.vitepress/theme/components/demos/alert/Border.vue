<template>
  <div class="center" style="flex-direction: column; gap: 10px">
    <sv-alert border>
      <template #title>Border Alert</template>
      This alert has a left border indicator.
    </sv-alert>
    <sv-alert border success>
      <template #title>Success Border</template>
      Success border alert.
    </sv-alert>
    <sv-alert border danger>
      <template #title>Danger Border</template>
      Danger border alert.
    </sv-alert>
  </div>
</template>
