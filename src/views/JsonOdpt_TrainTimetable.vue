<template>

    <!-- <v-data-table :headers="headers" :items="dataj" :search="search" :custom-filter="customFilter"> -->
    <v-data-table :headers="headers" :items="dataj" :search="search">

    <!-- ヘッダー -->
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>列車時刻表</v-toolbar-title>
        <!-- 検索 -->
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line outlined rounded hide-details></v-text-field>
      </v-toolbar>
    </template>

    <!-- <template v-slot:[`item.odpt:stationTitle`]="{ item }">
      <div v-for="(i) in item" :key="i">{{ i.en }}{{ i.ja }}</div>
    </template> -->
    <template v-slot:[`item.odpt:originStation`]="{ item }">
      <div v-for="(i) in item[`odpt:originStation`]" :key="i">
        {{i}}
      </div>
    </template>
    <template v-slot:[`item.odpt:trainTimetableObject`]="{ item }">
      <div v-for="(i) in item[`odpt:trainTimetableObject`]" :key="i">
        {{i[`odpt:departureTime`]}} : {{i[`odpt:departureStation`]}} : {{i[`odpt:arrivalStation`]}}
      </div>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';
import testj from '@/assets/odpt_TrainTimetable.json'


// [{
//  "@id":"urn:ucode:_00001C00000000000001000003109328"
// ,"@type":"odpt:TrainTimetable"
// ,"dc:date":"2020-08-22T15:00:00+09:00"
// ,"@context":"http://vocab.odpt.org/context_odpt.jsonld"
// ,"dct:issued":"2020-03-14"
// ,"odpt:train":"odpt.Train:JR-East.Hachiko.761E"
// ,"owl:sameAs":"odpt.TrainTimetable:JR-East.Hachiko.761E.SaturdayHoliday"
// ,"odpt:railway":"odpt.Railway:JR-East.Hachiko"
// ,"odpt:calendar":"odpt.Calendar:SaturdayHoliday"
// ,"odpt:operator":"odpt.Operator:JR-East"
// ,"odpt:trainType":"odpt.TrainType:JR-East.Local"
// ,"odpt:trainNumber":"761E"
// ,"odpt:originStation":["odpt.Station:JR-East.Hachiko.Hachioji"]
// ,"odpt:railDirection":"odpt.RailDirection:Outbound"
// ,"odpt:destinationStation":["odpt.Station:JR-East.Kawagoe.Kawagoe"]
// ,"odpt:nextTrainTimetable":["odpt.TrainTimetable:JR-East.Kawagoe.760H.SaturdayHoliday"]
// ,"odpt:trainTimetableObject":[{"odpt:departureTime":"07:18" ,"odpt:departureStation":"odpt.Station:JR-East.Hachiko.Hachioji"}
                              // ,{"odpt:departureTime":"07:26" ,"odpt:departureStation":"odpt.Station:JR-East.Hachiko.KitaHachioji"}
                              // ,{"odpt:departureTime":"07:32" ,"odpt:departureStation":"odpt.Station:JR-East.Hachiko.Komiya"}
                              // ,{"odpt:departureTime":"07:39" ,"odpt:departureStation":"odpt.Station:JR-East.Hachiko.Haijima"}
                              // ,{"odpt:departureTime":"07:44" ,"odpt:departureStation":"odpt.Station:JR-East.Hachiko.HigashiFussa"}
                              // ,{"odpt:departureTime":"07:50" ,"odpt:departureStation":"odpt.Station:JR-East.Hachiko.Hakonegasaki"}
                              // ,{"odpt:departureTime":"07:55" ,"odpt:departureStation":"odpt.Station:JR-East.Hachiko.Kaneko"}
                              // ,{"odpt:departureTime":"08:03" ,"odpt:departureStation":"odpt.Station:JR-East.Hachiko.HigashiHanno"}
//                               ,{"odpt:arrivalStation":"odpt.Station:JR-East.Hachiko.Komagawa"}]}

export default {
  // props: ['items'],
  data () {
    return {
      dataj: testj,
      search: '',
      headers: [
        // {text: 'ID',value: '@id',width: '50'},
        // {text: 'type',value: '@type',width: '50'},
        {text: 'データ生成時刻',value: 'dc:date',width: '50'},
        // {text: 'コンテンツ',value: '@context',width: '50'},
        {text: 'ダイヤ改正日',value: 'dct:issued',width: '50'},
        {text: '列番',value: 'odpt:train',width: '50'},
        {text: '固有識別子',value: 'owl:sameAs',width: '50'},
        {text: '路線',value: 'odpt:railway',width: '50'},
        {text: 'ダイヤ面',value: 'odpt:calendar',width: '50'},
        {text: '運行会社',value: 'odpt:operator',width: '50'},
        {text: '列車種別',value: 'odpt:trainType',width: '50'},
        {text: '列番',value: 'odpt:trainNumber',width: '50'},
        {text: '列車の始発駅',value: 'odpt:originStation',width: '250'},
        {text: '方面ID',value: 'odpt:railDirection',width: '50'},
        {text: '行先駅',value: 'odpt:destinationStation',width: '50'},
        {text: '次列番',value: 'odpt:nextTrainTimetable',width: '50'},
        {text: '列車時刻表データ',value: 'odpt:trainTimetableObject',width: '550'},
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