<template>
  <div id="NewCarNavi5" class="container mt-5">
    <div>
			<h2>登録内容</h2>
      <p>車種: {{ form.syas }}</p>
      <p>形式: {{ form.keis }}</p>
      <p>車体番号: {{ form.syaNo }}</p>
      <p>新製日: {{ form.NewYmd }}</p>
      <p>箇所1: {{ form.kasho1 }}</p>
      <p>箇所2: {{ form.kasho2 }}</p>
      <p>箇所3: {{ form.kasho3 }}</p>
      <p>検査周期群: {{ form.KsGun }}</p>
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
