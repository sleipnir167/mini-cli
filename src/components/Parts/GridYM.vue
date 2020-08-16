<template>
  <div id="GridYM">
    <div class="center-group d-flex flex-row">
      <div v-for="(todo, index) in new_days" v-bind:key="index" >
        <temp-viewdayinfo v-bind:kensa='todo.kensa' v-bind:kiro="todo.kiro" v-bind:day="todo.day"></temp-viewdayinfo>
      </div>
    </div>
  </div>
</template>

<script>
//  インポート
import Vue from 'vue'
import ViewDayInfo from './ViewDayInfo'
//  コンポーネントを登録
Vue.component('temp-viewdayinfo', ViewDayInfo)

export default {
  props: {
    todo_title :String
  },
  data: function(){ 
      return {
          new_days:[],
      }
  } ,
  created: function(){
       this.addSample();
       
  } ,
  methods:{
      addSample(){
        let new_day = {kensa: "_", kiro: "100.0km", day: "2020/01/01"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "111.0km", day: "2020/01/02"}
        this.new_days.push(new_day);
        new_day = {kensa: "車", kiro: "122.0km", day: "2020/01/03"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "133.0km", day: "2020/01/04"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "144.0km", day: "2020/01/05"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "155.0km", day: "2020/01/06"}
        this.new_days.push(new_day);
        new_day = {kensa: "月", kiro: "166.0km", day: "2020/01/07"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "166.0km", day: "2020/01/08"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "176.0km", day: "2020/01/09"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "186.0km", day: "2020/01/10"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "196.0km", day: "2020/01/11"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "216.0km", day: "2020/01/12"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "226.0km", day: "2020/01/13"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "246.0km", day: "2020/01/14"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "256.0km", day: "2020/01/15"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "256.0km", day: "2020/01/16"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "186.0km", day: "2020/01/17"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "186.0km", day: "2020/01/18"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "186.0km", day: "2020/01/19"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "196.0km", day: "2020/01/20"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "196.0km", day: "2020/01/21"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "216.0km", day: "2020/01/22"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "226.0km", day: "2020/01/23"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "246.0km", day: "2020/01/24"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "256.0km", day: "2020/01/25"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "256.0km", day: "2020/01/26"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "186.0km", day: "2020/01/27"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "186.0km", day: "2020/01/28"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "186.0km", day: "2020/01/29"}
        this.new_days.push(new_day);
        new_day = {kensa: " ", kiro: "186.0km", day: "2020/01/30"}
        this.new_days.push(new_day);
      },
      addTodo(){
        var new_day = {kensa: this.title, kiro: this.kiro, day: this.day}
        this.new_days.push(new_day);
        this.new_days = this.new_days.filter(todo => !todo.completed)
      }
  }
}
</script>


<style>

#GridYM #ViewDayInfo{
  border: solid 1px;
}

#GridYM #ViewDayInfo > .firstBox {
  text-align: center;
}

#GridYM #ViewDayInfo > .secondBox {
  text-align: right;
}
</style>