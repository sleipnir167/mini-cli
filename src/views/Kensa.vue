<template>
  <div class="about">
    <div class="body-group d-flex flex-column">
      <!-- ヘッダー -->

      <div class="header-group sticky-top">
        <header class="Header">
          <div class="container">
            <p class="text-muted">ミニ車両管理システム</p>
          </div>
        </header>
      </div>

      <!-- 中央領域 -->
      <div class="center-group d-flex flex-row">
        <!-- 左側領域 -->
        <div class="left-group d-flex flex-column">
          <div class="button-group d-flex flex-column">
            <button type="button" class="btn btn-secondary leftG" onclick="location.href='http://msok.mydns.jp:5500/index.html'">
              お知らせ
            </button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/2.html'">車両台帳</button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/3.html'">検査計画</button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/4.html'">使用実績</button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/5.html'">研修管理</button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/6.html'">装備管理</button>
            <button type="button" class="btn btn-secondary" onclick="location.href='http://msok.mydns.jp:5500/7.html'">マスタ管理</button>
          </div>
        </div>
        <!-- 中央領域 -->
        <div class="center-cente-group">
          <div class="Center-left-group d-flex flex-row">
            <!-- 車号 -->
            <div class="left-group d-flex flex-column">
              <div class="blank" style="height:95.5px;"></div>
              <div class="" style="height:41.5px; border:solid 1px black">TCXXX-0001</div>
              <div class="" style="height:41.5px; border:solid 1px black">TCXXX-0002</div>
              <div class="" style="height:41.5px; border:solid 1px black">M XXX-0003</div>
              <div class="" style="height:41.5px; border:solid 1px black">M'XXX-0004</div>
              <div class="" style="height:41.5px; border:solid 1px black">TCXXX-0005</div>
            </div>
            <div class="left-group d-flex flex-column">
              <div class= "d-flex flex-row">
                <temp-MoveYM></temp-MoveYM>
              </div>
              <div class= "d-flex flex-row">
                <div class="left d-flex flex-column">
                  <temp-gridym></temp-gridym>
                  <temp-gridym></temp-gridym>
                  <temp-gridym></temp-gridym>
                  <temp-gridym></temp-gridym>
                  <temp-gridym></temp-gridym>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- フッター -->
      <footer class="Footer fixed-bottom">
        <div class="container">
          <p class="text-muted">Place sticky footer content here.</p>
        </div>
      </footer>
    </div>
  </div>
</template>


<script>
//  インポート
import Vue from 'vue'
import GridYM from '../components/Parts/GridYM'
import MoveYM from '../components/Parts/MoveYM'

export default {
}

//  コンポーネントを登録
Vue.component('temp-gridym', GridYM)
Vue.component('temp-MoveYM', MoveYM)

</script>

<style scoped>
html {
  overflow: hidden;
}

html body {
  overflow: hidden;
}

.header-group {
  height: 30px;
  background-color: #3eb623;
}

.center-group {
  background-color: #6c757d;
  height: auto;
  width: auto;
}

.center-group .left-group {
  min-width: 110px;
  max-width: 110px;
  height: 100vh;
}

.center-group .left-group .button-group .btn-secondary {
  border-radius: 0px;
}

.center-group .card {
  -webkit-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
          box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
}

.center-group .container {
  border: solid 2px orange;
}

.center-group .center-cente-group {
  width: 100%;
  background-color: #ebebeb;
}

.Footer {
  height: 30px;
  background-color: #3eb623;
}

#calendar {
  border: solid 1px red;
  overflow: hidden;
}

#calendar .waku-Head {
  color: blue;
}

#calendar .waku-Data {
  color: blue;
}

#calendar .waku-left {
  color: blue;
  min-width: 150px;
}

#calendar .waku-right {
  color: blue;
  overflow-x: scroll;
}

#calendar .KensaGridLeftP {
  white-space: nowrap;
}

#calendar .KensaGridLeftP .KensaGridLeftC {
  height: 40px;
  text-align: center;
  border: solid 1px;
}

#calendar .KensaGridDataP {
  white-space: nowrap;
}

#calendar .KensaGridDataP .KensaGridDataC {
  height: 40px;
  width: 40px;
  display: inline-block;
  text-align: center;
  border: solid 1px;
}
</style>

