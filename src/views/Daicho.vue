<template>
  <div id="MasterSyaryou">
    <v-app id="inspire">
      <!-- ローディング -->
      <div v-if="DispLoading" id="DispLoading">
        <v-progress-circular indeterminate />
      </div>

      <!-- 車両台帳一覧 -->
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
            <v-toolbar-title>車両台帳</v-toolbar-title>
            <!-- ソート -->
            <v-spacer></v-spacer>
            
            <!-- 検索 -->
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <!-- 区切り線 -->
            <v-divider class="mx-4" inset vertical ></v-divider>

            <!-- 追加ボタン(+) -->
            <v-spacer></v-spacer>
            <v-btn class="mx-2" fab dark color="blue" @click="editItem(defaultItem)">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>

          </v-toolbar>
        </template>

        <!-- 表示、修正、削除 -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="viewItem(item)" >mdi-magnify</v-icon>
          <v-icon small class="mr-2" @click="editItem(item)" >mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)" > mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>

      <!-- エディットダイアログ -->
      <v-dialog v-model="viewdialogshow"  max-width="90%" max-height="60%">
        <form-daichoview :editedItem=editedItem :editedItem2=headers></form-daichoview>
      </v-dialog>
      
      <!-- エディットダイアログ -->
      <v-dialog v-model="editdialogshow"  max-width="90%" max-height="60%">
        <form-daichoedit :editedItem=editedItem :editedItem2=headers></form-daichoedit>
      </v-dialog>
      
    </v-app>
  </div>
</template>

<script>
import Vue from "vue";
import firebase from "firebase/app"
import Vuetify from "vuetify";
import DaichoEdit from "./DaichoEdit"
import DaichoView from "./DaichoView"

import Navi1 from '../components/Navi/NewCar/Navi1';
//  コンポーネントを登録
Vue.component("form-navi1", Navi1);
Vue.component("form-daichoedit", DaichoEdit);
Vue.component("form-daichoview", DaichoView);

