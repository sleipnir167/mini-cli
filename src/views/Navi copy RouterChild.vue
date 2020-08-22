<template>
  <div id="Navi">
    <!-- <ol class="stepBar">
      <li class="visited"><span>1</span><br>新車登録</li>
      <li><span>2</span><br>検査登録</li>
      <li><span>3</span><br>装備入力</li>
      <li><span>4</span><br>その他</li>
      <li><span>5</span><br>確認</li>
      <li><span>6</span><br>完了</li>
    </ol> -->

    <!-- Componentナビシステム -->
    <form-Navi-NewCar v-if="stepNumber === 1"></form-Navi-NewCar>

    <!-- テスト用 -->
    <div class="NaviMain">
        <div>
          <p>
            ここはページ１です。
          </p>
          <router-link to="/page2">Go to page2</router-link>
        </div>
    </div>
    <div class="button">
      <input type="button" class="btn btn-primary" value="<<" />
      <input type="button" class="btn btn-primary" value=">>" />
    </div>

    <!-- チャイルドを使用した子Router -->
    <hr>
    <div id="app">
      <div id="nv">
        <h1>Named Views</h1>
        <ul>
          <li>
            <router-link to="/childA">/</router-link>
          </li>
          <li>
            <router-link to="/childB">/other</router-link>
          </li>
          <li>
            <router-link to="/childC">/other</router-link>
          </li>
        </ul>
        <router-view class="view one"></router-view>
        <router-view class="view two" name="a"></router-view>
        <router-view class="view three" name="b"></router-view>
      </div>        
    </div>
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
			form: {
				firstName: null,
				lastName: null,
				Email: null,
				tel: null,
				birthday: null
			}
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

/* 上部ステップ表示用>>> */
.stepBar {
  display: flex;
  max-width: 400px;
  position: relative;
  margin: 20px auto;
  text-align: center;
}
.stepBar li {
  font-size: 12px;
  list-style: none;
  position: relative;
  width: 33.333%;
}
.stepBar li:after {
  background: #3eb623;
  content: "";
  width: calc(100% - 24px);
  height: 4px;
  position: absolute;
  left: calc(-50% + 12px);
  top: 10px;
}
.stepBar li:first-child:after {
  display: none;
}
.stepBar li span {
  background: #3eb623;
  color: #ffffff;
  display: inline-block;
  height: 24px;
  margin-bottom: 5px;
  line-height: 24px;
  width: 24px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.stepBar .visited:after {
  background: #4D648D;
}
.stepBar .visited span {
  background: #4D648D;
}
/* <<<上部ステップ表示用 */

</style>

