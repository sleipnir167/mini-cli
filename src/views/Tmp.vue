<template>
  <v-app id="inspire">
    <v-container fluid>

      <div class="demo_stage">
        <div class="demo_wrap" data-order="left">
        <span class="demo_item anime"></span>
        </div>
      </div>

    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return{
    }
  },
}
</script>

<style lang="scss" scoped>

.demo_item{
  width: 50px;
  height: 30px;
  border-radius: 10px;
  background-image: url(/Picture/icon/tansya.png);
  background-size: 100% 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  display: block;
  position: relative;
}
.demo_item.anime{
    animation-name: upDown;
    animation-iteration-count: infinite;
    animation-duration: 0.15s;
    animation-direction: alternate;
    animation-timing-function: steps(2);
    transition-duration: .3s;
    transition-property: transform;
}

.demo_stage{
    position: relative;
    width: 100%;
    height: 65px;
    top: 0px;
    display: block;
	border-bottom: solid #777 1px;
}

.demo_wrap{
	display: block;
    position: absolute;
    top: 20px;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-duration: 120s;
    animation-iteration-count: 1;
	margin-right: -25px;
}

.demo_wrap[data-order="left"] {
    animation-name: GoLeft;
}
.demo_wrap[data-order="right"] {
    animation-name: GoRight;
}

[data-order="right"] > .demo_item {
    transform: rotateY(180deg);
}

@keyframes GoLeft {
    0% {
        right: 10%;
    }
    100% {
        right: 90%;
    }
}
@keyframes GoRight {
    0% {
        right: 90%;
    }
    100% {
        right: 10%;
    }
}

@keyframes upDown {
    0% {
        top: 0;
    }
    100% {
        top: 3px;
    }
}
</style>