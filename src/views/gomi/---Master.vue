<template>
  <div id="Master">
    <!-- Componentナビシステム -->
    <h1>Master管理</h1>
    <button type="button" class="btn btn-outline-success">車種マスタ</button>
    <button type="button" class="btn btn-outline-success">形式マスタ</button>
    <div class="example">hi</div>
  </div>
</template>

<script>
import Vue from "vue";
import NewCarMain from '../components/Navi/NewCar/Main';

//  コンポーネントを登録
Vue.component("form-Navi-NewCar", NewCarMain);

export default {
  data() {
    return {
			stepNumber: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
#Master {
  background-color: #ebebeb;
  overflow:scroll;
  width:100%;
  height:100%;
  margin:10px;
  padding:10px;
  border:solid 1px red;

  & button{
      padding: 10px;
      margin: 10px;
  }
}

</style>

