<template>
  <div class="about">
    <h1>This is an about page</h1>
    
    <temp-viewdayinfo ></temp-viewdayinfo>
    <temp-viewdayinfo></temp-viewdayinfo>
    <temp-GridYM></temp-GridYM>
    <temp-GridYM></temp-GridYM>
  </div>
</template>


<script>
//  インポート
import Vue from 'vue'
import ViewDayInfo from '../components/Parts/ViewDayInfo'
import GridYM from '../components/Parts/GridYM'

export default {
}

//  コンポーネントを登録
Vue.component('temp-viewdayinfo', ViewDayInfo)
Vue.component('temp-GridYM', GridYM)

</script>