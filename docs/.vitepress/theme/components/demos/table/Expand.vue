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
        <sv-tr :key="i" v-for="(tr, i) in users" :data="tr">
          <sv-td>{{ tr.name }}</sv-td>
          <sv-td>{{ tr.email }}</sv-td>
          <sv-td>{{ tr.id }}</sv-td>
          <template #expand>
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px;
              "
            >
              <div style="display: flex; align-items: center; gap: 10px">
                <sv-avatar>
                  <i class="bx bx-user"></i>
                </sv-avatar>
                <p>{{ tr.name }}</p>
              </div>
              <div style="display: flex; gap: 5px">
                <sv-button flat icon>
                  <i class="bx bx-lock-open-alt"></i>
                </sv-button>
                <sv-button flat icon>Send Email</sv-button>
                <sv-button border danger>Remove User</sv-button>
              </div>
            </div>
          </template>
        </sv-tr>
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
