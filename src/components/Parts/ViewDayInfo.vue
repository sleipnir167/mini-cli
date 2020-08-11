<template>
  <div class="ViewDayInfo" v-on:click="viewinfo" v-bind:style="viewstyle">
    <div class="firstLine">
      <p>{{ kensaV }}</p>
    </div>
    <div class="secondLine">
      <p>{{ kiro }}</p>
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
.ViewDayInfo {
  width: 50px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  box-sizing:border-box;
  font-size: 10px;
  border: solid 1px black;
}

.ViewDayInfo .firstLine {
  height: 20px;
  width: 50px;
}

.ViewDayInfo .secondLine {
  height: 20px;
  width: 50px;
  border-top: dotted 1px black;
}
</style>