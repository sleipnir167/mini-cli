<template>
  <div id="about">
    <h5>ViewDayInfo.vue</h5>
    <temp-viewdayinfo ></temp-viewdayinfo>
    <hr>
    <h5>GridYM.vue</h5>
    <!-- <temp-GridYM></temp-GridYM> -->
    <hr>
    <h5>MoveYM.vue</h5>
    <!-- <temp-MoveYM></temp-MoveYM> -->
    <hr>
    <h5>InputDayInfo.vue</h5>
    <!-- <temp-InputDayInfo v-show="showContent"></temp-InputDayInfo> -->
    <hr>
    <h5>temp-SyasCombobox</h5>
    <temp-SyasCombobox :FBsyasMaster="FBSyasData" :SelItem="FBitem"></temp-SyasCombobox>
    
    <hr>
  </div>
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

