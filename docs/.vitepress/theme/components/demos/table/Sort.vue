<template>
  <div class="center" style="flex-direction: column; gap: 15px">
    <sv-table>
      <template #thead>
        <sv-tr>
          <sv-th sort>Name</sv-th>
          <sv-th sort>Email</sv-th>
          <sv-th sort>Id</sv-th>
        </sv-tr>
      </template>
      <template #tbody>
        <sv-tr v-for="(item, i) in data" :key="i">
          <sv-td>{{ item.name }}</sv-td>
          <sv-td>{{ item.email }}</sv-td>
          <sv-td>{{ item.id }}</sv-td>
        </sv-tr>
      </template>
    </sv-table>
  </div>
</template>
<script>
export default {
  data: () => ({
    data: [
      { name: 'Rachel', email: 'rachel@example.com', id: 1 },
      { name: 'Emily', email: 'emily@example.com', id: 2 },
      { name: 'John', email: 'john@example.com', id: 3 },
      { name: 'Sarah', email: 'sarah@example.com', id: 4 },
    ],
  }),
};
</script>
