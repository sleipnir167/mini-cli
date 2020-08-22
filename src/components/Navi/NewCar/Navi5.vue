<template>
  <div id="NewCarNavi5" class="container mt-5">
    <div>
			<h2>Confirmation</h2>
      <p>Name: {{ form.firstName }} {{ form.lastName }}</p>
      <p>Email: {{ form.Email }}</p>
      <p>Tel: {{ form.tel }}</p>
      <p>Birthday: {{ form.birthday }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
		form: Object
	},
};
</script>

<style>
</style>
