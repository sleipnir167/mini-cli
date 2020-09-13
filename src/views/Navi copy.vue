<template>
  <div id="Navi">
    <!-- Componentナビシステム -->
    <form-Navi-NewCar v-if="stepNumber === 1"></form-Navi-NewCar>
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

<style>


#Navi {
  background-color: #ebebeb;
  overflow:scroll;
  width:100%;
  height:100%;
  margin:10px;
}

.NaviMain{
  height:300px;
  border: solid 1px red;
}

</style>

