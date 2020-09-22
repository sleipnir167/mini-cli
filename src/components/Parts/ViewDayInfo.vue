<template>
  <!-- <div id="ViewDayInfo" v-on:click="viewinfo" v-bind:style="viewstyle"> -->
  <div id="ViewDayInfo">
    <div class="nakami" @click.stop="dialog = true">
      <div class="firstBox">
        <p>{{ kensaV }}</p>
      </div>
      <div class="secondBox">
        <p>{{ kiro }}</p>
      </div>
    </div>
    
    <!-- 実績入力画面 -->
    <v-dialog v-model="dialog" max-width="290" >
      <v-card>
        <v-card-title class="headline">実績入力</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" class="py-0">
              <label>日付</label>
              <v-text-field ref="day" v-model="day" placeholder="aaa" dense disabled></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" class="py-0">
              <label>検査</label>
              <v-text-field ref="kensa" v-model="kensa" placeholder="aaa" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12"  class="py-0">
              <label>キロ</label>
              <v-text-field ref="kiro" v-model="kiro" placeholder=" " outlined dense></v-text-field>
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

  </div>
</template>

<script>
//  インポート
import Vue from 'vue'
import InputDayInfo from './InputDayInfo'
//  コンポーネントを登録
Vue.component('temp-inputdayinfo', InputDayInfo)

export default {
  data() {
		return {
      dialog: false,
    };
  },
  props: {
    kensa: {String,default:"車"},
    kiro: {String,default:"999.9km"},
    day: {String,default:"2020/20/20"},
    viewstyle: {String,default:""},
    // showModal: {Boolean,default:false},
  },
  methods: {
    viewinfo: function (event) { // eslint-disable-line
      alert(
        "検査 : " +
          this.kensa +
          "\n走行キロ : " +
          this.kiro +
          "\n日付 : " +
          this.day +
          "\nいろ : " +
          this.viewstyle
      )
    },
  },
  computed: {
    kensaV: function () {
      return this.kensa == " " ? "　" : this.kensa; //空なら空白にする
    }
  }
};
</script>

<style>
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
</style>