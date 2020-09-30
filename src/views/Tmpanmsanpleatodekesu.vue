
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

    <!-- <template v-if="expand"> -->
    <template>
      <div class="testpand" v-bind:class="{ active: expand }">
        <div >
          <tr class="day">
            <td style="height:41.5px; border:solid 1px black">
              aaa
            </td>
            <td class="ViewDayInfo" cols="1" v-for="dayinfo in dayinfos" :key="dayinfo">
              <v-card>
                <div class="firstBox">
                  <p>vvv</p>
                </div>
                <div class="secondBox">
                  <p>aa</p>
                </div>
              </v-card>
            </td>
          </tr>
        </div>
      </div>
    </template>

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

.testpand div{
  background-color:blue;
  transition: 1.5s;
}

.testpand .active {
  background-color:red;
}
</style>