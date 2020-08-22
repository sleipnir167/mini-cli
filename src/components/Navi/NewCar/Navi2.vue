<template>
  <div id="NewCarNavi2" class="container mt-5">
    <form @input="submit">
      <h2>Contact Info</h2>
      <div class="form-group">
        <label for="Email">Email</label>
        <input type="email" class="form-control" v-model="Email" placeholder="Enter email">
      </div>					
      <div class="form-group">
        <label for="tel">Tel</label>
        <input type="text" class="form-control" v-model="tel" placeholder="Enter phone number">
      </div>
    </form>
  </div>
</template>

<script>
export default {
	data(){
		return {
			Email: null,
			tel: null
		}
	},
	methods: {
		submit: function(){
			this.$emit('update',{
				Email: this.Email,
				tel: this.tel
			});
		}
	}
};

</script>

<style>

</style>

