<template>
  <div style="width: 100%">
    <sv-table>
      <template #header>
        <sv-input v-model="search" border placeholder="Search" />
      </template>
      <template #thead>
        <sv-tr>
          <sv-th sort @click="users = $sv.sortData($event, users, 'name')">Name</sv-th>
          <sv-th sort @click="users = $sv.sortData($event, users, 'email')">Email</sv-th>
          <sv-th sort @click="users = $sv.sortData($event, users, 'id')">Id</sv-th>
        </sv-tr>
      </template>
      <template #tbody>
        <sv-tr :key="i" v-for="(tr, i) in $sv.getSearch(users, search)" :data="tr">
          <sv-td>{{ tr.name }}</sv-td>
          <sv-td>{{ tr.email }}</sv-td>
          <sv-td>{{ tr.id }}</sv-td>
        </sv-tr>
      </template>
    </sv-table>
  </div>
</template>
<script>
export default {
  data: () => ({
    search: '',
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
