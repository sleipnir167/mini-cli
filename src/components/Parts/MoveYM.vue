<template>
  <div class="MoveYM d-flex flex-column">
    <div class="ViewYM">{{getThisMonth}}</div>
    <div class="MoveYM d-flex flex-row">
      <input type="button" v-on:click="movePrevMonth" value="<<">
      <input type="button" v-on:click="moveNextMonth" value=">>">
    </div>
    <div class="center-group d-flex flex-row">
      <div v-for="(todo, index) in new_days" v-bind:key="index" >
        <temp-viewdayinfo v-bind:kensa='todo.kensa' v-bind:kiro="todo.kiro" v-bind:day="todo.day" v-bind:viewstyle="todo.viewstyle"></temp-viewdayinfo>
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

const WEEK_SATURDAY = 6;
const WEEK_SUNDAY = 0;
const COLOR_BLUE = 'color:blue;border-color:black';
const COLOR_RED = 'color:red;border-color:black';


export default {
  props: {
    todo_title :String
  },
  data: function(){ 
      return {
          ViewYYYY: '',
          ViewMM: '',
          new_days:[],
      }
  } ,
  created: function(){
       console.log(this.new_days);
      this.setThisMonth();
      //  this.Create_callender();
      this.addCalender();
       
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
    },
    addTodo(){
      let new_day = {kensa: this.title, kiro: this.kiro, day: this.day, viewstyle: ""}
      this.new_days.push(new_day);
      console.log("addTodo -> new_day", new_day);
      this.new_days = this.new_days.filter(todo => !todo.completed)
    },
    setThisMonth(){
      // 現在の年月の設定
      let current = new Date();
      this.ViewYYYY = current.getFullYear();
      this.ViewMM = current.getMonth() + 1;
    },
    movePrevMonth(){
      let current = new Date(this.ViewYYYY, this.ViewMM - 1);
      this.ViewYYYY = current.getFullYear();
      this.ViewMM = current.getMonth();
      this._get_month_calendar()
    },
    moveNextMonth(){
      let current = new Date(this.ViewYYYY, this.ViewMM + 1);
      this.ViewYYYY = current.getFullYear();
      this.ViewMM = current.getMonth();
      this._get_month_calendar()
    },
    addCalender(){
      // 現在の年月の取得
      let current = new Date(this.ViewYYYY, this.ViewMM);
      let year = current.getFullYear();
      let month = current.getMonth();

      console.log(`●+${year} + ${month}`);

      // カレンダーの情報を取得
      let calendarData = this._get_month_calendar();
      console.log(`●+${calendarData}`);

    },
    _get_month_calendar() {
      this.new_days = [];
      let firstDate = new Date(this.ViewYYYY, (this.ViewMM - 1), 1); // 指定した年月の初日の情報
      let lastDay = new Date(this.ViewYYYY, (firstDate.getMonth() + 1), 0).getDate(); // 指定した年月の末日
      let weekday = firstDate.getDay(); // 指定した年月の初日の曜日
      let weekdayName = {0:"日",1:"月",2:"火",3:"水",4:"木",5:"金",6:"土"};
      let new_day;
      for(let i = 1; i < lastDay; i++){
        new_day = {kensa: `${i} 日`, kiro: weekdayName[weekday], day:`${this.ViewYYYY}/${this.ViewMM}/${i}`, viewstyle : this._get_style(weekday)}
        weekday = weekday < 6 ? ++weekday : 0;
        this.new_days.push(new_day);
      }
      return "";
    },
    _get_style(weekday) {
      switch(weekday){
        case WEEK_SATURDAY:
          return COLOR_BLUE;
        case WEEK_SUNDAY:
          return COLOR_RED;
        default:
          return "";
      }
    },
  },
  computed: {
    getThisMonth: function () {
      // 現在の年月の取得
      return this.ViewYYYY + "/" + this.ViewMM;
    }
  }
}
</script>

<style>
.ViewYM{
  text-align:left;
}
/* .MoveYM{
  border: solid 1px blue;
  background-color:cornflowerblue;
} */

</style>