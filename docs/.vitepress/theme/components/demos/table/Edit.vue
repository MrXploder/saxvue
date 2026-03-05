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
        <sv-tr :key="i" v-for="(tr, i) in users">
          <sv-td
            edit
            @click="
              edit = tr;
              editProp = 'name';
              editActive = true;
            "
          >
            {{ tr.name }}
          </sv-td>
          <sv-td
            edit
            @click="
              edit = tr;
              editProp = 'email';
              editActive = true;
            "
          >
            {{ tr.email }}
          </sv-td>
          <sv-td>{{ tr.id }}</sv-td>
        </sv-tr>
      </template>
    </sv-table>

    <sv-dialog v-model="editActive">
      <template #header> Change {{ editProp }} </template>
      <sv-input
        v-if="editProp == 'email'"
        v-model="edit[editProp]"
        block
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
