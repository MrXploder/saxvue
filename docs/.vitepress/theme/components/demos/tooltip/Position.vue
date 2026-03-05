<template>
  <div class="center" style="gap: 10px">
    <sv-tooltip>
      <sv-button flat>Top</sv-button>
      <template #tooltip>Top tooltip</template>
    </sv-tooltip>
    <sv-tooltip bottom>
      <sv-button flat>Bottom</sv-button>
      <template #tooltip>Bottom tooltip</template>
    </sv-tooltip>
    <sv-tooltip left>
      <sv-button flat>Left</sv-button>
      <template #tooltip>Left tooltip</template>
    </sv-tooltip>
    <sv-tooltip right>
      <sv-button flat>Right</sv-button>
      <template #tooltip>Right tooltip</template>
    </sv-tooltip>
  </div>
</template>
