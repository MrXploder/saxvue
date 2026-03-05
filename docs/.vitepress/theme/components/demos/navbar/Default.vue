<template>
  <div
    style="
      width: 100%;
      border: 1px solid var(--vp-c-divider);
      border-radius: 12px;
      overflow: hidden;
    "
  >
    <sv-navbar>
      <template #left>
        <b>SaxVue</b>
      </template>
      <sv-navbar-item active>Home</sv-navbar-item>
      <sv-navbar-item>News</sv-navbar-item>
      <sv-navbar-item>Contact</sv-navbar-item>
      <template #right>
        <sv-button flat icon><i class="bx bx-user"></i></sv-button>
      </template>
    </sv-navbar>
  </div>
</template>
