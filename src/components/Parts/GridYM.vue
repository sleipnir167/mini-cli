<template>
  <div class="GridYM">
    <div class="center-group d-flex flex-row">
      <temp-viewdayinfo kensa='11' ></temp-viewdayinfo>
      <temp-viewdayinfo kensa='者' ></temp-viewdayinfo>
      <temp-viewdayinfo kensa="者" ></temp-viewdayinfo>
      <temp-viewdayinfo kensa="bb" ></temp-viewdayinfo>
      <temp-viewdayinfo kensa="42" ></temp-viewdayinfo>
      <temp-viewdayinfo></temp-viewdayinfo>
      <temp-viewdayinfo></temp-viewdayinfo>


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
  props: {todo_title :String},
  data: function(){ 
      return {
          todos:[],
          title: '',
          important: false
      }
  } ,
  created: function(){
       console.log(this.todos);
  } ,
  methods:{
      addTodo(){
          if(!this.title){
              alert("TODOに何も書いてません")
          }
          else{
              var new_todo = {title: this.title, important: this.important, completed: false}
              this.todos.push(new_todo);
              this.todos = this.todos.filter(todo => !todo.completed)
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
