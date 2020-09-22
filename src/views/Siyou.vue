<template>
  <v-app id="inspire">
    <v-container fluid div class="ma-1" id="kensa">
      <v-row class="ma-1">
        <!-- 中央領域 -->
        <v-btn class="ma-1" color="primary">あれ</v-btn>
        <v-btn class="ma-1" color="primary">それ</v-btn>
        <v-btn class="ma-1" color="primary">どれ</v-btn>
        <v-btn class="ma-1" color="primary">これ</v-btn>
      </v-row>
      <v-divider></v-divider>


      <v-row>
        <v-col cols="2" style="height:41.5px; border:solid 1px black"></v-col>
        <v-col id="ViewDayInfo2" cols="1" v-for="viewday in viewdays" :key="viewday">
            <div class="firstBox">
              <p>{{ viewday.day }}</p>
            </div>
            <div class="secondBox">
              <p>{{ viewday.youbi }}</p>
            </div>
        </v-col>
      </v-row>

      <v-row v-for="syagou in syagous" :key="syagou" >
        <v-col cols="2" style="height:41.5px; border:solid 1px black">
          {{syagou}}
        </v-col>
        <v-col id="ViewDayInfo" cols="1" v-for="dayinfo in dayinfos" :key="dayinfo">
          <v-card @click.stop="divclick(dayinfo)" >
            <div class="firstBox">
              <p>{{ dayinfo.kensa }}</p>
            </div>
            <div class="secondBox">
              <p>{{ dayinfo.kiro }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>

    </v-container>


    <!-- 実績入力画面 -->
    <v-dialog v-model="dialog" max-width="290" >
      <v-card>
        <v-card-title class="headline">実績入力</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" class="py-0">
              <label>日付</label>
              <v-text-field ref="selectday" v-model="selectday" placeholder=" " dense disabled></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" class="py-0">
              <label>検査</label>
              <v-text-field ref="selectkens" v-model="selectkens" placeholder=" " outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12"  class="py-0">
              <label>キロ</label>
              <v-text-field ref="selectkiro" v-model="selectkiro" placeholder=" " outlined dense></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="dialog = false">更新</v-btn>
          <v-btn color="primary darken-1" text @click="dialog = false">取消</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </v-app>
</template>

<script>
//  インポート
import Vue from 'vue'
import GridYM from '../components/Parts/GridYM'
import MoveYM from '../components/Parts/MoveYM'

export default {
  data(){
    return{
      dialog: false,
      selectkens:null,
      selectkiro:null,
      syagous:["TCXXX-0001","TCXXX-0002","M XXX-0003","M'XXX-0004","TCXXX-0005","TCXXX-0006","TCXXX-0007","TCXXX-0008","TCXXX-0009","TCXXX-0010",],
      viewdays:[
        {day: "2020/01/01",youbi:"月"},
        {day: "2020/01/02",youbi:"火"},
        {day: "2020/01/03",youbi:"水"},
        {day: "2020/01/04",youbi:"木"},
        {day: "2020/01/05",youbi:"金"},
        {day: "2020/01/06",youbi:"土"},
        {day: "2020/01/07",youbi:"日"},
        {day: "2020/01/08",youbi:"月"},
        {day: "2020/01/09",youbi:"火"},
        {day: "2020/01/10",youbi:"水"},
      ],
      dayinfos:[
        {kensa: "　", kiro: "100.0km", day: "2020/01/01"},
        {kensa: "　", kiro: "111.0km", day: "2020/01/02"},
        {kensa: "車", kiro: "122.0km", day: "2020/01/03"},
        {kensa: "　", kiro: "133.0km", day: "2020/01/04"},
        {kensa: "　", kiro: "144.0km", day: "2020/01/05"},
        {kensa: "　", kiro: "155.0km", day: "2020/01/06"},
        {kensa: "月", kiro: "166.0km", day: "2020/01/07"},
        {kensa: "　", kiro: "166.0km", day: "2020/01/08"},
        {kensa: "　", kiro: "176.0km", day: "2020/01/09"},
        {kensa: "　", kiro: "116.0km", day: "2020/01/10"},
      ]
    }
  },
  methods: {
    divclick(dayinfo){
      this.dialog = true,
      this.selectkens = dayinfo.kensa
      this.selectkiro = dayinfo.kiro
      this.selectday = dayinfo.day
    }
  },
}

//  コンポーネントを登録
Vue.component('temp-gridym', GridYM)
Vue.component('temp-MoveYM', MoveYM)

</script>

<style scoped>
#kensa {
  background-color: #ebebeb;
  overflow:scroll;
  width:100%;
  height:100%;
  margin:10px;
}

#kensa > .HeaderButton-Group > .btn-primary{
  margin-left:10px;
}

#kensa > .kensaYM > .syagou {
  min-width: 110px;
  max-width: 110px;
}

#ViewDayInfo {
  width: 50px;
  box-sizing:border-box;
  font-size: 10px;
  border: solid 1px black;
  margin:0;
  padding:0;
  overflow:hidden;
}

#ViewDayInfo .firstBox {
  height: 20px;
  width: 100%;
  text-align: center;
}

#ViewDayInfo .secondBox {
  height: 20px;
  width: 100%;
  border-top: dotted 1px black;
  text-align: center;
}

#ViewDayInfo:hover {
  color: #3eb623;
  border: solid 1px #3eb623;
}

#ViewDayInfo2 {
  width: 50px;
  box-sizing:border-box;
  font-size: 10px;
  border: solid 1px black;
  margin:0;
  padding:0;
  overflow:hidden;
}

#ViewDayInfo2 .firstBox {
  height: 20px;
  width: 100%;
  text-align: center;
}

#ViewDayInfo2 .secondBox {
  height: 20px;
  width: 100%;
  border-top: dotted 1px black;
  text-align: center;
}


</style>

