<template>
  <div class="GridYM">
    <div class="center-group d-flex flex-row">
      <temp-viewdayinfo kensa='11' ></temp-viewdayinfo>
      <temp-viewdayinfo kensa='者' ></temp-viewdayinfo>
      <!-- <temp-viewdayinfo kensa="者" ></temp-viewdayinfo>
      <temp-viewdayinfo kensa="bb" ></temp-viewdayinfo>
      <temp-viewdayinfo kensa="42" ></temp-viewdayinfo> -->
      <temp-viewdayinfo></temp-viewdayinfo>
      <temp-viewdayinfo></temp-viewdayinfo>
      <input type="text" v-model="title">
      <input type="button" v-on:click="addTodo">
      <p>dt</p>
      <tr v-for="(todo, index) in new_days" v-bind:key="index">
        <temp-viewdayinfo v-bind:kensa='index' ></temp-viewdayinfo>
          <!-- <td>{{index}}</td>
          <td>{{todo.title}}</td>
          <td>{{todo.important ? 'Yes' : 'No'}}</td>
          <td><input type="checkbox" v-model="todo.completed"></td> -->
      </tr>

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
          title: '',
          kiro: '',
          important: false
      }
  } ,
  created: function(){
       console.log(this.new_days);
  } ,
  methods:{
      addTodo(){
          if(!this.title){
              alert("TODOに何も書いてません")
          }
          else{
              var new_day = {kensa: this.title, kiro: this.kiro, day: this.day}
              this.new_days.push(new_day);
              console.log("addTodo -> new_day", new_day);
              this.new_days = this.new_days.filter(todo => !todo.completed)
          }
      }
  }
}
// export default {
//   props: {todo_title :String},
//   data: function(){ 
//       return {
//           todos:[],
//           title: '',
//           important: false
//       }
//   } ,
//   created: function(){
//        console.log(this.todos);
//   } ,
//   methods:{
//       addTodo(){
//           if(!this.title){
//               alert("TODOに何も書いてません")
//           }
//           else{
//               var new_todo = {title: this.title, important: this.important, completed: false}
//               this.todos.push(new_todo);
//               this.todos = this.todos.filter(todo => !todo.completed)
//           }
//       }
//   }
// }

</script>
