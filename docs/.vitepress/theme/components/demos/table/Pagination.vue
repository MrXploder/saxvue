<template>
  <div style="width: 100%">
    <sv-table>
      <template #thead>
        <sv-tr>
          <sv-th>Name</sv-th>
          <sv-th>Email</sv-th>
          <sv-th>Id</sv-th>
        </sv-tr>
      </template>
      <template #tbody>
        <sv-tr :key="i" v-for="(tr, i) in $sv.getPage(users, page, max)" :data="tr">
          <sv-td>{{ tr.name }}</sv-td>
          <sv-td>{{ tr.email }}</sv-td>
          <sv-td>{{ tr.id }}</sv-td>
        </sv-tr>
      </template>
      <template #footer>
        <sv-pagination v-model="page" :length="$sv.getLength(users, max)" />
      </template>
    </sv-table>
  </div>
</template>
<script>
export default {
  data: () => ({
    page: 1,
    max: 3,
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
