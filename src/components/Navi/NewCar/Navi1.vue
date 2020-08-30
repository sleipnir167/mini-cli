
<template>
  <div id="NewCarNavi1" class="container mt-5">
      <form @input="submit">
        <h2>車体情報</h2>
        
        <div class="form-group">
          <label for="syas">車種  
            <span class="badge badge-danger">必須</span>
            <q-tip class="qtip" qtext="車種 EC,DC,EL,DL,FC,SL"></q-tip>
          </label>
          <input type="text" class="form-control" v-model="syas" placeholder="車種">
        </div>	

        <div class="form-group">
          <label for="keis">形式  
            <span class="badge badge-danger">必須</span>
            <q-tip class="qtip" qtext="例)TC XXX等"></q-tip>
          </label>
          <input type="text" class="form-control" v-model="keis" placeholder="形式">
        </div>

        <div class="form-group">
          <label for="syaNo">車体番号  <span class="badge badge-danger">必須</span></label>
          <input type="text" class="form-control" v-model="syaNo" placeholder="車体番号">
        </div>					

        <div class="form-group">
          <label for="NewYmd">新製日  <span class="badge badge-info">任意</span></label>
          <input type="date" class="form-control" v-model="NewYmd" placeholder="新製日" />
        </div>

        <div class="form-group">
          <label for="Kasho1">箇所1  <span class="badge badge-info">任意</span></label>
          <input type="text" class="form-control" v-model="kasho1" placeholder="箇所1">
        </div>
        <div class="form-group">
          <label for="Kasho2">箇所2  <span class="badge badge-info">任意</span></label>
          <input type="text" class="form-control" v-model="Kasho1" placeholder="箇所2">
        </div>

        <div class="form-group">
          <label for="Kasho3">箇所3  <span class="badge badge-info">任意</span></label>
          <input type="text" class="form-control" v-model="Kasho3" placeholder="箇所3">
        </div>   
      </form>
    </div>
</template>

<script>
import Vue from "vue";
import QuestionTipText from '../../Parts/QuestionTipText';

Vue.component("q-tip", QuestionTipText)

export default {
  data() {
		return {
				syas: null,
				keis: null,
        syaNo: null,
        NewYmd: null,
				firstName: null,
				lastName: null
    };
  },
  methods: {
		submit: function(){
			this.$emit('update',{
				syas: this.syas,
				keis: this.keis,
        syaNo: this.syaNo,
        NewYmd: this.NewYmd,
				firstName: this.firstName,
				lastName: this.lastName
			});
		}
	}
};
</script>

<style scoped>
.sample li {
  position:relative;
  margin:20px 0px;
  padding: 10px;
  list-style-type: none;
}
.sample li:hover {
  background: #ddbbbb;
}
.tooltips {
  display: none;
  position: absolute;
  bottom: -2.5em;
  z-index: 1000;
  padding: 0.5em;
  color: #FFFFFF;
  background: #cc3333;
  border-radius: 0.5em;
}
.tooltips:after {
  width: 100%;
  content: "";
  display: block;
  position: absolute;
  left: 0.5em;
  top: -8px;
  border-top:8px solid transparent;
  border-left:8px solid #c72439;
}

.sample li:hover .tooltips {
  display: block;
}

.qtip {
  display: inline-block;
  vertical-align: middle;
  margin-left:5px;
}
</style>

