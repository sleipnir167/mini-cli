
<template>
  <v-app id="inspire">
    <v-container fluid>
      <v-row>
        <v-col>
          <a id="aaa" class="mydrag" href="http://example.com" >このリンクをドラッグ！！</a>
          <input id="bbb" class="mydrag2" type="text" style="font-size:32px;" >
        </v-col>
          <body>
    <canvas id="canvas" width="1000" height="1000"></canvas>
  </body>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  //  インポート
  import {t3m1} from '../myscript/aone.js'

  export default {
    FBSyasData:[],
    FBitem:null,
    created(){
    },
    data () {
      return {
      }
    },
    mounted() {
      t3m1()
    }
  }
  //  コンポーネントを登録
</script>




