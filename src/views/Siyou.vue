<template>
  <!-- 中央領域 -->
  <div id="kensa">
    <div class="HeaderButton-Group d-flex flex-row">
      <button type="button" class="btn btn-primary">あれ</button>
      <button type="button" class="btn btn-primary">それ</button>
      <button type="button" class="btn btn-primary">どれ</button>
      <button type="button" class="btn btn-primary">これ</button>
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
	.wj-flexgrid {
		max-height: 250px; 
		margin: 10px 0;
	}
	
	/* style frozen cells */
	#sample-grid .wj-cell.wj-frozen:not(.wj-header):not(.wj-group):not(.wj-state-selected):not(.wj-state-multi-selected),
	#sample-grid .wj-cell.wj-frozen.wj-alt:not(.wj-header):not(.wj-group):not(.wj-state-selected):not(.wj-state-multi-selected) {
		background: rgb(255,255,125);
	}
</style>

