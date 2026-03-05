<template>
  <div class="center" style="gap: 10px">
    <sv-tooltip square>
      <sv-button flat>Square Tooltip</sv-button>
      <template #tooltip>Square tooltip</template>
    </sv-tooltip>
    <sv-tooltip circle>
      <sv-button flat>Circle Tooltip</sv-button>
      <template #tooltip>Circle tooltip</template>
    </sv-tooltip>
  </div>
</template>
