<template>
  <div class="ViewDayInfo" v-on:click="viewinfo">
    <div class="firstLine">
      <p>{{ kensa }}</p>
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
    end: {String,default:"2020/20/20"},
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
          this.day
      )
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
  border-top: solid 1px red;
  border-left: solid 1px red;
  border-bottom: solid 1px red;
  /* border-right: solid 1px red; */
}

.ViewDayInfo:last-child {
  /* border-bottom: solid 1px red; */
  border-right: solid 1px red;
}

.ViewDayInfo .firstLine {
  height: 20px;
  width: 50px;
}

.ViewDayInfo .secondLine {
  height: 20px;
  width: 50px;
  border-top: dotted 1px;
}
</style>