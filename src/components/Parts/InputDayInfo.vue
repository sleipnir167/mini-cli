<template>
  <!-- 検査、キロ入力ダイアログ -->
  <div id="InputDayInfo">
    <div class="modalWindow d-flex flex-column">
      <!-- 検査 -->
      <div class="d_kensa d-flex flex-row">
        <div class="d_label">検査</div>
        <input class="i_textbox" type="text" name="kensa" v-bind:value="kensa">
      </div>
      <!-- キロ -->
      <div class="d_kiro d-flex flex-row">
        <div class="d_label">キロ</div>
        <input class="i_textbox" type="text" name="kiro" v-bind:value="kiro">
      </div>
      <!-- ボタン -->
      <div class="d_button d-flex flex-row">
        <input type="button" class="i_button btn btn-primary" @click="$emit('close')" value="更新">
        <input type="button" class="i_button btn btn-primary" @click="$emit('close')" value="取消">
     </div>
    </div>
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