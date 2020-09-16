<template>
    <v-app id="inspire">
      <v-main>
      <!-- ローディング -->
      <!-- <div v-if="DispLoading" id="DispLoading">
        <v-progress-circular indeterminate />
      </div> -->
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6" md="3">
            <v-text-field v-model="editedItem.Srid" label="車種ID" ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Unktymd" label="運用確定日"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field v-model="editedItem.Syas" label="車種名"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6" sm="6" md="4">
              <v-text-field v-model="editedItem.Nymd" label="新製日"></v-text-field>
            </v-col>
            <v-col cols="6" sm="6" md="4">
              <v-text-field v-model="editedItem.Dymd" label="廃車日"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Maker" label="メーカー"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Fymd" label="有効日From"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Tymd" label="有効日To"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.SyoA" label="所属A"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.SyoB" label="所属B"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.SyoC" label="所属C"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Hikasho" label="配置箇所"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Hisisya" label="配置支社"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Tnkojou" label="担当工場"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Tnsisya" label="担当支社"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Srgrp" label="車両グループ"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Keis" label="系式"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Katas" label="形式"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.Khhens" label="基本編成"></v-text-field>
            </v-col>
          </v-row>

        </v-container>
      </v-main>
    </v-app>
</template>

<script>
// import firebase from "firebase/app"
import Vuetify from "vuetify";

export default {
  vuetify: new Vuetify(),
  props:{
    headers:{},
		editedItem: {}
  },
  created(){
    console.log(this.editedItem);
    console.log(this.editedItem.Srid);
    console.log(this.editedItem2);
    console.log(this.editedItem2.Srid);
  },
  data(){
		return {
        editedItem2: [],
    };
  },
  
}
</script>

<style lang="scss" scoped>

</style>