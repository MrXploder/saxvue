<template>
  <div
    style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding-bottom: 20px"
  >
    <div v-for="c in colors" :key="c.name" :style="getStyle(c.var)" class="color-box">
      {{ c.name }}
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    colors: [
      { name: 'Primary', var: 'primary' },
      { name: 'Success', var: 'success' },
      { name: 'Danger', var: 'danger' },
      { name: 'Warn', var: 'warn' },
      { name: 'Dark', var: 'dark' },
    ],
  }),
  methods: {
    getStyle(colorVar) {
      return {
        background: `rgba(var(--sv-${colorVar}), 1)`,
        boxShadow: `0px 20px 35px -10px rgba(var(--sv-${colorVar}), 0.5)`,
        color: '#fff',
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        borderRadius: '6px 20px 20px 20px',
        transition: 'all 0.25s ease',
        cursor: 'default',
      };
    },
  },
};
</script>
