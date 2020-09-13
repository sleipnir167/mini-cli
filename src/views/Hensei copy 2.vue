<template>
  <div>
    <div id="status">
      <span v-show="status.moving">移動中</span>
      <span v-show="status.fixed">そのアイテムは操作できません</span>
    </div>
    <div>
      <h3>グループA（{{itemsA.length}}）</h3>
      <draggable
        v-model="itemsA"
        group="myGroup"
        :options="options"

        @choose="onChoose"
        @start="onStart"
        @clone="onClone"
        @add="onAdd"
        @remove="onRemove"
        @update="onUpdate"
        @sort="onSort"
        @filter="onFilter"
        @end="onEnd"
      >
        <div class="item" v-for="item in itemsA" :key="item.id" :class="isFixed(item.fixed)">{{item.name}}</div>
      </draggable>
    </div>
    <div>
      <h3>グループB （{{itemsB.length}}）</h3>
      <draggable
        v-model="itemsB"
        group="myGroup"
        :options="options"

        @choose="onChoose"
        @start="onStart"
        @clone="onClone"
        @add="onAdd"
        @remove="onRemove"
        @update="onUpdate"
        @sort="onSort"
        @filter="onFilter"
        @end="onEnd"
      >
        <div class="item" v-for="item in itemsB" :key="item.id" :class="isFixed(item.fixed)">{{item.name}}</div>
      </draggable>
    </div>
    <div>
      <h3>グループC （{{itemsC.length}}）</h3>
      <draggable
        v-model="itemsC"
        group="myGroup"
        :options="options"

        @choose="onChoose"
        @start="onStart"
        @clone="onClone"
        @add="onAdd"
        @remove="onRemove"
        @update="onUpdate"
        @sort="onSort"
        @filter="onFilter"
        @end="onEnd"
      >
        <div class="item" v-for="item in itemsC" :key="item.id" :class="isFixed(item.fixed)">{{item.name}}</div>
      </draggable>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
      name: "dnd",

      components: { draggable },

      data () {
          return {
              options: {
                  group: "myGroup",
                  animation: 200,
                  filter: '.fixed'
              },
              itemsA: [
                  { id: 1, name: 'name01', fixed: true },
                  { id: 2, name: 'name02', fixed: false },
                  { id: 3, name: 'name03', fixed: false },
                  { id: 4, name: 'name04', fixed: false },
                  { id: 5, name: 'name05', fixed: false }
              ],
              itemsB: [
                  { id: 6, name: 'name06', fixed: true },
                  { id: 7, name: 'name07', fixed: false },
                  { id: 8, name: 'name08', fixed: false },
                  { id: 9, name: 'name09', fixed: false },
                  { id: 10, name: 'name10', fixed: false }
              ],
              itemsC: [
                  { id: 11, name: 'name11', fixed: true },
                  { id: 12, name: 'name12', fixed: false },
                  { id: 13, name: 'name13', fixed: false },
                  { id: 14, name: 'name14', fixed: false },
                  { id: 15, name: 'name15', fixed: false }
              ],
              status: {
                  moving: false,
                  fixed: false,
              }
          }
      },

      computed: {
          isFixed () {
              return (fixed) => {
                  return {
                      'fixed': fixed === true
                  }
              }
          },
      },

      methods: {
          // フィルタされている要素を選択した時（filterイベント）
          onFilter () {
              console.log('onFilter')
              this.status.fixed = true
              setTimeout(() => {
                  this.status.fixed = false
              }, 1000)

          },
          // 選択された時（chooseイベント）
          onChoose () {
              console.log('onChoose')
          },
          // 動作が始まった時（startイベント）
          onStart () {
              console.log('onStart')
              this.status.moving = true;
          },
          // 動作が開始され要素のコピーが行われた時（cloneイベント）
          onClone () {
              console.log('onClone')
          },
          // リストの更新が行われた時（updateイベント）
          onUpdate () {
              console.log('onUpdate')
          },
          // リストに要素が加えられた時（addイベント）
          onAdd () {
              console.log('onAdd')
          },
          // リストから要素が除去された時（removeイベント）
          onRemove () {
              console.log('onRemove')
          },
          // 並び替えが行われた時（sortイベント）
          onSort () {
              console.log('onSort')
          },
          // 動作が終わった時（endイベント）
          onEnd () {
              console.log('onEnd')
              this.status.moving = false;
          }
      }
  }
</script>

