<template>
  <div id="ViewDayInfo" v-on:click="viewinfo" v-bind:style="viewstyle">
    <div class="firstBox">
      <p>{{ kensaV }}</p>
    </div>
    <div class="secondBox">
      <p>{{ kiro }}</p>
    </div>
    
    <button v-on:click="openModal">Click</button>
    <div id="overlay" v-show="showContent">
        <div id="content">
          <p>これがモーダルウィンドウです。</p>
          <button v-on:click="closeModal">Close</button>
        </div>
    </div>
    
  </div>
</template>

<script>
// import InputDayInfo from './InputDayInfo'
export default {
  props: {
    kensa: {String,default:"車"},
    kiro: {String,default:"999.9km"},
    day: {String,default:"2020/20/20"},
    viewstyle: {String,default:""},
  },
  data() {
    return {
      showContent: false
    }
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
    },
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
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
#ViewDayInfo {
  width: 50px;
  box-sizing:border-box;
  font-size: 10px;
  border: solid 1px black;
  margin:0;
  padding:0;
  overflow:hiden;
}

#ViewDayInfo .firstBox {
  height: 20px;
  width: 100%;
}

#ViewDayInfo .secondBox {
  height: 20px;
  width: 100%;
  border-top: dotted 1px black;
}
</style>