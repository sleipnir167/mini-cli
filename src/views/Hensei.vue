<template>
  <div>
    <div id="status">
      <span v-show="status.moving">移動中</span>
      <span v-show="status.fixed">そのアイテムは操作できません</span>
    </div>
    <div v-for="item in items" :key="item.title">
      <span>{{item.grp}}{{item.hens}}編成（{{item.soseis.length}}）</span>
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
        <div class="item" v-for="sosei in item.soseis" :key="sosei.id" :class="isFixed(sosei.fixed)">
          <div>{{sosei.name.substring(0,8)}}</div>
          <div>{{sosei.name.substring(8,12)}}</div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
      components: { draggable },
      data () {
          return {
              options: {
                  group: "myGroup",
                  animation: 200,
                  filter: '.fixed'
              },
              items:[ 
                {
                  id:1,
                  grp:"Aグループ",
                  hens:"01",
                  soseis:[
                    { id: 1, name: "T'c 234 0001", fixed: false },
                    { id: 2, name: "M2  234 0003", fixed: false },
                    { id: 3, name: "M1  235 0003", fixed: false },
                    { id: 4, name: "T   235 0001", fixed: false },
                    { id: 5, name: "M2  234 0002", fixed: false },
                    { id: 6, name: "M1  235 0002", fixed: false },
                    { id: 7, name: "T'  234 0001", fixed: false },
                    { id: 8, name: "M2  234 0001", fixed: false },
                    { id: 9, name: "M1  235 0001", fixed: false },
                    { id: 10, name: "T   235 4620", fixed: false },
                    { id: 11, name: "Tc  235 0001", fixed: false },
                  ]
                },
                {
                  id:2,
                  grp:"Aグループ",
                  hens:"02",
                  soseis:[
                    { id: 1, name: "T'c 234 0002", fixed: false },
                    { id: 2, name: "M2  234 0006", fixed: false },
                    { id: 3, name: "M1  235 0006", fixed: false },
                    { id: 4, name: "T   235 0002", fixed: false },
                    { id: 5, name: "M2  234 0005", fixed: false },
                    { id: 6, name: "M1  235 0005", fixed: false },
                    { id: 7, name: "T'  234 0002", fixed: false },
                    { id: 8, name: "M2  234 0004", fixed: false },
                    { id: 9, name: "M1  235 0004", fixed: false },
                    { id: 10, name: "T   235 4640", fixed: false },
                    { id: 11, name: "Tc  235 0002", fixed: false },
                  ]
                },
                {
                  id:3,
                  grp:"Aグループ",
                  hens:"03",
                  soseis:[
                    { id: 1, name: "T'c 234 0003", fixed: false },
                    { id: 2, name: "M2  234 0009", fixed: false },
                    { id: 3, name: "M1  235 0009", fixed: false },
                    { id: 4, name: "T   235 0003", fixed: false },
                    { id: 5, name: "M2  234 0008", fixed: false },
                    { id: 6, name: "M1  235 0008", fixed: false },
                    { id: 7, name: "T'  234 0003", fixed: false },
                    { id: 8, name: "M2  234 0007", fixed: false },
                    { id: 9, name: "M1  235 0007", fixed: false },
                    { id: 10, name: "T   235 4603", fixed: false },
                    { id: 11, name: "Tc  235 0003", fixed: false },
                  ]
                },
                {
                  id:4,
                  grp:"Bグループ",
                  hens:"01",
                  soseis:[
                    { id: 1, name: "T'c 234 0004", fixed: false },
                    { id: 2, name: "M2  234 0012", fixed: false },
                    { id: 3, name: "M1  235 0012", fixed: false },
                    { id: 4, name: "T   235 0004", fixed: false },
                    { id: 5, name: "M2  234 0011", fixed: false },
                    { id: 6, name: "M1  235 0011", fixed: false },
                    { id: 7, name: "T'  234 0004", fixed: false },
                    { id: 8, name: "M2  234 0010", fixed: false },
                    { id: 9, name: "M1  235 0010", fixed: false },
                    { id: 10, name: "T   235 0501", fixed: false },
                    { id: 11, name: "Tc  235 0004", fixed: false },
                  ]
                },
                {
                  id:5,
                  grp:"Bグループ",
                  hens:"02",
                  soseis:[
                    { id: 1, name: "T'c 234 0005", fixed: false },
                    { id: 2, name: "M2  234 0015", fixed: false },
                    { id: 3, name: "M1  235 0015", fixed: false },
                    { id: 4, name: "T   235 0005", fixed: false },
                    { id: 5, name: "M2  234 0014", fixed: false },
                    { id: 6, name: "M1  235 0014", fixed: false },
                    { id: 7, name: "T'  234 0005", fixed: false },
                    { id: 8, name: "M2  234 0013", fixed: false },
                    { id: 9, name: "M1  235 0013", fixed: false },
                    { id: 10, name: "T   235 0502", fixed: false },
                    { id: 11, name: "Tc  235 0005", fixed: false },
                  ]
                },
                {
                  id:6,
                  grp:"Bグループ",
                  hens:"03",
                  soseis:[
                    { id: 1, name: "T'c 234 0006", fixed: false },
                    { id: 2, name: "M2  234 0018", fixed: false },
                    { id: 3, name: "M1  235 0018", fixed: false },
                    { id: 4, name: "T   235 0006", fixed: false },
                    { id: 5, name: "M2  234 0017", fixed: false },
                    { id: 6, name: "M1  235 0017", fixed: false },
                    { id: 7, name: "T'  234 0006", fixed: false },
                    { id: 8, name: "M2  234 0016", fixed: false },
                    { id: 9, name: "M1  235 0016", fixed: false },
                    { id: 10, name: "T   235 4607", fixed: false },
                    { id: 11, name: "Tc  235 0006", fixed: false },
                  ]
                },
                {
                  id:7,
                  grp:"Bグループ",
                  hens:"04",
                  soseis:[
                    { id: 1, name: "T'c 234 0007", fixed: false },
                    { id: 2, name: "M2  234 0021", fixed: false },
                    { id: 3, name: "M1  235 0021", fixed: false },
                    { id: 4, name: "T   235 0007", fixed: false },
                    { id: 5, name: "M2  234 0020", fixed: false },
                    { id: 6, name: "M1  235 0020", fixed: false },
                    { id: 7, name: "T'  234 0007", fixed: false },
                    { id: 8, name: "M2  234 0019", fixed: false },
                    { id: 9, name: "M1  235 0019", fixed: false },
                    { id: 10, name: "T   235 4608", fixed: false },
                    { id: 11, name: "Tc  235 0007", fixed: false },
                  ]
                }
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
    margin: 5px;
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

