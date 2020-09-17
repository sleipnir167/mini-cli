// https://www.kabanoki.net/1712/
// start	ドラッグ開始したとき
// add	要素が追加されたとき
// remove	要素を削除されたとき
// update	ドラッグで要素の移動が完了したとき
// end	ドラッグが完了したときの最後に動作します
// choose	ドラッグ要素を選択したとき
// sort	並び順を変更したときのupdateの後、endの前に動作する
// filter	フィルターされたとき
// clone	ドラッグで要素のクローンが生成されたとき

<template>
  <v-app id="inspire">

  <v-card
    width="256"
    class="mx-auto"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Aグループ
          </v-list-item-title>
          <v-list-item-subtitle>
            編成1
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <draggable tag="v-list-item" :options="{group:'ITEMS'}">
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </draggable>
      </v-list>
    </v-navigation-drawer>
  </v-card>

<!-- 
    <div id="box1" class="box">
      <draggable tag="ul" :options="{group:'ITEMS'}">
        <li v-for="item in items" :key="item.no">{{item.name}}-(No.{{item.no}})</li>
      </draggable>
    </div>
    <div id="box2" class="box">
      <draggable tag="ul" :options="{group:'ITEMS'}">
        <li v-for="item in items2" :key="item.no">{{item.name}}-(No.{{item.no}})</li>
      </draggable>
    </div> -->
  </v-app>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "LineSample",
  data() {
    return {
      items:[ 
        {no:1, name:"T'c 234 0001", khhens:'01', khgosya:'1'}, 
        {no:2, name:"M2  234 0003", khhens:'01', khgosya:'2'}, 
        {no:3, name:"M1  235 0003", khhens:'01', khgosya:'3'}, 
        {no:4, name:"T   235 0001", khhens:'01', khgosya:'4'}, 
        {no:5, name:"M2  234 0002", khhens:'01', khgosya:'5'}, 
        {no:6, name:"M1  235 0002", khhens:'01', khgosya:'6'}, 
        {no:7, name:"T'  234 0001", khhens:'01', khgosya:'7'}, 
        {no:8, name:"M2  234 0001", khhens:'01', khgosya:'8'}, 
        {no:9, name:"M1  235 0001", khhens:'01', khgosya:'9'}, 
        {no:10, name:"T   235 4620", khhens:'01', khgosya:'10'}, 
        {no:11, name:"Tc  235 0001", khhens:'01', khgosya:'11'}, 
      ], 
      items2:[ 
        {no:1, name:"T'c 234 0002", khhens:'02', khgosya:'1'}, 
        {no:2, name:"M2  234 0006", khhens:'02', khgosya:'2'}, 
        {no:3, name:"M1  235 0006", khhens:'02', khgosya:'3'}, 
        {no:4, name:"T   235 0002", khhens:'02', khgosya:'4'}, 
        {no:5, name:"M2  234 0005", khhens:'02', khgosya:'5'}, 
        {no:6, name:"M1  235 0005", khhens:'02', khgosya:'6'}, 
        {no:7, name:"T'  234 0002", khhens:'02', khgosya:'7'}, 
        {no:8, name:"M2  234 0004", khhens:'02', khgosya:'8'}, 
        {no:9, name:"M1  235 0004", khhens:'02', khgosya:'9'}, 
        {no:10, name:"T   235 4640", khhens:'02', khgosya:'10'}, 
        {no:11, name:"Tc  235 0002", khhens:'01', khgosya:'11'}, 
      ] , 
      items3:[ 
        {no:1, name:"T'c 234 0002", khhens:'02', khgosya:'1'}, 
        {no:2, name:"M2  234 0006", khhens:'02', khgosya:'2'}, 
        {no:3, name:"M1  235 0006", khhens:'02', khgosya:'3'}, 
        {no:4, name:"T   235 0002", khhens:'02', khgosya:'4'}, 
        {no:5, name:"M2  234 0005", khhens:'02', khgosya:'5'}, 
        {no:6, name:"M1  235 0005", khhens:'02', khgosya:'6'}, 
        {no:7, name:"T'  234 0002", khhens:'02', khgosya:'7'}, 
        {no:8, name:"M2  234 0004", khhens:'02', khgosya:'8'}, 
        {no:9, name:"M1  235 0004", khhens:'02', khgosya:'9'}, 
        {no:10, name:"T   235 4640", khhens:'02', khgosya:'10'}, 
        {no:11, name:"Tc  235 0002", khhens:'01', khgosya:'11'}, 
      ] 
    };
  },
  components: {
    'draggable': draggable,
  },
};
</script>


<style lang="scss" scoped>
ul {
  list-style-type: none;
}
li {
  cursor: pointer;
  padding: 10px;
  border: solid #ddd 1px;
}
</style>