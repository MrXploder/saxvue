<template>
  <div style="width: 100%">
    <sv-table v-model="selected">
      <template #header>
        <sv-input v-model="search" border placeholder="Search" block />
      </template>
      <template #thead>
        <sv-table-tr>
          <sv-table-th>
            <sv-checkbox
              :indeterminate="selected.length == users.length"
              v-model="allCheck"
              @change="selected = $sv.checkAll(selected, users)"
            />
          </sv-table-th>
          <sv-table-th sort @click="users = $sv.sortData($event, users, 'name')">Name</sv-table-th>
          <sv-table-th sort @click="users = $sv.sortData($event, users, 'email')"
            >Email</sv-table-th
          >
          <sv-table-th sort @click="users = $sv.sortData($event, users, 'id')">Id</sv-table-th>
        </sv-table-tr>
      </template>
      <template #tbody>
        <sv-table-tr
          :key="i"
          v-for="(tr, i) in $sv.getPage($sv.getSearch(users, search), page, max)"
          :data="tr"
          :is-selected="!!selected.includes(tr)"
          not-click-selected
          open-expand-only-td
        >
          <sv-table-td checkbox>
            <sv-checkbox :val="tr" v-model="selected" />
          </sv-table-td>
          <sv-table-td
            edit
            @click="
              edit = tr;
              editProp = 'name';
              editActive = true;
            "
          >
            {{ tr.name }}
          </sv-table-td>
          <sv-table-td>{{ tr.email }}</sv-table-td>
          <sv-table-td>{{ tr.id }}</sv-table-td>
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
                <sv-avatar><i class="bx bx-user"></i></sv-avatar>
                <p>{{ tr.name }}</p>
              </div>
              <div style="display: flex; gap: 5px">
                <sv-button flat icon><i class="bx bx-lock-open-alt"></i></sv-button>
                <sv-button flat icon>Send Email</sv-button>
                <sv-button border danger>Remove User</sv-button>
              </div>
            </div>
          </template>
        </sv-table-tr>
      </template>
      <template #footer>
        <sv-pagination v-model="page" :length="$sv.getLength($sv.getSearch(users, search), max)" />
      </template>
    </sv-table>

    <sv-dialog v-model="editActive">
      <template #header> Change {{ editProp }} </template>
      <sv-input
        v-if="editProp == 'email'"
        v-model="edit[editProp]"
        @keypress.enter="editActive = false"
      />
      <sv-select
        v-if="editProp == 'name'"
        v-model="edit[editProp]"
        block
        placeholder="Select"
        @change="editActive = false"
      >
        <sv-option label="SaxVue" value="SaxVue">SaxVue</sv-option>
        <sv-option label="Vue" value="Vue">Vue</sv-option>
        <sv-option label="Javascript" value="Javascript">Javascript</sv-option>
        <sv-option label="Typescript" value="Typescript">Typescript</sv-option>
      </sv-select>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    editActive: false,
    edit: null,
    editProp: '',
    search: '',
    allCheck: false,
    page: 1,
    max: 5,
    selected: [],
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
