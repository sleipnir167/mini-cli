<template>
  <div id="Info">
    <v-app id="inspire">
      <!-- 全体お知らせ -->
      <!-- 新車情報 -->
      <v-container fluid>
        <v-row>
          <v-col class="row-eq-height pa-1" cols="12" sm="6" md="6" lg="4" v-for="Infoa in Infoas" :key="Infoa.id">
            <v-card class="rounded-card">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="Infoa.src"
              >
                <v-card-title>{{Infoa.title}}</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">{{Infoa.subtitle}}</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>{{Infoa.text}}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="blue" text >{{Infoa.btntext}}</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- 2段目お知らせ -->
      <v-container fluid>
        <v-row>
          <!-- 管理者からのお知らせ -->
          <v-col class="row-eq-height pa-1" cols="12" sm="12" md="12" lg="4">
            <v-card>
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
          </v-col>

          <!-- システムからのお知らせ -->
          <v-col class="row-eq-height pa-1" cols="12" sm="12" md="12" lg="8">
            <v-card>
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
          </v-col>
        </v-row>

      </v-container>

      <!-- その他お知らせ -->
      <!-- <v-row justify="start" align-content="start">
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
      </v-row> -->

      <v-conteiner>
        <v-row>
          <v-col cols="12">
            <form-calender></form-calender>
          </v-col>
        </v-row>
      </v-conteiner>

    </v-app>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import DaichoEdit from "./DaichoEdit"

import Navi1 from '../components/Navi/NewCar/Navi1';
import Calender from '../components/Parts/Calender';

//  コンポーネントを登録
Vue.component("form-navi1", Navi1);
Vue.component("form-daichoedit", DaichoEdit);
Vue.component("form-calender", Calender);

export default {
  vuetify: new Vuetify(),
  data: () => ({
    DispLoading: true,
    dialog: false,
    search: '',
    Infoas: [
      { id: 1 , src: '/Picture/yamate1.jpg', title: '新車情報', subtitle: '新車投入のお知らせ', text: '9/15日にA箇所にEXX系の新車投入が行われます。画像転載元：https://www.photock.jp/list/r/train/', btntext: '詳細'},
      { id: 2 , src: '/Picture/SL1.jpg', title: '運行情報', subtitle: 'SL運転取りやめのお知らせ', text: '大雨のため大幅な遅れや運転見合わせなどが予想されるため、９／１２（土）運転予定のＳＬつきましては運転を取りやめます。', btntext: '詳細'},
      { id: 3 , src: '/Picture/caution-01.png', title: '', subtitle: '一斉点検のお知らせ', text: 'M月D日の定期検査で台車のディスクブレーキ装置取付部にヒビが見つかりました。型番ZXXXXを対象として一斉点検を行います。', btntext: '詳細'},
    ],
    headers: [
      { text: 'No', value: '新車情報' },
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
        title: 'あれのおしらせ',
        artist: 'あれはあれです。',
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
  overflow-y:scroll;
  width:100%;
  height:100%;
  margin: 5px;
}

#Info > .card {
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
}

/* 同じ高さにする */
.row-eq-height {
    display: flex;
    flex-wrap: wrap;
}

.rounded-card {
  border-radius:15px;
}
</style>
