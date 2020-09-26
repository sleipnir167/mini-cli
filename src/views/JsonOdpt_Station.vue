<template>
  <v-data-table :headers="headers" :items="dataj" :search="search" :custom-filter="customFilter">
    <template v-slot:top>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line/>
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
import testj from '@/assets/odpt_Station.json'

export default {
  // props: ['items'],
  data () {
    return {
      dataj: testj,
      search: '',
      headers: [
        {text: 'ID',value: '@id',},
        {text: 'type',value: '@type',},
        {text: 'データ生成時刻',value: 'dc:date',},
        {text: '緯度',value: 'geo:lat',},
        {text: 'コンテンツ',value: '@context',},
        {text: '駅名',value: 'dc:title',},
        {text: '経度',value: 'geo:long',},
        {text: '固有識別子',value: 'owl:sameAs',},
        {text: '路線',value: 'odpt:railway',},
        {text: '運行会社',value: 'odpt:operator',},
        {text: '駅名en.ja',value: 'odpt:stationTitle',},
        {text: '駅乗降人員数を表すオブジェクトへのリンク',value: 'odpt:passengerSurvey',},
      ],
          // [{
          // "@id":"urn:ucode:_00001C00000000000001000003102817",
          // "@type":"odpt:Station",
          // "dc:date":"2020-05-07T09:00:00+09:00",
          // "geo:lat":35.69432,
          // "@context":"http://vocab.odpt.org/context_odpt.jsonld",
          // "dc:title":"東山梨",
          // "geo:long":138.70297,
          // "owl:sameAs":"odpt.Station:JR-East.Chuo.HigashiYamanashi",
          // "odpt:railway":"odpt.Railway:JR-East.Chuo",
          // "odpt:operator":"odpt.Operator:JR-East",
          // "odpt:stationTitle":{"en":"Higashi-Yamanashi","ja":"東山梨"},
          // "odpt:passengerSurvey":["odpt.PassengerSurvey:JR-East.HigashiYamanashi"]},
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