
<template>
  <v-app id="inspire">
    <div class="wrapper">
        <input v-for="cell in cells" :key="cell" v-model="cell.num" class="cell" type="text" pattern="[1-9]" />
    </div>
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




