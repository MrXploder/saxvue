<template>
  <div class="center">
    <sv-button @click="active = !active">Open Dialog</sv-button>
    <sv-dialog v-model="active">
      <template #header>
        <h4 style="margin: 0; padding: 10px; font-weight: normal">Welcome to <b>SaxVue</b></h4>
      </template>
      <div style="padding: 10px">
        <sv-input v-model="email" placeholder="Email">
          <template #icon>@</template>
        </sv-input>
        <sv-input
          type="password"
          v-model="password"
          placeholder="Password"
          style="margin-top: 10px"
        >
          <template #icon><i class="bx bxs-lock"></i></template>
        </sv-input>
      </div>
      <template #footer>
        <div style="display: flex; flex-direction: column; align-items: center; width: 100%">
          <sv-button block>Sign In</sv-button>
        </div>
      </template>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({ active: false, email: '', password: '' }),
};
</script>