export default {
  vuetify: new Vuetify(),
  data: () => ({
    DispLoading: true,
    dialog: false,
    viewdialogshow: false,
    editdialogshow: false,
    search: '',
    headers: [
      { text: '車両ID', align: 'start', value: 'Srid' },
      { text: '車種', value: 'Syas' },
      { text: '系式', value: 'Keis' },
      { text: '形式', value: 'Katas' },
      { text: '基本編成', value: 'Khhens' },
      { text: '基本号車', value: 'khgousya' },
      // { text: '新製日', value: 'Nymd' },
      // { text: '廃車日', value: 'Dymd' },
      // { text: '有効日From', value: 'Fymd' },
      // { text: '有効日To', value: 'Tymd' },
      // { text: 'メーカー', value: 'Maker' },
      // { text: '運用確定日', value: 'Unktymd' },
      { text: '所属A', value: 'SyoA' },
      { text: '所属B', value: 'SyoB' },
      { text: '所属C', value: 'SyoC' },
      { text: '配置箇所', value: 'Hikasho' },
      // { text: '配置支社', value: 'Hisisya' },
      // { text: '担当工場', value: 'Tnkojou' },
      // { text: '担当支社', value: 'Tnsisya' },
      // { text: '車両グループ', value: 'Srgrp' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      Srid: null,
      Syas: null,
      Nymd: null,
      Dymd: null,
      Fymd: null,
      Tymd: null,
      Maker: null,
      Unktymd: null,
      SyoA: null,
      SyoB: null,
      SyoC: null,
      Hikasho: null,
      Hisisya: null,
      Tnkojou: null,
      Tnsisya: null,
      Srgrp: null,
      Keis: null,
      Katas: null,
      Khhens: null,
      khgousya: null,
    },
    defaultItem: {
      Srid: null,
      Syas: null,
      Nymd: null,
      Dymd: null,
      Fymd: null,
      Tymd: null,
      Maker: null,
      Unktymd: null,
      SyoA: null,
      SyoB: null,
      SyoC: null,
      Hikasho: null,
      Hisisya: null,
      Tnkojou: null,
      Tnsisya: null,
      Srgrp: null,
      Keis: null,
      Katas: null,
      Khhens: null,
      khgousya: null,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    editdialogshow (val) {
      val || this.close()
    },
  },

  created () {
    this.initialize()
  },

  mounted () {
    setTimeout(() => {
      this.DispLoading = false;
    }, 500);
  },


  methods: {
    initialize () {
      //this.selFireBase();
      this.sampleData();
    },

    viewItem (item) {
      this.viewedIndex = this.desserts.indexOf(item)
      this.viewedItem = Object.assign({}, item)
      this.viewdialogshow = true
    },

    editItem (item) {
      console.log("aaa")
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editdialogshow = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      if(confirm('削除すると戻すことができません。本当に削除しますか?'))
      {
        if(!this.delFireBase(item)){
          alert("削除エラー");
          return false;
        }
        this.desserts.splice(index, 1)
      } 
    },
    close () {
      this.editdialogshow = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {//修正
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
        if(!this.updFireBase())
        {
          alert("更新エラー");
          return false;
        }
      } else {//新規
        if(!this.insFireBase()){
          alert("追加エラー");
          return false;
        }
        this.desserts.push(this.editedItem)
      }
      this.close()
    },

    selFireBase () {
      try {
        const db = firebase.firestore();
        db.collection('syasMaster')  
          .get()  
          .then(snapshot => {  
            snapshot.forEach(doc => {  
              let item = doc.data();
              item.id = doc.id;
              this.desserts.push(item);
            })  
          }) 
        return true;
      }
      catch(e)
      {
        console.log("catch");
        console.log(e);
        return false;
      }
    },
    updFireBase () {
      try {
        const db = firebase.firestore();
        console.log(this.editedItem.id);
        let dbData = db.collection('syasMaster').doc(this.editedItem.id)
        dbData.set({
          SyasID: this.editedItem.SyasID,
          SyasName: this.editedItem.SyasName
        })
        return true;
      }
      catch(e)
      {
        console.log("catch");
        console.log(e);
        return false;
      }
    },
    
    insFireBase () {
      try {
        const db = firebase.firestore();
        let dbData = db.collection('syasMaster');
        dbData
        .add({
          SyasID: this.editedItem.SyasID,
          SyasName: this.editedItem.SyasName,
        })
        .then(ref => {
          console.log('Add ID: ', ref.id);
        })
        return true;
      }
      catch(e)
      {
        console.log("catch");
        console.log(e);
        return false;
      }
    },
    
    delFireBase (item) {
      try {
        const db = firebase.firestore();
        let dbData = db.collection('syasMaster').doc(item.id)
        dbData.delete();
        return true;
      }
      catch(e)
      {
        console.log("catch");
        console.log(e);
        return false;
      }
    },

    sampleData () {
      this.desserts = [
        {
          Srid: 1,
          Syas: 2,
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          SyoA: "第1箇所",
          SyoB: "第2箇所",
          SyoC: "第3箇所",
          Hikasho: null,
          Hisisya: null,
          Tnkojou: null,
          Tnsisya: null,
          Srgrp: null,
          Keis: "235系",
          Katas: "Tc",
          Khhens: "01",
          khgousya: 11,
        },
        {
          Srid: 2,
          Syas: 2,
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          SyoA: "第1箇所",
          SyoB: "第2箇所",
          SyoC: "第3箇所",
          Hikasho: null,
          Hisisya: null,
          Tnkojou: null,
          Tnsisya: null,
          Srgrp: null,
          Keis: "235系",
          Katas: "T",
          Khhens: "01",
          khgousya: 10,
          
        },
        {
          Srid: 3,
          Syas: 2,
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          SyoA: "第1箇所",
          SyoB: "第2箇所",
          SyoC: "第3箇所",
          Hikasho: null,
          Hisisya: null,
          Tnkojou: null,
          Tnsisya: null,
          Srgrp: null,
          Keis: "235系",
          Katas: "M1",
          Khhens: "01",
          khgousya: 9,
        },
        {
          Srid: 4,
          Syas: 2,
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          SyoA: "第1箇所",
          SyoB: "第2箇所",
          SyoC: "第3箇所",
          Hikasho: null,
          Hisisya: null,
          Tnkojou: null,
          Tnsisya: null,
          Srgrp: null,
          Keis: "235系",
          Katas: "M2",
          Khhens: "01",
          khgousya: 8,
        },
        {
          Srid: 5,
          Syas: 2,
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          SyoA: "第1箇所",
          SyoB: "第2箇所",
          SyoC: "第3箇所",
          Hikasho: null,
          Hisisya: null,
          Tnkojou: null,
          Tnsisya: null,
          Srgrp: null,
          Keis: "235系",
          Katas: "T'",
          Khhens: "01",
          khgousya: 7,
        },
        {
          Srid: 6,
          Syas: 2,
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          SyoA: "第1箇所",
          SyoB: "第2箇所",
          SyoC: "第3箇所",
          Hikasho: null,
          Hisisya: null,
          Tnkojou: null,
          Tnsisya: null,
          Srgrp: null,
          Keis: "235系",
          Katas: "M1",
          Khhens: "01",
          khgousya: 6,
        },
        {
          Srid: 7,
          Syas: 2,
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          SyoA: "第1箇所",
          SyoB: "第2箇所",
          SyoC: "第3箇所",
          Hikasho: null,
          Hisisya: null,
          Tnkojou: null,
          Tnsisya: null,
          Srgrp: null,
          Keis: "235系",
          Katas: "M2",
          Khhens: "01",
          khgousya: 5,
        },
        {
          Srid: 8,
          Syas: 2,
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          SyoA: "第1箇所",
          SyoB: "第2箇所",
          SyoC: "第3箇所",
          Hikasho: null,
          Hisisya: null,
          Tnkojou: null,
          Tnsisya: null,
          Srgrp: null,
          Keis: "235系",
          Katas: "T",
          Khhens: "01",
          khgousya: 4,
        },
        {
          Srid: 9,
          Syas: 2,
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          SyoA: "第1箇所",
          SyoB: "第2箇所",
          SyoC: "第3箇所",
          Hikasho: null,
          Hisisya: null,
          Tnkojou: null,
          Tnsisya: null,
          Srgrp: null,
          Keis: "235系",
          Katas: "M1",
          Khhens: "01",
          khgousya: 3,
        },
        {
          Srid: 10,
          Syas: 2,
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          SyoA: "第1箇所",
          SyoB: "第2箇所",
          SyoC: "第3箇所",
          Hikasho: null,
          Hisisya: null,
          Tnkojou: null,
          Tnsisya: null,
          Srgrp: null,
          Keis: "235系",
          Katas: "M2",
          Khhens: "01",
          khgousya: 2,
        },
        {
          Srid: 11,
          Syas: 2,
          Nymd: "2020-01-01",
          Dymd: null,
          Fymd: "2020-01-01",
          Tymd: null,
          Maker: "Aメーカー",
          Unktymd: null,
          SyoA: "第1箇所",
          SyoB: "第2箇所",
          SyoC: "第3箇所",
          Hikasho: null,
          Hisisya: null,
          Tnkojou: null,
          Tnsisya: null,
          Srgrp: null,
          Keis: "235系",
          Katas: "M2",
          Khhens: "01",
          khgousya: 1,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
#DispLoading {
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  z-index:9999;
  position: absolute;
  background-color: rgba(#000, 0.5);
}
</style>