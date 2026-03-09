<template>
  <div class="center" style="flex-direction: column; gap: 15px">
    <sv-table>
      <template #thead>
        <sv-table-tr>
          <sv-table-th sort>Name</sv-table-th>
          <sv-table-th sort>Email</sv-table-th>
          <sv-table-th sort>Id</sv-table-th>
        </sv-table-tr>
      </template>
      <template #tbody>
        <sv-table-tr v-for="(item, i) in data" :key="i">
          <sv-table-td>{{ item.name }}</sv-table-td>
          <sv-table-td>{{ item.email }}</sv-table-td>
          <sv-table-td>{{ item.id }}</sv-table-td>
        </sv-table-tr>
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
