<template>
  <div class="center" style="width: 100%">
    <ul style="width: 100%; padding: 0; list-style: none">
      <li
        style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0"
      >
        <p style="margin: 0; font-size: 0.85rem">Email messages</p>
        <sv-switch v-model="a1" />
      </li>
      <li
        style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0"
      >
        <p style="margin: 0; font-size: 0.85rem">Change theme</p>
        <sv-switch v-model="a2"
          ><template #circle
            ><i v-if="!a2" class="bx bxs-moon"></i><i v-else class="bx bxs-sun"></i></template
        ></sv-switch>
      </li>
      <li
        style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0"
      >
        <p style="margin: 0; font-size: 0.85rem">Desktop notifications</p>
        <sv-switch v-model="a3"><i class="bx bxs-message"></i></sv-switch>
      </li>
      <li
        style="display: flex; align-items: center; justify-content: space-between; padding: 8px 0"
      >
        <p style="margin: 0; font-size: 0.85rem">Type of user</p>
        <sv-switch v-model="a4"
          ><template #on>Admin</template><template #off>Default</template></sv-switch
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({ a1: true, a2: false, a3: false, a4: true }),
};
</script>
