# Table

<card>

## Default

The `<sv-table>` component creates a styled data table.

<template #example>
<ClientOnly><TableDefault /></ClientOnly>
</template>

```vue
<template>
  <sv-table>
    <template #header>
      <sv-table-th>Name</sv-table-th>
      <sv-table-th>Email</sv-table-th>
      <sv-table-th>Id</sv-table-th>
    </template>
    <template #body>
      <sv-table-tr v-for="(user, i) in users" :key="i">
        <sv-table-td>{{ user.name }}</sv-table-td>
        <sv-table-td>{{ user.email }}</sv-table-td>
        <sv-table-td>{{ user.id }}</sv-table-td>
      </sv-table-tr>
    </template>
  </sv-table>
</template>

<script setup>
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];
</script>
```

</card>

<card>

## Striped

Add alternating row colors.

<template #example>
<ClientOnly><TableStriped /></ClientOnly>
</template>

```html
<sv-table striped>
  <!-- table content -->
</sv-table>
```

</card>

<card>

## Multiple

Allow multiple row selection.

<template #example>
<ClientOnly><TableMultiple /></ClientOnly>
</template>

```html
<sv-table v-model="selected" multiple>
  <!-- table content -->
</sv-table>
```

</card>

<card>

## Single Selection

Allow single row selection.

<template #example>
<ClientOnly><TableSelected /></ClientOnly>
</template>

```html
<sv-table v-model="selected">
  <!-- table content -->
</sv-table>
```

</card>

<card>

## Search

Enable search functionality using the `#header` slot with the search function.

<template #example>
<ClientOnly><TableSearch /></ClientOnly>
</template>

```html
<sv-table>
  <template #header>
    <sv-table-th sort>Name</sv-table-th>
    <sv-table-th sort>Email</sv-table-th>
  </template>
  <template #body>
    <!-- rows -->
  </template>
  <template #notFound> No results found </template>
</sv-table>
```

</card>

<card>

## Sort

Add sorting to columns using the `sort` property on `<sv-table-th>`.

<template #example>
<ClientOnly><TableSort /></ClientOnly>
</template>

```html
<sv-table-th sort>Sortable Column</sv-table-th>
```

</card>

<card>

## Expand

Add expandable rows using the `#expand` slot on `<sv-table-tr>`.

<template #example>
<ClientOnly><TableExpand /></ClientOnly>
</template>

```html
<sv-table-tr>
  <sv-table-td>Row Content</sv-table-td>
  <template #expand>
    <div>Expanded content here</div>
  </template>
</sv-table-tr>
```

</card>

<card>

## Pagination

Add pagination to the table.

<template #example>
<ClientOnly><TablePagination /></ClientOnly>
</template>

```html
<sv-table>
  <template #header>
    <sv-table-th>Name</sv-table-th>
  </template>
  <template #body>
    <!-- paginated rows -->
  </template>
  <template #footer>
    <sv-pagination v-model="page" :length="10" />
  </template>
</sv-table>
```

</card>

<card>

## State

Add color-coded state to rows using `danger`, `success`, `primary`, or `warn` props on `sv-tr`.

<template #example>
<ClientOnly><TableState /></ClientOnly>
</template>

```html
<sv-table-tr :danger="row.id == 3" :success="row.id == 5" :primary="row.id == 8">
  <sv-table-td>{{ row.name }}</sv-table-td>
</sv-table-tr>
```

</card>

<card>

## Edit

Use the `edit` prop on `sv-td` to make cells clickable for editing. Typically opens a dialog.

<template #example>
<ClientOnly><TableEdit /></ClientOnly>
</template>

```html
<sv-table-td edit @click="openEdit(row, 'name')">{{ row.name }}</sv-table-td>
```

</card>

<card>

## Miscellaneous

A full-featured table combining search, sort, checkbox selection, expand rows, inline edit, and pagination.

<template #example>
<ClientOnly><TableMiscellaneous /></ClientOnly>
</template>

```html
<sv-table v-model="selected">
  <template #header>
    <sv-input v-model="search" border placeholder="Search" block />
  </template>
  <template #thead>
    <sv-table-tr>
      <sv-table-th><sv-checkbox v-model="allCheck" /></sv-table-th>
      <sv-table-th sort @click="users = $sv.sortData($event, users, 'name')">Name</sv-table-th>
    </sv-table-tr>
  </template>
  <template #tbody>
    <sv-table-tr v-for="(tr, i) in $sv.getPage(users, page, 5)" :data="tr">
      <sv-table-td checkbox><sv-checkbox :val="tr" v-model="selected" /></sv-table-td>
      <sv-table-td>{{ tr.name }}</sv-table-td>
    </sv-table-tr>
  </template>
  <template #footer>
    <sv-pagination v-model="page" :length="$sv.getLength(users, 5)" />
  </template>
</sv-table>
```

</card>

## API

### sv-table

| Property   | Type               | Description            | Default |
| ---------- | ------------------ | ---------------------- | ------- |
| `v-model`  | `Array` / `Object` | Selected row(s)        | —       |
| `striped`  | `Boolean`          | Striped rows           | `false` |
| `multiple` | `Boolean`          | Multiple row selection | `false` |

### sv-th

| Property | Type      | Description    | Default |
| -------- | --------- | -------------- | ------- |
| `sort`   | `Boolean` | Enable sorting | `false` |

### sv-tr

| Property      | Type      | Description    | Default |
| ------------- | --------- | -------------- | ------- |
| `data`        | `Object`  | Row data       | —       |
| `is-selected` | `Boolean` | Selected state | `false` |

### Table Slots

| Name        | Description         |
| ----------- | ------------------- |
| `#header`   | Table header row    |
| `#body`     | Table body rows     |
| `#footer`   | Table footer        |
| `#notFound` | Empty state content |
