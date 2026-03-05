<template>
  <div class="sv-card">
    <div class="sv-card__text">
      <slot />
    </div>
    <div v-if="$slots.example" class="sv-card__example">
      <slot name="example" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Card wrapper matching the legacy <card> component used throughout docs.
// Default slot = description / headings / code blocks.
// #example slot = live interactive demo rendered above the text.
</script>

<style>
.sv-card__example {
  position: relative;
  padding: 20px;
  margin: 10px 0;
  border-radius: 12px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
}
.sv-card__example .center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
}
.sv-card__example .center.con-selects {
  justify-content: flex-start;
}
.sv-card__example .center.content-inputs {
  flex-direction: column;
  gap: 15px;
}
.sv-card__example .examplex {
  width: 100%;
}
.sv-card__example .divider {
  display: block;
  width: 100%;
  height: 0;
}
</style>
