<template>
  <div class="grid-demo">
    <sv-row>
      <sv-col
        w="12"
        style="
          padding: 10px;
          text-align: center;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
        "
        >100%</sv-col
      >
    </sv-row>
    <sv-row>
      <sv-col
        :key="i"
        v-for="(col, i) in 2"
        w="6"
        style="
          padding: 10px;
          text-align: center;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
        "
        >50%</sv-col
      >
    </sv-row>
    <sv-row>
      <sv-col
        :key="i"
        v-for="(col, i) in 3"
        w="4"
        style="
          padding: 10px;
          text-align: center;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
        "
        >33.3%</sv-col
      >
    </sv-row>
    <sv-row>
      <sv-col
        :key="i"
        v-for="(col, i) in 4"
        w="3"
        style="
          padding: 10px;
          text-align: center;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
        "
        >25%</sv-col
      >
    </sv-row>
    <sv-row>
      <sv-col
        :key="i"
        v-for="(col, i) in 6"
        w="2"
        style="
          padding: 10px;
          text-align: center;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
        "
        >16.6%</sv-col
      >
    </sv-row>
    <sv-row>
      <sv-col
        :key="i"
        v-for="(col, i) in 12"
        w="1"
        style="
          padding: 10px;
          text-align: center;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          font-size: 0.75rem;
        "
        >8.3%</sv-col
      >
    </sv-row>
  </div>
</template>
<style scoped>
.grid-demo {
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
}
</style>
