<template>

    <!-- <v-data-table :headers="headers" :items="dataj" :search="search" :custom-filter="customFilter"> -->
    <v-data-table :headers="headers" :items="dataj" :search="search">

    <!-- ヘッダー -->
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>列車位置情報</v-toolbar-title>
        <!-- 検索 -->
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line outlined rounded hide-details></v-text-field>
      </v-toolbar>
    </template>

    <template v-slot:[`item.odpt:stationTitle`]="{ item }">
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
import testj from '@/assets/odpt_Train.json'


// [{"@id":"urn:uuid:c7c5bdca-fa90-4874-a3cd-54ff84cfec42"
// ,"@type":"odpt:Train"
// ,"dc:date":"2020-09-26T23:52:15+09:00"
// ,"@context":"http://vocab.odpt.org/context_odpt.jsonld"
// ,"dct:valid":"2020-09-26T23:57:15+09:00"
// ,"odpt:delay":0
// ,"owl:sameAs":"odpt.Train:JR-East.JobanRapid.476M"
// ,"odpt:railway":"odpt.Railway:JR-East.JobanRapid"
// ,"odpt:operator":"odpt.Operator:JR-East"
// ,"odpt:toStation":"odpt.Station:JR-East.JobanRapid.Tennodai"
// ,"odpt:trainType":"odpt.TrainType:JR-East.Rapid"
// ,"odpt:fromStation":"odpt.Station:JR-East.JobanRapid.Toride"
// ,"odpt:trainNumber":"476M"
// ,"odpt:railDirection":"odpt.RailDirection:Inbound"
// ,"odpt:carComposition":10
// ,"odpt:destinationStation":["odpt.Station:JR-East.JobanRapid.Abiko"]}
// ,

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
        {text: '遅延',value: 'odpt:delay',},
        {text: '固有識別子',value: 'owl:sameAs',},
        {text: '路線',value: 'odpt:railway',},
        {text: '運行会社',value: 'odpt:operator',},
        {text: '向かっている駅',value: 'odpt:toStation',},
        {text: '列車種別',value: 'odpt:trainType',},
        {text: '出発駅',value: 'odpt:fromStation',},
        {text: '列番',value: 'odpt:trainNumber',},
        {text: '方面ID',value: 'odpt:railDirection',},
        {text: '車両数',value: 'odpt:carComposition',},
        {text: '行先駅',value: 'odpt:destinationStation',},
      ],
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