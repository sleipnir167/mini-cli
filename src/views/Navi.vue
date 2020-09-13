<template>
  <v-app id="inspire">
    <div>
      <v-stepper
        v-model="editpage"
        :alt-labels="altLabels"
      >
        <!-- ヘッダー -->
        <v-stepper-header>
          <template v-for="n in steps">
            <v-stepper-step
              :key="`${n}-step`"
              :complete="editpage > n"
              :step="n"
              :editable="editable"
            >
              {{ HeaderName[n] }}
            </v-stepper-step>

            <v-divider v-if="n !== steps" :key="n" ></v-divider>
          </template>
        </v-stepper-header>

        <!-- アイテム -->
        <v-stepper-items>
          <v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n" >
            <v-card  height="600px" elevation="3">
              <template v-if="n === 1">
                <form-navi1 @update="updateForm" @nextStep="nextStep(n)"></form-navi1>
              </template>
              <template v-else-if="n === 2">
                <form-navi2 @update="updateForm" @nextStep="nextStep(n)"></form-navi2>
              </template>
              <template v-else-if="n === 3">
                <form-navi3 @update="updateForm" @nextStep="nextStep(n)"></form-navi3>
              </template>
              <template v-else-if="n === 4">
                <form-navi4 @update="updateForm" @nextStep="nextStep(n)"></form-navi4>
              </template>
              <template v-else-if="n === 5">
                <form-navi5 @update="updateForm" @nextStep="nextStep(n)" :form="form"></form-navi5>
              </template>
              <template v-else-if="n === 6">
                <form-navi6 @update="updateForm" @nextStep="nextStep(n)"></form-navi6>
              </template>

            </v-card>

            <v-divider></v-divider>

            <v-card>
              <v-btn color="primary" @click="nextStep(n)" > 次へ </v-btn>
              <v-btn text>Cancel</v-btn>
            </v-card>

            <v-card class="mb-12" color="grey lighten-1" height="400px" >
              <!-- データ表示するならこれ -->
              <pre><code>{{ form }}</code></pre>
            </v-card>



          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-app>
</template>

<script>
import Vue from "vue";
import NewCarMain from '../components/Navi/NewCar/Main';

//  コンポーネントを登録
Vue.component("form-Navi-NewCar", NewCarMain);

export default {
  data () {
    return {
      editpage: 1,
      steps: 6,
      altLabels: true,
      editable: true,
      HeaderName: ["","台帳登録","検査登録","装備入力","その他","確認","完了"],
      ItemName: ["<form-navi1></form-navi1>","<form-navi2></form-navi2>","装備入力","その他","確認","完了"],
      rules:["1","1","1","1","1"],
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
    }
  },

  watch: {
    steps (val) {
      if (this.editpage > val) {
        this.editpage = val
      }
    },
  },

  methods: {
		updateForm:function(formData){
			Object.assign(this.form, formData);
    },
    onInput (val) {
      this.steps = parseInt(val)
    },
    nextStep (n) {
      if (n === this.steps) {
        this.editpage = 1
      } else {
        this.editpage = n + 1
      }
    },
  },
};
</script>

<style>


</style>

