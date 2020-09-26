<template>

    <!-- <v-data-table :headers="headers" :items="dataj" :search="search" :custom-filter="customFilter"> -->
    <v-data-table :headers="headers" :items="dataj" :search="search">

    <!-- ヘッダー -->
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>列車運行情報</v-toolbar-title>
        <!-- 検索 -->
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line outlined rounded hide-details></v-text-field>
      </v-toolbar>
    </template>

    <template v-slot:[`item.odpt:trainInformationText`]="{ item }">
      <div v-for="(i) in item" :key="i">{{ i.en }}{{ i.ja }}</div>
      <!-- <div v-for="(i,index) in item" :key="i">{{ i.en }}{{ i.ja }}###{{i[index]}}{{item}}</div> -->
    </template>
    <!-- <template v-slot:[`item.interfaces`]="{ item }">
      <div v-for="i in item.interfaces" :key="i.interfaceid">{{ i.ip }}:{{ i.port }}</div>
    </template> -->
  </v-data-table>
</template>

<script>
import axios from 'axios';
import testj from '@/assets/Trainstatusinformation.json'

// {"@id":"urn:uuid:5446c7e3-4abb-4689-ba8f-856daa544f37",
// "@type":"odpt:TrainInformation",
// "dc:date":"2020-08-26T02:19:00+09:00",
// "@context":"http://vocab.odpt.org/context_odpt.jsonld",
// "dct:valid":"2020-08-26T02:24:00+09:00",
// "owl:sameAs":"odpt.TrainInformation:JR-East.ChuoRapid",
// "odpt:railway":"odpt.Railway:JR-East.ChuoRapid",
// "odpt:operator":"odpt.Operator:JR-East",
// "odpt:trainInformationText":{"en":"Service on schedule",
// "ja":"平常運転"}},
// import userss from '../assets/Trainstatusinformation.json'
// import userss from '../assets/'


export default {
  // props: ['items'],
  data () {
    return {
      dataj: testj,
      search: '',
      headers: [
        // {text: 'ID',value: '@id',},
        // {text: 'type',value: '@type',},
        {text: 'データ生成時刻',value: 'dc:date',},
        // {text: 'コンテンツ',value: '@context',},
        {text: 'データ保証期限',value: 'dct:valid',},
        {text: '固有識別子',value: 'owl:sameAs',},
        {text: '路線ID',value: 'odpt:railway',},
        {text: '事業者ID',value: 'odpt:operator',},
        {text: '運行情報テキスト',value: 'odpt:trainInformationText',},
      ],
      // itemsa: [
      //   {
      //     "@id": 'urn:uuid:5446c7e3-4abb-4689-ba8f-856daa544f37',
      //     "@type":"odpt:TrainInformation",
      //     "dc:date":"2020-08-26T02:19:00+09:00",
      //     "@context":"http://vocab.odpt.org/context_odpt.jsonld",
      //     "dct:valid":"2020-08-26T02:24:00+09:00",
      //     "owl:sameAs":"odpt.TrainInformation:JR-East.ChuoRapid",
      //     "odpt:railway":"odpt.Railway:JR-East.ChuoRapid",
      //     "odpt:operator":"odpt.Operator:JR-East",
      //     "odpt:trainInformationText":{"en":"Service on schedule","ja":"平常運転"}
      //   },
      // ]
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