<template>
  <div id="NewCarMain" class="container mt-5">
    <form-navistepbar v-bind:stepNumber=stepNumber v-bind:items="stepItems"></form-navistepbar>

    <div class="row">
      <div class="col-md-8">
        <h1>新車登録</h1>
        <h2>Step:{{ stepNumber }}   {{stepItems[stepNumber-1]}}</h2>
        <keep-alive>
          <form-navi1 v-if="stepNumber === 1" @update="updateForm"></form-navi1>
          <form-navi2 v-if="stepNumber === 2" @update="updateForm"></form-navi2>
          <form-navi3 v-if="stepNumber === 3" @update="updateForm"></form-navi3>
          <form-navi4 v-if="stepNumber === 4" @update="updateForm"></form-navi4>
          <form-navi5 v-if="stepNumber === 5" @update="updateForm" v-bind:form="form"></form-navi5>
          <form-navi6 v-if="stepNumber === 6" v-bind:form="form"></form-navi6>
        </keep-alive>
      </div>
      <pre><code>{{ form }}</code></pre>
    </div>
    <button class="btn btn-primary" @click="backStep" v-show="stepNumber != 1">Back</button>
    <button class="btn btn-primary" @click="nextStep" v-show="stepNumber != 6">Next</button>
  </div>
</template>

<script>
import Vue from "vue";
import NaviStepBar from '../NaviStepBar';
import Navi1 from './Navi1';
import Navi2 from './Navi2';
import Navi3 from './Navi3';
import Navi4 from './Navi4';
import Navi5 from './Navi5';
import Navi6 from './Navi6';

//  コンポーネントを登録
Vue.component("form-navistepbar", NaviStepBar);
Vue.component("form-navi1", Navi1);
Vue.component("form-navi2", Navi2);
Vue.component("form-navi3", Navi3);
Vue.component("form-navi4", Navi4);
Vue.component("form-navi5", Navi5);
Vue.component("form-navi6", Navi6);

export default {
  data() {
    return {
			stepNumber: 1,
			form: {
        syas:null,
        keis:null,
        syaNo:null,
				NewYmd: null,
				Kasho1: null,
				Kasho2: null,
				Kasho3: null,
				KsGun: null,
				firstName: null,
				lastName: null,
				Email: null,
				tel: null,
        birthday: null,
        SyasID:null
      },
      stepItems:["台帳登録","検査登録","装備入力","その他","確認","完了"]
    };
  },
  methods:{
		updateForm:function(formData){
			Object.assign(this.form, formData);
    },
    backStep:function(){
      this.stepNumber--;
    },			
    nextStep:function(){
      this.stepNumber++;
    },
  }
};
</script>

<style>

</style>

