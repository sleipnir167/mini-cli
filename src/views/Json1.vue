<template>
  <div id="Json1">

    <h1>TODO List</h1>
    <div>
        <ul id="todo-container"></ul>
    </div>


    <div>ローカルwebさーびす取得</div>
    <JSONView :data="localweb" />
    <div>ローカル取得</div>
    <JSONView :data="users" />
  </div>
</template>
 
<script>

import { JSONView } from 'vue-json-component';
import axios from 'axios';
import userss from '../assets/Trainstatusinformation.json'

export default {
  components: {
    JSONView
  },
  data(){
    return{
      users: userss,
      localweb: null,
    }
  },
  created() {
    // this.test();
  },
  methods:{
    test() {
      // // APIからJSONを取得する(Fetch)
      // fetch('http://localhost:3000/api/v1/list')
      // .then((response) => response.json())
      // .then((todoList) => {
      //   // id="todo-container"要素を取得する
      //   const todoContainer = document.querySelector('#todo-container');

      //   // コンテナの中身を全部消す
      //   todoContainer.innerHTML = '';

      //   // JSONの各要素に対して
      //   for(const item of todoList) {
      //     const li = document.createElement('li');          // リスト要素
      //     const label = document.createElement('label');    // ラベル
      //     const checkbox = document.createElement('input'); // チェックボックス
      //     checkbox.type = 'checkbox';
      //     checkbox.checked = item.done;                     // 項目がdoneならチェック
      //     const text = new Text(item.title);                // 項目名

      //     // ラベルにチェックボックスとテキストを追加する
      //     label.appendChild(checkbox);
      //     label.appendChild(text);

      //     // リスト要素に先ほどのラベルを追加する
      //     li.appendChild(label);

      //     // TODOリストにリスト要素を追加する
      //     todoContainer.appendChild(li);
      //   }
      // })
      // .catch(function(error) {
      //   console.log('ERROR!! occurred in Backend.')
      //   console.log(error);
      // })
    },
  },
  mounted(){
    // ■ローカル取得
    axios.get('../assets/Trainstatusinformation.json',
        {
          params: {
            results: '10'
          }
        })
    .then(response => this.users = response.data.results)



    // ■ローカルWEBサービス
    axios.get('http://localhost:3000/api/v1/list')
    .then(response => this.localweb = response.data)
    .then(todoList => {
      // id="todo-container"要素を取得する
      const todoContainer = document.querySelector('#todo-container');

      // コンテナの中身を全部消す
      todoContainer.innerHTML = '';

      // JSONの各要素に対して
      for(const item of todoList) {
        const li = document.createElement('li');          // リスト要素
        const label = document.createElement('label');    // ラベル
        const checkbox = document.createElement('input'); // チェックボックス
        checkbox.type = 'checkbox';
        checkbox.checked = item.done;                     // 項目がdoneならチェック
        const text = new Text(item.title);                // 項目名

        // ラベルにチェックボックスとテキストを追加する
        label.appendChild(checkbox);
        label.appendChild(text);

        // リスト要素に先ほどのラベルを追加する
        li.appendChild(label);

        // TODOリストにリスト要素を追加する
        todoContainer.appendChild(li);
      }
    })
  }
};
</script>
 
<style>
#Json1 {
  color: #2c3e50;
  margin: 0 auto;
  width: 800px;
  height: 100%;
  overflow:scroll;
}
</style>
 