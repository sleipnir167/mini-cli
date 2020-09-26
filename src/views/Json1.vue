<template>
  <v-data-table :headers="headers" :items="items" :search="search" :custom-filter="customFilter">
    <template v-slot:top>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line/>
    </template>
    <template v-slot:[`item.parentTemplates`]="{ item }">
      <div v-for="i in item.parentTemplates" :key="i.templateid">{{ i.name }}</div>
    </template>
    <template v-slot:[`item.interfaces`]="{ item }">
      <div v-for="i in item.interfaces" :key="i.interfaceid">{{ i.ip }}:{{ i.port }}</div>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ['items'],
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'ホスト名',
          value: 'host',
        },
        {
          text: '説明',
          value: 'description',
        },
        {
          text: 'テンプレート',
          value: 'parentTemplates',
        },
        {
          text: 'インターフェース',
          value: 'interfaces',
        },
      ]
    }
  },
  methods: {
    customFilter (value, search) {
      return value != null &&
        search != null &&
        typeof value !== 'boolean' &&
        (typeof value === 'object' ? value.map(v => v.name || v.ip).join('\t') : value)
          .toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
    },
  },
}
</script>