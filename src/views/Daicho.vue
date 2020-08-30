<template>
  <div id="MasterSyaryou" class="kokoko">
    <v-app id="inspire">
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
            <v-dialog v-model="dialog" max-width="500px">

              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >New Item</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
    
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.SyasID" label="車種ID"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.SyasName" label="車種名"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
    
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
import firebase from "firebase/app"
import Vuetify from "vuetify";

export default {
  vuetify: new Vuetify(),
  data: () => ({
    dialog: false,
    search: '',
    headers: [
      { text: '車両ID', align: 'start', value: 'Srid' },
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
      
          Khhens: "01",
      khgousya: null,
    },
    defaultItem: {
      Srid: null,
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
      
          Khhens: "01",
      khgousya: null,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      //this.selFireBase();
      this.sampleData();
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
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
      this.dialog = false
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

</style>