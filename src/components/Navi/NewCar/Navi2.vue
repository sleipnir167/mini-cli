<template>
  <div id="NewCarNavi2" class="container mt-5">
    <form @input="submit">
      <h2>検査情報</h2>
      <div class="form-group">
        <label for="KsGun">検査周期群</label>
        <input type="KsGun" class="form-control" v-model="KsGun" placeholder="検査周期群">
      </div>
    </form>
  </div>
</template>

<script>
export default {
	data(){
		return {
			KsGun: null,
			tel: null
		}
	},
	methods: {
		submit: function(){
			this.$emit('update',{
				KsGun: this.KsGun,
				tel: this.tel
			});
		}
	}
};

</script>

<style>

</style>

