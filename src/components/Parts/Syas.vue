<template>
  <!-- <div id="ViewDayInfo" v-on:click="viewinfo" v-bind:style="viewstyle"> -->
  <div id="ViewDayInfo">
    <div class="nakami" v-on:click="openModal" v-bind:style="viewstyle">
      <div class="firstBox">
        <p>{{ kensaV }}</p>
      </div>
      <div class="secondBox">
        <p>{{ kiro }}</p>
      </div>
    </div>
    <!-- <button v-on:click="openModal">Click</button> -->
    <!-- <div id="overlay" v-show="showModal">
        <div id="content">
          <p>これがモーダルウィンドウです。</p>
          <button v-on:click="closeModal">Close</button>
        </div>
    </div> -->
    
    <temp-inputdayinfo  v-show="showModal" @close="closeModal"></temp-inputdayinfo>
  </div>
</template>

<script>
//  インポート
import Vue from 'vue'
import InputDayInfo from './InputDayInfo'
//  コンポーネントを登録
Vue.component('temp-inputdayinfo', InputDayInfo)

export default {
  props: {
    kensa: {String,default:"車"},
    kiro: {String,default:"999.9km"},
    day: {String,default:"2020/20/20"},
    viewstyle: {String,default:""},
    showModal: {Boolean,default:false},
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
    openModal: function(){
      this.showModal = true
    },
    closeModal: function(){
      this.showModal = false
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