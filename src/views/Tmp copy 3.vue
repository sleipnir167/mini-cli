
<template>
  <v-app id="inspire">
    <v-container fluid>
      <v-row>
        <v-col>
          <a id="aaa" class="mydrag" href="http://example.com" >このリンクをドラッグ！！</a>
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
  import {t3m1} from '../myscript/aone.js'


  export default {
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
      return {
        msg: 'you are ok.'
      }
    },
    mounted() {
      t3m1()
    }
  }
  //  コンポーネントを登録
  Vue.component('temp-viewdayinfo', ViewDayInfo)
  Vue.component('temp-GridYM', GridYM)
  Vue.component('temp-MoveYM', MoveYM)
  Vue.component('temp-InputDayInfo', InputDayInfo)
  Vue.component('temp-SyasCombobox', SyasCombobox)

</script>




