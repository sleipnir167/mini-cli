<template>
  <div id="Info">
    <!-- 全体お知らせ -->
    <!-- 新車情報 -->
    <v-row justify="start" align-content="start">
      <v-card max-width="400" class="ma-3">
        <v-img
          class="white--text align-end"
          height="200px"
          src="../Picture/yamate1.jpg"
        >
          <v-card-title>新車情報</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">新車投入のお知らせ</v-card-subtitle>
        <v-card-text class="text--primary">
          <div>9/15日にA箇所にEXX系の新車投入が行われます。</div>
          <div>画像転載元：https://www.photock.jp/list/r/train/</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" text >詳細</v-btn>
        </v-card-actions>
      </v-card>

      <!-- 運行情報 -->
      <v-card max-width="400" class="ma-3">
        <v-img
          class="white--text align-end"
          height="200px"
          src="../Picture/SL1.jpg"
        >
          <v-card-title>運行情報</v-card-title>
        </v-img>
    
        <v-card-subtitle class="pb-0">SL運転取りやめのお知らせ</v-card-subtitle>
    
        <v-card-text class="text--primary">
          <div>大雨のため大幅な遅れや運転見合わせなどが予想されるため、９／１２（土）運転予定のＳＬつきましては運転を取りやめます。</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" text >詳細</v-btn>
        </v-card-actions>
      </v-card>

      <!-- 警告 -->
      <v-card max-width="400" class="ma-3">
        <v-img
          class="white--text align-end"
          height="200px"
          contain
          src="../Picture/caution-01.png"
        >
          <v-card-title></v-card-title>
        </v-img>
    
        <v-card-subtitle class="pb-0">一斉点検のお知らせ</v-card-subtitle>
    
        <v-card-text class="text--primary">
          <div>M月D日の定期検査でＥXX系に使用されている台車のディスクブレーキ装置取付部にヒビが見つかりました。</div>
          <div>型番ZXXXX-の100番台を対象として一斉点検を行います。</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" text >詳細</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>

    <!-- 2段目お知らせ -->
    <v-row justify="start" align-content="start">
    <!-- 管理者からのお知らせ -->
      <v-card max-width="400" class="ma-3">
        <!-- <v-system-bar color="pink darken-2" dark >
          <v-spacer></v-spacer>
          <v-icon>mdi-window-minimize</v-icon>
          <v-icon>mdi-window-maximize</v-icon>
          <v-icon>mdi-close</v-icon>
        </v-system-bar> -->
    
        <v-app-bar dark color="pink" >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>管理者からのお知らせ</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-app-bar>
    
        <v-container>
          <v-row dense>
            <v-col v-for="(item, i) in items" :key="i" cols="12" >
              <v-card :color="item.color" dark >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="headline" v-text="item.title" ></v-card-title>
                    <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <!-- システムからのお知らせ -->
      <v-card class="ma-3">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          :sort-by="['Srid']"
          :sort-desc="[false, true]"
          multi-sort
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>システムからのお知らせ</v-toolbar-title>
              <!-- ソート -->
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>

              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="90%" max-height="60%">

              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              outlined
              fab 
              small
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-magnify
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-row>

    <!-- その他お知らせ -->
    <v-row justify="start" align-content="start">
      <v-card max-width="344" class="ma-3">
        <v-card-text>
          <div>その他お知らせ</div>
          <p class="display-1 text--primary">作業規制期間</p>
          <p>10/11〜11〜16</p>
          <div class="text--primary">イベントのため作業規制期間となります。</div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="blue">詳細</v-btn>
        </v-card-actions>
      </v-card>

      <v-card max-width="344" class="ma-3">
        <v-card-text>
          <div>その他お知らせ</div>
          <p class="display-1 text--primary">あれのお知らせ</p>
          <p>あれです</p>
          <div class="text--primary">あれです</div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="blue">詳細</v-btn>
        </v-card-actions>
      </v-card>

      <v-card max-width="344" class="ma-3">
        <v-card-text>
          <div>その他お知らせ</div>
          <p class="display-1 text--primary">それのお知らせ</p>
          <p>それです</p>
          <div class="text--primary">それです</div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="blue">詳細</v-btn>
        </v-card-actions>
      </v-card>


      <!-- 中央領域 -->
      <v-card
        class="card text-white bg-primary m-2 d-inline-block"
        style="max-width: 20rem;"
      >
        <div class="card-header">あれのおしらせ</div>
        <div class="card-body">
          <p class="card-title">あれがあれです。</p>
          <p class="card-text">あれしてください。</p>
        </div>
      </v-card>
      <v-card
        class="card text-white bg-dark m-2 d-inline-block"
        style="max-width: 20rem;"
      >
        <div class="card-header">それのおしらせ</div>
        <div class="card-body">
          <p class="card-title">それがそれです。</p>
          <p class="card-text">それしてください。</p>
        </div>
      </v-card>

      <v-card
        class="card text-black alert-primary m-2 d-inline-block"
        style="max-width: 20rem;"
      >
        <div class="card-header">あれのおしらせ</div>
        <div class="card-body">
          <p class="card-title">あれがあれです。</p>
          <p class="card-text">あれしてください。</p>
        </div>
      </v-card>
      <v-card
        class="card text-black alert-dark m-2 d-inline-block"
        style="max-width: 20rem;"
      >
        <div class="card-header">それのおしらせ</div>
        <div class="card-body">
          <p class="card-title">それがそれです。</p>
          <p class="card-text">それしてください。</p>
        </div>
      </v-card>
    </v-row>

  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import DaichoEdit from "./DaichoEdit"

