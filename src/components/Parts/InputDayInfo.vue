<template>
  <div id="InputDayInfo">
    <div class="dflex d-flex flex-column">
      <span>✕</span>
      <div class="kensa">
        <span>検査</span>
        <input type="text" name="kensa" id="">
      </div>
      <div class="kiro">
        <span>キロ</span>
        <input type="text" name="kiro" id="">
      </div>

      <div class="dflex d-flex flex-row">
        <input type="button" class="btn btn-primary" value="更新">
        <input type="button" class="btn btn-primary" value="取消">
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
  // data() {
  //   return {
  //     kensa: "車",
  //     kiro: "200.2km",
  //     day: "2018/06/01",
  //   }
  // },
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
  border:solid 1px red;
}

#InputDayInfo div {
  margin: 5px;
  padding: 5px;
}

#btn{
  width:100px;
}
</style>