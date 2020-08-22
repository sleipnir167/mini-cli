<template>
  <div id="NaviStepBar">
    <ol class="stepBar">
      <li v-bind:class='{visited:index<stepNumber}' v-for="(item, index) in items" :key="item.key">
        <span>{{ index + 1 }}</span><br />{{ item }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props:{
    stepNumber:Number,
		items: Object
	},
};
</script>

<style scoped>
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
  background: #4d648d;
}
.stepBar .visited span {
  background: #4d648d;
}
</style>
