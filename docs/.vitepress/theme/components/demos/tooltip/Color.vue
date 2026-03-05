<template>
  <div class="center" style="gap: 10px">
    <sv-tooltip>
      <sv-button flat>Primary</sv-button>
      <template #tooltip>Primary color</template>
    </sv-tooltip>
    <sv-tooltip color="success">
      <sv-button flat success>Success</sv-button>
      <template #tooltip>Success color</template>
    </sv-tooltip>
    <sv-tooltip color="danger">
      <sv-button flat danger>Danger</sv-button>
      <template #tooltip>Danger color</template>
    </sv-tooltip>
    <sv-tooltip color="warn">
      <sv-button flat warn>Warning</sv-button>
      <template #tooltip>Warning color</template>
    </sv-tooltip>
    <sv-tooltip color="#7d33ff">
      <sv-button flat color="#7d33ff">HEX</sv-button>
      <template #tooltip>Custom HEX</template>
    </sv-tooltip>
  </div>
</template>
