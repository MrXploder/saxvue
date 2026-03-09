<template>
  <div class="examplex" style="width: 100%">
    <sv-table striped>
      <template #thead>
        <sv-table-tr>
          <sv-table-th>Name</sv-table-th>
          <sv-table-th>Email</sv-table-th>
          <sv-table-th>Id</sv-table-th>
        </sv-table-tr>
      </template>
      <template #tbody>
        <sv-table-tr :key="i" v-for="(tr, i) in users" :data="tr">
          <sv-table-td>{{ tr.name }}</sv-table-td>
          <sv-table-td>{{ tr.email }}</sv-table-td>
          <sv-table-td>{{ tr.id }}</sv-table-td>
        </sv-table-tr>
      </template>
    </sv-table>
  </div>
</template>
<script>
export default {
  data: () => ({
    users: [
      { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
      { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
      { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net' },
      { id: 4, name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org' },
      { id: 5, name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca' },
    ],
  }),
};
</script>
