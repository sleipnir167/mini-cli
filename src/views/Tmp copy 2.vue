<template>
  <v-app id="inspire">
    <v-container fluid>
      <!-- <v-row :align="alignment" :justify="justify" class="grey lighten-5" style="height: 300px;" >
        <v-col cols="12" sm="6" md="4" lg="3">
            <v-card class="ma-3 pa-6" outlined tile >
              Column
            </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
        </v-col>
      </v-row> -->
      <v-row justify="start" align-content="start">
        <v-col cols="12" sm="6" md="4" lg="3" v-for="Infoa in Infoas" :key="Infoa.id">
          <v-card height="380px" class="ma-3">
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
      <v-row :align="alignment" :justify="justify" class="green lighten-5" style="height: 300px;" >
        <v-col cols="12" sm="6" md="4" lg="3">
            <v-card class="ma-3 pa-6" outlined tile >
              Column
            </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
        </v-col>
      </v-row>
      <v-row :align="alignment" :justify="justify" class="green lighten-5" style="height: 300px;" >
        <v-col cols="12" sm="6" md="4" lg="3">
            <v-card class="ma-3 pa-6" outlined tile >
              Column
            </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  //  インポート
  import Vue from 'vue'
  import ViewDayInfo from '../components/Parts/ViewDayInfo'
  import GridYM from '../components/Parts/GridYM'
  import MoveYM from '../components/Parts/MoveYM'
  import InputDayInfo from '../components/Parts/InputDayInfo'
  import SyasCombobox from '../../src/components/Master/SyasCombo'
  import FBAccess from '../../src/mixins/FireBaseAccess'

  export default {
    mixins: [FBAccess],
    FBSyasData:[],
    FBitem:null,
    created(){
      console.log("temp:created")
      this.FBSyasData = this.selSyasMasteritem()
      console.log(this.FBSyasData)
      this.FBitem = this.FBSyasData.length
      console.log(this.FBitem)
    },
    data () {
      return{
      }
    },
    mounted() {
      console.log('Two')
      this.$nextTick(() => {
        console.log('three')
        
      });
    }
  }
  //  コンポーネントを登録
  Vue.component('temp-viewdayinfo', ViewDayInfo)
  Vue.component('temp-GridYM', GridYM)
  Vue.component('temp-MoveYM', MoveYM)
  Vue.component('temp-InputDayInfo', InputDayInfo)
  Vue.component('temp-SyasCombobox', SyasCombobox)

</script>


