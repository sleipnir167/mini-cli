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
    <temp-SyasCombobox></temp-SyasCombobox>
    
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

  export default {
  }

  //  コンポーネントを登録
  Vue.component('temp-viewdayinfo', ViewDayInfo)
  Vue.component('temp-GridYM', GridYM)
  Vue.component('temp-MoveYM', MoveYM)
  Vue.component('temp-InputDayInfo', InputDayInfo)
  Vue.component('temp-SyasCombobox', SyasCombobox)

</script>

