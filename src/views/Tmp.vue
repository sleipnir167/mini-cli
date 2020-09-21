<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h2>車体情報</h2>
    <v-container ma-4 pa-0>
      <v-row>
        <!-- 車種 -->
        <v-col cols="6">
          <v-select v-model="syas" :items="items" :rules="syasRules" label="車種" hint='EC,DLなど車種を選択します。' persistent-hint=true required outlined>
            <!-- ？のtooltipを表示 -->
            <template slot="append-outer">
              <v-tooltip right>
              <template v-slot:activator="{on}">
                <v-icon v-on="on">mdi-help-circle</v-icon>
              </template>
              <div>対象の車種が存在しない場合は</div>
              <div>マスタ管理の車種マスタから車種の追加を行ってください。</div>
              </v-tooltip>
            </template>
          </v-select>
        </v-col>

      </v-row>
      <v-row>
        <!-- 系式 -->
        <v-col cols="2">
          <v-text-field v-model="keis" :counter="5" :rules="nameRules" label="系式" suffix="系" required outlined ></v-text-field>
        </v-col>
        <!-- 車体番号 -->
        <v-col cols="2">
          <v-text-field v-model="syaNo" :counter="5" :rules="nameRules" label="車体番号" required outlined ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox> -->

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" > 次へ </v-btn>
  </v-form>
</template>

<script>
// import Vue from "vue";
// import QuestionTipText from '../../Parts/QuestionTipText';

// Vue.component("q-tip", QuestionTipText)

export default {
  data() {
		return {
				syas: null,
				keis: null,
        syaNo: null,
        NewYmd: null,
				firstName: null,
        lastName: null,
				SyasID: null,
        FBsyasMaster: [],
        
        valid: true,
        name: '',
        syasRules:[v => !!v || '入力してください'],
        nameRules: [
          v => !!v || '入力してください',
          v => (v && v.length <= 5) || '入力できるのは5文字までです。',
        ],
        select: null,
        items: [
          'SL',
          'EL',
          'EC',
          'DL',
          'DC',
          'PC',
          'TEC',
        ],
        checkbox: false,
    };
  },
  created(){
    // this.selSyasMaster()
    
  },
  methods: {
		submit: function(){
			this.$emit('update',{
				syas: this.syas,
				keis: this.keis,
        syaNo: this.syaNo,
        NewYmd: this.NewYmd,
				firstName: this.firstName,
				lastName: this.lastName,
				SyasID: this.SyasID
			});
    },
    validate () {
      if(this.$refs.form.validate()){
        this.submit()
          this.$emit('nextStep');
      }
    },
	}
};
</script>

<style scoped>

</style>

