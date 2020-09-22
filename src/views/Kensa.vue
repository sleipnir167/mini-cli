<template>
  <!-- 中央領域 -->
  <div id="kensa">
    <div class="HeaderButton-Group d-flex flex-row">
      <!-- <button type="button" class="btn btn-primary">処理1</button>
      <button type="button" class="btn btn-primary">処理2</button>
      <button type="button" class="btn btn-primary">処理3</button>
      <button type="button" class="btn btn-primary">処理4</button> -->
    </div>
    <hr>
    <div class="kensaYM d-flex flex-row">
      <!-- 車号 -->
      <div class="syagou d-flex flex-column">
        <div class="blank" style="height:95.5px; "></div>
        <div class="" style="height:41.5px; border:solid 1px black">TCXXX-0001</div>
        <div class="" style="height:41.5px; border:solid 1px black">TCXXX-0002</div>
        <div class="" style="height:41.5px; border:solid 1px black">M XXX-0003</div>
        <div class="" style="height:41.5px; border:solid 1px black">M'XXX-0004</div>
        <div class="" style="height:41.5px; border:solid 1px black">TCXXX-0005</div>
        <div class="" style="height:41.5px; border:solid 1px black">TCXXX-0006</div>
        <div class="" style="height:41.5px; border:solid 1px black">TCXXX-0007</div>
        <div class="" style="height:41.5px; border:solid 1px black">TCXXX-0008</div>
        <div class="" style="height:41.5px; border:solid 1px black">TCXXX-0009</div>
        <div class="" style="height:41.5px; border:solid 1px black">TCXXX-0010</div>
      </div>
      <!-- データ部 -->
      <div class="data d-flex flex-column">
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
</style>

