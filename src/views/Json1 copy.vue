<template>
  <v-data-table :headers="headers" :items="itemsa" :search="search" :custom-filter="customFilter">
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
import axios from 'axios';
import testj from '@/assets/Trainstatusinformation.json'

// {"@id":
//   "urn:uuid:5446c7e3-4abb-4689-ba8f-856daa544f37","@type":
//   "odpt:TrainInformation","dc:date":
//   "2020-08-26T02:19:00+09:00","@context":
//   "http://vocab.odpt.org/context_odpt.jsonld","dct:valid":
//   "2020-08-26T02:24:00+09:00","owl:sameAs":
//   "odpt.TrainInformation:JR-East.ChuoRapid","odpt:railway":
//   "odpt.Railway:JR-East.ChuoRapid","odpt:operator":
//   "odpt.Operator:JR-East","odpt:trainInformationText":{"en":
//   "Service on schedule","ja":
//   "平常運転"}
// },
// import userss from '../assets/Trainstatusinformation.json'
// import userss from '../assets/'




export default {
  props: ['items'],
  data () {
    return {
      menus: testj,
      search: '',
      headers: [
        {text: 'ホスト名',value: 'host',},
        {text: '説明',value: 'description',},
        {text: 'テンプレート',value: 'parentTemplates',},
        {text: 'インターフェース',value: 'interfaces',},
      ],
      itemsa: [
        {
          host: 'ホスト名',
          description: 'host',
          parentTemplates: [
            {name:"aaa"},
            {name:"bbb"},
          ],
          interfaces: [
            {ip:"1",port:1},
            {ip:"1",port:1},
            {ip:"1",port:1},
          ],
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
  mounted(){
    // ■ローカル取得
    axios.get('../assets/Trainstatusinformation.json',
    {
      params: {
        results: '10'
      }
    })
    .then(response => this.users = response.data.results).then(console.log(this.users))

    console.log(testj)
  }
};
</script>