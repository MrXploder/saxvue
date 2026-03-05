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
      <sv-th>Name</sv-th>
      <sv-th>Email</sv-th>
      <sv-th>Id</sv-th>
    </template>
    <template #body>
      <sv-tr v-for="(user, i) in users" :key="i">
        <sv-td>{{ user.name }}</sv-td>
        <sv-td>{{ user.email }}</sv-td>
        <sv-td>{{ user.id }}</sv-td>
      </sv-tr>
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
    <sv-th sort>Name</sv-th>
    <sv-th sort>Email</sv-th>
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

Add sorting to columns using the `sort` property on `<sv-th>`.

<template #example>
<ClientOnly><TableSort /></ClientOnly>
</template>

```html
<sv-th sort>Sortable Column</sv-th>
```

</card>

<card>

## Expand

Add expandable rows using the `#expand` slot on `<sv-tr>`.

<template #example>
<ClientOnly><TableExpand /></ClientOnly>
</template>

```html
<sv-tr>
  <sv-td>Row Content</sv-td>
  <template #expand>
    <div>Expanded content here</div>
  </template>
</sv-tr>
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
    <sv-th>Name</sv-th>
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
