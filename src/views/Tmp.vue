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
  </div>
</template>


<script>
//  インポート
import Vue from 'vue'
import ViewDayInfo from '../components/Parts/ViewDayInfo'
import GridYM from '../components/Parts/GridYM'
import MoveYM from '../components/Parts/MoveYM'
import InputDayInfo from '../components/Parts/InputDayInfo'

export default {
}

//  コンポーネントを登録
Vue.component('temp-viewdayinfo', ViewDayInfo)
Vue.component('temp-GridYM', GridYM)
Vue.component('temp-MoveYM', MoveYM)
Vue.component('temp-InputDayInfo', InputDayInfo)

</script>
