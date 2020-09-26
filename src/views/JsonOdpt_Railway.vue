<template>

    <!-- <v-data-table :headers="headers" :items="dataj" :search="search" :custom-filter="customFilter"> -->
    <v-data-table :headers="headers" :items="dataj" :search="search">

    <!-- ヘッダー -->
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>路線情報</v-toolbar-title>
        <!-- 検索 -->
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line outlined rounded hide-details></v-text-field>
      </v-toolbar>
    </template>

    
    <template v-slot:[`item.odpt:railwayTitle`]="{ item }">
      <div v-for="(i) in item" :key="i">{{ i.en }}{{ i.ja }}</div>
    </template>
    <template v-slot:[`item.odpt:stationOrder`]="{ item }">
      <div v-for="(i) in item" :key="i">
        <div v-for="(a) in i" :key="a">
          <!-- {{a["odpt:index"]}} {{a["odpt:station"]}}  -->
          <div v-for="(w) in a" :key="w">
            {{w.ja}}
          </div>
        </div>
      </div>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';
import testj from '@/assets/odpt_Railway.json'

export default {
  // props: ['items'],
  data () {
    return {
      dataj: testj,
      search: '',
      headers: [
        // {text: 'ID',value: '@id',width: '50' },
        // {text: 'type',value: '@type',width: '50' },
        {text: 'データ生成時刻',value: 'dc:date',width: '50' },
        // {text: 'コンテンツ',value: '@context',width: '50' },
        {text: '線区',value: 'dc:title',width: '150' },
        {text: '固有識別子',value: 'owl:sameAs',width: '50' },
        {text: '事業者ID',value: 'odpt:operator',width: '50' },
        {text: '線区',value: 'odpt:railwayTitle',width: '50' },
        {text: '駅順序',value: 'odpt:stationOrder',width: '150' },
        {text: '上り',value: 'odpt:ascendingRailDirection',width: '50' },
        {text: '下り',value: 'odpt:descendingRailDirection',width: '50' },
      ],
      // itemsa: [
      //   {
      // [{"@id":"urn:ucode:_00001C00000000000001000003100DF9"
      // ,"@type":"odpt:Railway"
      // ,"dc:date":"2020-05-07T09:00:00+09:00"
      // ,"@context":"http://vocab.odpt.org/context_odpt.jsonld"
      // ,"dc:title":"常磐線"
      // ,"owl:sameAs":"odpt.Railway:JR-East.Joban"
      // ,"odpt:operator":"odpt.Operator:JR-East"
      // ,"odpt:railwayTitle":{"en":"Joban Line","ja":"常磐線"}
      // ,"odpt:stationOrder":[{"odpt:index":1,"odpt:station":"odpt.Station:JR-East.Joban.Toride","odpt:stationTitle":{"en":"Toride","ja":"取手"}},
      //                       {"odpt:index":2,"odpt:station":"odpt.Station:JR-East.Joban.Fujishiro","odpt:stationTitle":{"en":"Fujishiro","ja":"藤代"}},
      //                       {"odpt:index":3,"odpt:station":"odpt.Station:JR-East.Joban.Ryugasakishi","odpt:stationTitle":{"en":"Ryugasakishi","ja":"龍ケ崎市"}},
      //                       {"odpt:index":4,"odpt:station":"odpt.Station:JR-East.Joban.Ushiku","odpt:stationTitle":{"en":"Ushiku","ja":"牛久"}},
      //                       {"odpt:index":5,"odpt:station":"odpt.Station:JR-East.Joban.Hitachinoushiku","odpt:stationTitle":{"en":"Hitachinoushiku","ja":"ひたち野うしく"}},
      //                       {"odpt:index":6,"odpt:station":"odpt.Station:JR-East.Joban.Arakawaoki","odpt:stationTitle":{"en":"Arakawaoki","ja":"荒川沖"}},
      //                       {"odpt:index":7,"odpt:station":"odpt.Station:JR-East.Joban.Tsuchiura","odpt:stationTitle":{"en":"Tsuchiura","ja":"土浦"}},
      //                       {"odpt:index":8,"odpt:station":"odpt.Station:JR-East.Joban.Kandatsu","odpt:stationTitle":{"en":"Kandatsu","ja":"神立"}},
      //                       {"odpt:index":9,"odpt:station":"odpt.Station:JR-East.Joban.Takahama","odpt:stationTitle":{"en":"Takahama","ja":"高浜"}},
      //                       {"odpt:index":10,"odpt:station":"odpt.Station:JR-East.Joban.Ishioka","odpt:stationTitle":{"en":"Ishioka","ja":"石岡"}},
      //                       {"odpt:index":11,"odpt:station":"odpt.Station:JR-East.Joban.Hatori","odpt:stationTitle":{"en":"Hatori","ja":"羽鳥"}},
      //                       {"odpt:index":12,"odpt:station":"odpt.Station:JR-East.Joban.Iwama","odpt:stationTitle":{"en":"Iwama","ja":"岩間"}},
      //                       {"odpt:index":13,"odpt:station":"odpt.Station:JR-East.Joban.Tomobe","odpt:stationTitle":{"en":"Tomobe","ja":"友部"}},
      //                       {"odpt:index":14,"odpt:station":"odpt.Station:JR-East.Joban.Uchihara","odpt:stationTitle":{"en":"Uchihara","ja":"内原"}},
      //                       {"odpt:index":15,"odpt:station":"odpt.Station:JR-East.Joban.Akatsuka","odpt:stationTitle":{"en":"Akatsuka","ja":"赤塚"}},
      //                       {"odpt:index":16,"odpt:station":"odpt.Station:JR-East.Joban.Kairakuen","odpt:stationTitle":{"en":"Kairakuen","ja":"偕楽園"}},
      //                       {"odpt:index":17,"odpt:station":"odpt.Station:JR-East.Joban.Mito","odpt:stationTitle":{"en":"Mito","ja":"水戸"}},
      //                       {"odpt:index":18,"odpt:station":"odpt.Station:JR-East.Joban.Katsuta","odpt:stationTitle":{"en":"Katsuta","ja":"勝田"}},
      //                       {"odpt:index":19,"odpt:station":"odpt.Station:JR-East.Joban.Sawa","odpt:stationTitle":{"en":"Sawa","ja":"佐和"}},
      //                       {"odpt:index":20,"odpt:station":"odpt.Station:JR-East.Joban.Tokai","odpt:stationTitle":{"en":"Tokai","ja":"東海"}},
      //                       {"odpt:index":21,"odpt:station":"odpt.Station:JR-East.Joban.Omika","odpt:stationTitle":{"en":"Omika","ja":"大甕"}},
      //                       {"odpt:index":22,"odpt:station":"odpt.Station:JR-East.Joban.HitachiTaga","odpt:stationTitle":{"en":"Hitachi-Taga","ja":"常陸多賀"}},
      //                       {"odpt:index":23,"odpt:station":"odpt.Station:JR-East.Joban.Hitachi","odpt:stationTitle":{"en":"Hitachi","ja":"日立"}},
      //                       {"odpt:index":24,"odpt:station":"odpt.Station:JR-East.Joban.Ogitsu","odpt:stationTitle":{"en":"Ogitsu","ja":"小木津"}},
      //                       {"odpt:index":25,"odpt:station":"odpt.Station:JR-East.Joban.Juo","odpt:stationTitle":{"en":"Juo","ja":"十王"}},
      //                       {"odpt:index":26,"odpt:station":"odpt.Station:JR-East.Joban.Takahagi","odpt:stationTitle":{"en":"Takahagi","ja":"高萩"}},
      //                       {"odpt:index":27,"odpt:station":"odpt.Station:JR-East.Joban.MinamiNakago","odpt:stationTitle":{"en":"Minami-Nakago","ja":"南中郷"}},
      //                       {"odpt:index":28,"odpt:station":"odpt.Station:JR-East.Joban.Isohara","odpt:stationTitle":{"en":"Isohara","ja":"磯原"}},
      //                       {"odpt:index":29,"odpt:station":"odpt.Station:JR-East.Joban.Otsuko","odpt:stationTitle":{"en":"Otsuko","ja":"大津港"}},
      //                       {"odpt:index":30,"odpt:station":"odpt.Station:JR-East.Joban.Nakoso","odpt:stationTitle":{"en":"Nakoso","ja":"勿来"}},
      //                       {"odpt:index":31,"odpt:station":"odpt.Station:JR-East.Joban.Ueda","odpt:stationTitle":{"en":"Ueda","ja":"植田"}},
      //                       {"odpt:index":32,"odpt:station":"odpt.Station:JR-East.Joban.Izumi","odpt:stationTitle":{"en":"Izumi","ja":"泉"}},
      //                       {"odpt:index":33,"odpt:station":"odpt.Station:JR-East.Joban.Yumoto","odpt:stationTitle":{"en":"Yumoto","ja":"湯本"}},
      //                       {"odpt:index":34,"odpt:station":"odpt.Station:JR-East.Joban.Uchigo","odpt:stationTitle":{"en":"Uchigo","ja":"内郷"}},
      //                       {"odpt:index":35,"odpt:station":"odpt.Station:JR-East.Joban.Iwaki","odpt:stationTitle":{"en":"Iwaki","ja":"いわき"}},
      //                       {"odpt:index":36,"odpt:station":"odpt.Station:JR-East.Joban.Kusano","odpt:stationTitle":{"en":"Kusano","ja":"草野"}},
      //                       {"odpt:index":37,"odpt:station":"odpt.Station:JR-East.Joban.Yotsukura","odpt:stationTitle":{"en":"Yotsukura","ja":"四ツ倉"}},
      //                       {"odpt:index":38,"odpt:station":"odpt.Station:JR-East.Joban.Hisanohama","odpt:stationTitle":{"en":"Hisanohama","ja":"久ノ浜"}},
      //                       {"odpt:index":39,"odpt:station":"odpt.Station:JR-East.Joban.Suetsugi","odpt:stationTitle":{"en":"Suetsugi","ja":"末続"}},
      //                       {"odpt:index":40,"odpt:station":"odpt.Station:JR-East.Joban.Hirono","odpt:stationTitle":{"en":"Hirono","ja":"広野"}},
      //                       {"odpt:index":41,"odpt:station":"odpt.Station:JR-East.Joban.JVillage","odpt:stationTitle":{"en":"J-Village","ja":"Ｊヴィレッジ"}},
      //                       {"odpt:index":42,"odpt:station":"odpt.Station:JR-East.Joban.Kido","odpt:stationTitle":{"en":"Kido","ja":"木戸"}},
      //                       {"odpt:index":43,"odpt:station":"odpt.Station:JR-East.Joban.Tatsuta","odpt:stationTitle":{"en":"Tatsuta","ja":"竜田"}},
      //                       {"odpt:index":44,"odpt:station":"odpt.Station:JR-East.Joban.Tomioka","odpt:stationTitle":{"en":"Tomioka","ja":"富岡"}},
      //                       {"odpt:index":45,"odpt:station":"odpt.Station:JR-East.Joban.Yonomori","odpt:stationTitle":{"en":"Yonomori","ja":"夜ノ森"}},
      //                       {"odpt:index":46,"odpt:station":"odpt.Station:JR-East.Joban.Ono","odpt:stationTitle":{"en":"Ono","ja":"大野"}},
      //                       {"odpt:index":47,"odpt:station":"odpt.Station:JR-East.Joban.Futaba","odpt:stationTitle":{"en":"Futaba","ja":"双葉"}},
      //                       {"odpt:index":48,"odpt:station":"odpt.Station:JR-East.Joban.Namie","odpt:stationTitle":{"en":"Namie","ja":"浪江"}},
      //                       {"odpt:index":49,"odpt:station":"odpt.Station:JR-East.Joban.Momouchi","odpt:stationTitle":{"en":"Momouchi","ja":"桃内"}},
      //                       {"odpt:index":50,"odpt:station":"odpt.Station:JR-East.Joban.Odaka","odpt:stationTitle":{"en":"Odaka","ja":"小高"}},
      //                       {"odpt:index":51,"odpt:station":"odpt.Station:JR-East.Joban.IwakiOta","odpt:stationTitle":{"en":"Iwaki-Ota","ja":"磐城太田"}},
      //                       {"odpt:index":52,"odpt:station":"odpt.Station:JR-East.Joban.Haranomachi","odpt:stationTitle":{"en":"Haranomachi","ja":"原ノ町"}},
      //                       {"odpt:index":53,"odpt:station":"odpt.Station:JR-East.Joban.Kashima","odpt:stationTitle":{"en":"Kashima","ja":"鹿島"}},
      //                       {"odpt:index":54,"odpt:station":"odpt.Station:JR-East.Joban.Nittaki","odpt:stationTitle":{"en":"Nittaki","ja":"日立木"}},
      //                       {"odpt:index":55,"odpt:station":"odpt.Station:JR-East.Joban.Soma","odpt:stationTitle":{"en":"Soma","ja":"相馬"}},
      //                       {"odpt:index":56,"odpt:station":"odpt.Station:JR-East.Joban.Komagamine","odpt:stationTitle":{"en":"Komagamine","ja":"駒ケ嶺"}},
      //                       {"odpt:index":57,"odpt:station":"odpt.Station:JR-East.Joban.Shinchi","odpt:stationTitle":{"en":"Shinchi","ja":"新地"}},
      //                       {"odpt:index":58,"odpt:station":"odpt.Station:JR-East.Joban.Sakamoto","odpt:stationTitle":{"en":"Sakamoto","ja":"坂元"}},
      //                       {"odpt:index":59,"odpt:station":"odpt.Station:JR-East.Joban.Yamashita","odpt:stationTitle":{"en":"Yamashita","ja":"山下"}},
      //                       {"odpt:index":60,"odpt:station":"odpt.Station:JR-East.Joban.Hamayoshida","odpt:stationTitle":{"en":"Hamayoshida","ja":"浜吉田"}},
      //                       {"odpt:index":61,"odpt:station":"odpt.Station:JR-East.Joban.Watari","odpt:stationTitle":{"en":"Watari","ja":"亘理"}},
      //                       {"odpt:index":62,"odpt:station":"odpt.Station:JR-East.Joban.Okuma","odpt:stationTitle":{"en":"Okuma","ja":"逢隈"}},
      //                       {"odpt:index":63,"odpt:station":"odpt.Station:JR-East.Joban.Iwanuma","odpt:stationTitle":{"en":"Iwanuma","ja":"岩沼"}},
      //                       {"odpt:index":64,"odpt:station":"odpt.Station:JR-East.Joban.Tatekoshi","odpt:stationTitle":{"en":"Tatekoshi","ja":"館腰"}},
      //                       {"odpt:index":65,"odpt:station":"odpt.Station:JR-East.Joban.Natori","odpt:stationTitle":{"en":"Natori","ja":"名取"}},
      //                       {"odpt:index":66,"odpt:station":"odpt.Station:JR-East.Joban.MinamiSendai","odpt:stationTitle":{"en":"Minami-Sendai","ja":"南仙台"}},
      //                       {"odpt:index":67,"odpt:station":"odpt.Station:JR-East.Joban.Taishido","odpt:stationTitle":{"en":"Taishido","ja":"太子堂"}},
      //                       {"odpt:index":68,"odpt:station":"odpt.Station:JR-East.Joban.Nagamachi","odpt:stationTitle":{"en":"Nagamachi","ja":"長町"}},
      //                       {"odpt:index":69,"odpt:station":"odpt.Station:JR-East.Joban.Sendai","odpt:stationTitle":{"en":"Sendai","ja":"仙台"}}]
      // ,"odpt:ascendingRailDirection":"odpt.RailDirection:Outbound"
      // ,"odpt:descendingRailDirection":"odpt.RailDirection:Inbound"},
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
    axios.get('../assets/JsonOdpt_Railway.json',
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