<template>
  <div style="width: 100%">
    <sv-table>
      <template #thead>
        <sv-table-tr>
          <sv-table-th>Name</sv-table-th>
          <sv-table-th>Email</sv-table-th>
          <sv-table-th>Id</sv-table-th>
        </sv-table-tr>
      </template>
      <template #tbody>
        <sv-table-tr
          :key="i"
          v-for="(tr, i) in users"
          :data="tr"
          :danger="tr.id == 3"
          :success="tr.id == 5"
          :primary="tr.id == 8"
          :warn="tr.id == 9"
        >
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
      { id: 6, name: 'Mrs. Dennis Schulist', email: 'Karley_Dach@jasper.info' },
      { id: 7, name: 'Kurtis Weissnat', email: 'Telly.Hoeger@billy.biz' },
      { id: 8, name: 'Nicholas Runolfsdottir V', email: 'Sherwood@rosamond.me' },
      { id: 9, name: 'Glenna Reichert', email: 'Chaim_McDermott@dana.io' },
      { id: 10, name: 'Clementina DuBuque', email: 'Rey.Padberg@karina.biz' },
    ],
  }),
};
</script>
