<template>
  <!-- 実績入力画面 -->
  <div id="InputDayInfo">
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
        <v-btn color="primary" @click="$emit('close')">更新</v-btn>
        <v-btn color="primary" outlined @click="$emit('close')">取消</v-btn>
      </v-card-actions>
    </v-card>

  </div>

</template>

<script>
export default {
  props: {
    kensa: {String,default:"車"},
    kiro: {String,default:"999.9km"},
    day: {String,default:"2020/20/20"},
    viewstyle: {String,default:""},
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
    }
  },
  computed: {
    kensaV: function () {
      return this.kensa == " " ? "　" : this.kensa; //空なら空白にする
    }
  }
};
</script>


<style>

#InputDayInfo{
  z-index:1;

  /* 画面全体を覆う設定 */
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  /* 画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;
}

#InputDayInfo .modalWindow {
  border: solid 5px rgb(32, 185, 45);
  background-color:white;
  padding:20px;
}

#InputDayInfo .modalWindow *{
  padding:5px;
}

/* ラベル汎用 */
#InputDayInfo .d_label{
  width:60px;
  border: solid 1px;
}

/* テキスト入力汎用 */
#InputDayInfo .i_textbox{
  border: solid 1px;
}

/* ボタン汎用 */
#InputDayInfo .i_button{
  border: solid 1px;
}

</style>