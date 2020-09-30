
<template>
  <v-app id="inspire">
    <v-container fluid div class="ma-1">

    <div id="demo">
      <button v-on:click="expand = !expand">btn</button>
      <div id="samplesen">
        aa
        <div v-bind:class="{ active: expand }"></div>
      </div>
    </div>

    </v-container>
  </v-app>
</template>

<script>
  export default {
    data () {
      return{
        expand:true,
        show:false,
      }
    },
  }
  
</script>

<style lang="scss" scoped>
#samplesen div {
  display: block;
  width: 120px; /* 開始時の幅 */
  height: 80px;
  background-color: #ffcc00;
  transition: 1.5s;
}

#samplesen .active {
  color:green;
  background-color: green;
  height: 300px; /* マウスオーバー時の幅 */
  opacity: 0.6; /* マウスオーバー時の透明度 */
}
</style>