<style scoped>
  #status {
    min-height: 25px;
    border: 1px solid #42b983;
  }
  .item {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    border: 1px solid #7f7f7f;
    border-radius: 10px;
    background-color: #ffffff;
  }
  .item:hover {
    cursor: grab;
  }
  .item:active {
    cursor: grabbing;
  }
  .sortable-chosen {
    background-color: #42b983;
  }
</style>





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

  <v-container>
      <v-row>
        <v-col class="list-wrapper">
          <draggable tag="list-wrapper" :options="{group:'ITEMS'}">
            <div>1of2</div>
          </draggable>
        </v-col>
        <v-col class="list-wrapper">
    <draggable tag="list-wrapper" :options="{group:'ITEMS'}">
          <div>2of2</div>
    </draggable>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="list-wrapper">
          <draggable tag="list-wrapper" :options="{group:'ITEMS'}">
          <div>1of3</div>
    </draggable>
        </v-col>
        <v-col class="list-wrapper">
          <draggable tag="list-wrapper" :options="{group:'ITEMS'}">
          <div>2of3</div>
    </draggable>
        </v-col>
        <v-col class="list-wrapper">
          <draggable tag="list-wrapper" :options="{group:'ITEMS'}">
          <div>3of3</div>
    </draggable>
        </v-col>
      </v-row>
  </v-container>

  <v-container>
    <div v-for="item in items" :key="item.id">
      <v-row>
        <div>{{item.id}}</div>
            <div v-for="sosei in item.soseis" :key="sosei.name">
          <draggable tag="v-list-item" :options="{group:'ITEMS'}">
              <div>{{sosei.no}}</div>
              <v-col>
                <div style="border:solid 1px red;">
                  <div>{{ sosei.name.substring(0,8)}}</div>
                  <div text-alien="center">{{ sosei.name.substring(8,12) }}</div>
                </div>
              </v-col>
          </draggable>
            </div>
      </v-row>
    </div>
  </v-container>

  <v-container>
    <div v-for="(item, key) in items" :key="key" class="lists">
      <v-row>
        <v-col cols="1" sm="1" md="1" lg="1">
          <div>{{item.id}}</div>
        </v-col>
        <v-col cols="1" sm="1" md="1" lg="1">
          <draggable :options="{group:'group', animation: 150}"
            @start="draggableStart"
            @end="drag=draggableEnd">
              <div v-for="sosei in item.soseis" :key="sosei.name">
                {{ sosei.name }}
              </div>
          </draggable>
        </v-col>
      </v-row>
    </div>
  </v-container>



  <div class="conteiner">
    <div v-for="(item, key) in items" :key="key" class="lists">
      <div class="list-wrapper">
        <draggable :options="{group:'group', animation: 150}" class="draggable"
          @start="draggableStart"
          @end="drag=draggableEnd">
          <div v-for="sosei in item.soseis" :key="sosei.name" class="list" >
            {{ sosei.name }}
          </div>
        </draggable>
      </div>
    </div>
  </div>

<!-- 
  <v-row>
    <div v-for="item in items" :key="item.id" link>
      <v-col>
        <v-card class="mx-auto">
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  {{item.grp}}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{item.hens}}編成
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense nav>
              <draggable tag="v-list-item" :options="{group:'ITEMS'}">
                <v-list-item v-for="sosei in item.soseis" :key="sosei.name" link>
                  <v-list-item-content>
                    <v-list-item-title>{{ sosei.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </draggable>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
    </div>
  </v-row> -->

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
        {
          id:1,
          grp:"Aグループ",
          hens:"01",
          soseis:[
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
        },
        {
          id:2,
          grp:"Aグループ",
          hens:"02",
          soseis:[
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
          ],
        },
      ],
      lists: [
        [{ name: 'aaa', id: 1 }, { name: 'bbb', id: 2 }, { name: 'ccc', id: 3 }],
        [{ name: 'ddd', id: 4 }, { name: 'eee', id: 5 }, { name: 'fff', id: 6 }],
        [{ name: 'ggg', id: 7 }, { name: 'hhh', id: 8 }, { name: 'iii', id: 9 }],
        [{ name: 'jjj', id: 10 }, { name: 'kkk', id: 11 }, { name: 'lll', id: 12 }]
      ]
    };
  },
  components: {
    'draggable': draggable,
  },
  methods: {
    draggableEnd(event) {
      console.log(event.from)
      console.log(event.to)
      console.log(event)
    }
  }
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
div{
  border:solid 1px red
}
</style>