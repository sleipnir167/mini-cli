
<template>
  <v-app id="inspire">
    <v-container fluid div class="ma-1">

    <div id="sample01">
        <span></span>
    </div>

    </v-container>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
    })
  }
  
</script>

<style lang="scss" scoped>
#sample01 span {
  display: block;
  width: 120px; /* 開始時の幅 */
  height: 80px;
  background-color: #ffcc00;
  transition: 1.5s;
}
#sample01 span:hover {
  width: 300px; /* マウスオーバー時の幅 */
  opacity: 0.6; /* マウスオーバー時の透明度 */
}
</style>