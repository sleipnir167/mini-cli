<template>
  <div id="Kensyu">
    <v-app id="inspire">

      <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
      >
        <template v-slot:[`item.score`]="{ item }">
          <v-chip :color="getColor(item.score)" dark>{{ item.score }}</v-chip>
        </template>
      </v-data-table>

    </v-app>
  </div>
</template>


<script>
  //  インポート
  import Vuetify from "vuetify";

  export default {
    vuetify: new Vuetify(),
    FBSyasData:[],
    FBitem:null,
    created(){

    },
    data () {
      return{
        // テーブル用
        headers: [
          {
            text: '部位',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'スコア', value: 'score' },
          { text: '測定値', value: 'measuredvalue' },
          { text: '健全値', value: 'Healthyvalue' },
          { text: '前回(測定値)', value: 'prevmeasuredvalue' },
          { text: '使用率', value: 'iron' },
        ],
        desserts: [
          {name: 'パンタグラフ', score: 25, measuredvalue: 6.0, Healthyvalue: 24, prevmeasuredvalue: 4.0, iron: '8%',},
          {name: '制輪子制輪子', score: 25, measuredvalue: 9.0, Healthyvalue: 37, prevmeasuredvalue: 4.3, iron: '72%',},
          {name: '連結器', score: 30, measuredvalue: 16.0, Healthyvalue: 23, prevmeasuredvalue: 6.0, iron: '63%',},
          {name: '車輪1',score: 100, measuredvalue: 3.7, Healthyvalue: 67, prevmeasuredvalue: 4.3, iron: '0%',},
          {name: '車輪2', score: 50, measuredvalue: 16.0, Healthyvalue: 49, prevmeasuredvalue: 3.9, iron: '16%', },
          {name: '車輪3', score: 75, measuredvalue: 0.0, Healthyvalue: 94, prevmeasuredvalue: 0.0, iron: '16%',},
          {name: '車輪4', score: 100, measuredvalue: 0.2, Healthyvalue: 98, prevmeasuredvalue: 0, iron: '0%',},
          {name: '起動試験', score: 60, measuredvalue: 3.2, Healthyvalue: 87, prevmeasuredvalue: 6.5, iron: '45%',},
        ],
        message:110,
        bui:{bui:1, Max:400, limit:100, Now:100}
      }
    },
    mounted() {
      
    },
    methods: {
      getColor (score) {
        if (score < 30) return 'red'
        else if (score < 50) return 'orange'
        else if (score < 80) return 'lime darken-2'
        else return 'green'
      },
    },
    computed:{
      styles(){
        let width = this.message/144*100
        return {
          "border": "5px solid red",
          "width": width + '%'
        }
      },
      currentAngle(){
        return Math.floor(360*this.message/144);
      },  
      rightAngle(){
        let angle = Math.min(this.currentAngle, 180);
        return {
          "transform": "rotate(" + angle + "deg)",
        }
      },
      leftAngle(){
        let angle = Math.min(Math.max(this.currentAngle-180, 0),180);
        return {
          "transform": "rotate(" + angle + "deg)",
        }
      },
    }
  }
</script>

<style>
.icon_spin{
  animation: rotate-anime 1s linear infinite;
}
@keyframes rotate-anime {
  0%  {transform: rotate(0);}
  100%  {transform: rotate(-360deg);}
}

.square{
  position:absolute;
  width:100px;
  height:200px;
  overflow:hidden;
}
.outside_circle{
  position:absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border:10px solid green;
  box-sizing: border-box;
}
.inside_circle{
  position:absolute;
  width: 170px;
  height: 170px;
  left:15px;
  top:15px;
  border-radius: 50%;
  border:15px solid gray;
  box-sizing: border-box;
}
.inside_dot{
  position:absolute;
  width: 10px;
  height: 10px;
  left:10px;
  top:10px;
  border-radius: 50%;
  border:5px solid rgba(0, 0, 0, 0.397);
  box-sizing: border-box;
}

</style>
