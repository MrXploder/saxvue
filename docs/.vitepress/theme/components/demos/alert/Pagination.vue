<template>
  <div class="center">
    <sv-alert :page="page" @update:page="page = $event">
      <template #title> SaxVue Framework </template>
      <template #page-1>
        Page 1 — this page is a slot and you can add text, HTML elements, or components.
      </template>
      <template #page-2>
        Page 2 — in this page you can also put what you need, and it's dynamic so you can add as
        many pages as needed.
      </template>
      <template #page-3> Page 3 — this is the last page of the example. </template>
    </sv-alert>
  </div>
</template>
<script>
export default {
  data: () => ({ page: 1 }),
};
</script>
