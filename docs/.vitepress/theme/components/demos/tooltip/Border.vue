<template>
  <div class="center" style="gap: 10px">
    <sv-tooltip border>
      <sv-button flat>Border</sv-button>
      <template #tooltip>Border tooltip</template>
    </sv-tooltip>
    <sv-tooltip border color="success">
      <sv-button flat success>Success Border</sv-button>
      <template #tooltip>Success border tooltip</template>
    </sv-tooltip>
  </div>
</template>