import Navi1 from '../components/Navi/NewCar/Navi1';
//  コンポーネントを登録
Vue.component("form-navi1", Navi1);
Vue.component("form-daichoedit", DaichoEdit);

export default {
  vuetify: new Vuetify(),
  data: () => ({
    DispLoading: true,
    dialog: false,
    search: '',
    headers: [
      { text: 'No', value: 'No' },
      { text: '車両ID', value: 'Srid' },
      { text: '車種', value: 'Syas' },
      { text: '系式', value: 'Keis' },
      { text: '形式', value: 'Katas' },
      { text: '基本編成', value: 'Khhens' },
      { text: '基本号車', value: 'khgousya' },
      { text: '車両', value: 'sgo' },
      { text: '記事', value: 'kiji' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    items: [
      {
        color: '#1F7087',
        // src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: '作業規制期間のお知らせ',
        artist: '10/11〜11/16はイベントのため作業規制となります。',
      },
      {
        color: '#1F11B7',
        // src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: '一斉点検のおしらせ',
        artist: '通達の通りEXX系の台車について順次点検を行います。日程は別途調整します。',
      },
      {
        color: '#952175',
        // src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'それのおしらせ',
        artist: 'それです。',
      },
    ],
  }),

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.sampleData();
    },

    sampleData () {
      this.desserts = [
        {
          No: 1,
          Srid: 1,
          Syas: "EC",
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          sgo: "TC 101 0001",
          kiji: "9月11日にA保全が検査切れが発生します。",
          Srgrp: null,
          Keis: "235系",
          Katas: "Tc",
          Khhens: "01",
          khgousya: 1,
        },
        {
          No: 2,
          Srid: 2,
          Syas: "EC",
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          sgo: "M  101 0001",
          kiji: "9月11日にA保全が検査切れが発生します。",
          Srgrp: null,
          Keis: "235系",
          Katas: "T",
          Khhens: "01",
          khgousya: 2,
          
        },
        {
          No: 3,
          Srid: 3,
          Syas: "EC",
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          sgo: "M' 101 0001",
          kiji: "9月11日にA保全が検査切れが発生します。",
          Srgrp: null,
          Keis: "235系",
          Katas: "M1",
          Khhens: "01",
          khgousya: 3,
        },
        {
          No: 4,
          Srid: 4,
          Syas: "EC",
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          sgo: "TC' 101 0001",
          kiji: "仕業検査予定日です。",
          Srgrp: null,
          Keis: "235系",
          Katas: "M2",
          Khhens: "01",
          khgousya: 4,
        },
      ]
    },
  },
}
</script>

<style scoped>
#Info {
  background-color: #ebebeb;
  overflow:scroll;
  width:100%;
  height:100%;
  margin: 5px;
}

#Info > .card {
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
}

</style>
