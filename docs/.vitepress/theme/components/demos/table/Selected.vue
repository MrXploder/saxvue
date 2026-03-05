<template>
  <div style="width: 100%">
    <sv-table v-model="selected">
      <template #thead>
        <sv-tr>
          <sv-th>Name</sv-th>
          <sv-th>Email</sv-th>
          <sv-th>Id</sv-th>
        </sv-tr>
      </template>
      <template #tbody>
        <sv-tr :key="i" v-for="(tr, i) in users" :data="tr" :is-selected="selected == tr">
          <sv-td>{{ tr.name }}</sv-td>
          <sv-td>{{ tr.email }}</sv-td>
          <sv-td>{{ tr.id }}</sv-td>
        </sv-tr>
      </template>
    </sv-table>
    <pre
      style="
        margin-top: 10px;
        padding: 10px;
        background: var(--vp-c-bg-soft);
        border-radius: 8px;
        font-size: 0.85rem;
      "
      >{{ selected ? selected : 'Select an item in the table' }}</pre
    >
  </div>
</template>
<script>
export default {
  data: () => ({
    selected: null,
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
