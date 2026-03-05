<template>
  <div class="center" style="gap: 10px">
    <sv-tooltip shadow>
      <sv-button flat>Shadow</sv-button>
      <template #tooltip>Shadow tooltip</template>
    </sv-tooltip>
    <sv-tooltip not-arrow>
      <sv-button flat>No Arrow</sv-button>
      <template #tooltip>No arrow tooltip</template>
    </sv-tooltip>
    <sv-tooltip loading>
      <sv-button flat>Loading</sv-button>
      <template #tooltip>Loading tooltip</template>
    </sv-tooltip>
  </div>
</template>
