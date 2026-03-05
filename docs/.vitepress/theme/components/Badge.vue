<template>
  <span :class="['sv-badge', type, vertical]">
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
// Port of legacy global-components/Badge.vue
// Used inline in doc pages to label props, features, versions, etc.
// Usage: <badge type="tip" text="NEW" /> or <badge type="danger">Deprecated</badge>
withDefaults(
  defineProps<{
    type?: 'tip' | 'success' | 'warning' | 'warn' | 'danger' | 'error' | 'accent' | 'text';
    text?: string;
    vertical?: 'top' | 'middle';
  }>(),
  {
    type: 'tip',
    vertical: 'top',
  },
);
</script>

<style scoped>
.sv-badge {
  display: inline-block;
  font-size: 0.7rem;
  border-radius: 5px;
  padding: 1px 6px;
  color: #fff;
  cursor: default;
  pointer-events: none;
  user-select: none;
  font-weight: 600;
  vertical-align: top;
}
.sv-badge.middle {
  vertical-align: middle;
}
.sv-badge.top {
  vertical-align: top;
}
/* type colours */
.sv-badge.tip,
.sv-badge.success {
  background-color: #42b983;
}
.sv-badge.danger,
.sv-badge.error {
  background-color: rgb(255, 71, 87);
}
.sv-badge.warning,
.sv-badge.warn {
  background-color: rgb(255, 186, 0);
}
.sv-badge.accent {
  background-color: rgba(var(--sv-primary), 1);
}
.sv-badge.text {
  background-color: var(--vp-c-text-1);
}
</style>
