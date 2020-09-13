<template>
  <div id="Kensyu">
    <v-app id="inspire">
      <!-- <v-row align="center" justify="space-around">
        <h1>ste</h1>
        <v-icon class="icon_spin">mdi-minus-circle</v-icon>
        <v-icon class="icon_spin">mdi-camera-iris</v-icon>
        <v-icon class="icon_spin">mdi-ubuntu</v-icon>
        <v-icon class="icon_spin">mdi-backup-restore</v-icon>
        <v-icon class="icon_spin">mdi-google-circles-communities</v-icon>
        <h1>ste</h1>
      </v-row> -->

      <!-- <div id="app">
        <textarea v-model="message"></textarea>
        <div :style="styles"></div>
      </div> -->

      <v-row align="center" justify="space-around">
        <!-- 1つ目 -->
        <v-col>
          <div style="position:relative;width:200px;height:200px">
            <!-- 右側の180度分の領域 -->
            <div class="square" style="right:0">
              <div class="square" style="right:100%;transform-origin: 100% 50%;" :style="rightAngle">
                <div class="outside_circle" style="left:0"></div>
              </div>
            </div>
            <!-- 左側の180度分の領域 -->
            <div class="square" style="left:0;">
              <div class="square" style="left:100%;transform-origin: 0% 50%;" :style="leftAngle">
                <div class="outside_circle" style="right:0">
                </div>
              </div>
            </div>
            <!-- 文字 -->
            <div style="position:absolute;width:200px;line-height: 200px;text-align: center;font-size:20px;font-weight: bold;">
              <span v-if="tweetLength <= 144"> {{ tweetLength}}</span>
              <span v-else> {{ 144 - tweetLength}}</span>
            </div>
            <!-- 内側線 -->
            <div class="inside_circle icon_spin" style="position:absolute;">
              <!-- 謎のドット -->
              <div class="inside_dot" style="position:absolute;">
              </div>
            </div>
          </div>
        </v-col>

                <!-- 1つ目 -->
        <v-col>
          <div style="position:relative;width:200px;height:200px">
            <!-- 右側の180度分の領域 -->
            <div class="square" style="right:0">
              <div class="square" style="right:100%;transform-origin: 100% 50%;" :style="rightAngle">
                <div class="outside_circle" style="left:0"></div>
              </div>
            </div>
            <!-- 左側の180度分の領域 -->
            <div class="square" style="left:0;">
              <div class="square" style="left:100%;transform-origin: 0% 50%;" :style="leftAngle">
                <div class="outside_circle" style="right:0">
                </div>
              </div>
            </div>
            <!-- 文字 -->
            <div style="position:absolute;width:200px;line-height: 200px;text-align: center;font-size:20px;font-weight: bold;">
              <span v-if="tweetLength <= 144"> {{ tweetLength}}</span>
              <span v-else> {{ 144 - tweetLength}}</span>
            </div>
            <!-- 内側線 -->
            <div class="inside_circle icon_spin" style="position:absolute;">
              <!-- 謎のドット -->
              <div class="inside_dot" style="position:absolute;">
              </div>
            </div>
          </div>
        </v-col>

                <!-- 1つ目 -->
        <v-col>
          <div style="position:relative;width:200px;height:200px">
            <!-- 右側の180度分の領域 -->
            <div class="square" style="right:0">
              <div class="square" style="right:100%;transform-origin: 100% 50%;" :style="rightAngle">
                <div class="outside_circle" style="left:0"></div>
              </div>
            </div>
            <!-- 左側の180度分の領域 -->
            <div class="square" style="left:0;">
              <div class="square" style="left:100%;transform-origin: 0% 50%;" :style="leftAngle">
                <div class="outside_circle" style="right:0">
                </div>
              </div>
            </div>
            <!-- 文字 -->
            <div style="position:absolute;width:200px;line-height: 200px;text-align: center;font-size:20px;font-weight: bold;">
              <span v-if="tweetLength <= 144"> {{ tweetLength}}</span>
              <span v-else> {{ 144 - tweetLength}}</span>
            </div>
            <!-- 内側線 -->
            <div class="inside_circle icon_spin" style="position:absolute;">
              <!-- 謎のドット -->
              <div class="inside_dot" style="position:absolute;">
              </div>
            </div>
          </div>
        </v-col>

                <!-- 1つ目 -->
        <v-col>
          <div style="position:relative;width:200px;height:200px">
            <!-- 右側の180度分の領域 -->
            <div class="square" style="right:0">
              <div class="square" style="right:100%;transform-origin: 100% 50%;" :style="rightAngle">
                <div class="outside_circle" style="left:0"></div>
              </div>
            </div>
            <!-- 左側の180度分の領域 -->
            <div class="square" style="left:0;">
              <div class="square" style="left:100%;transform-origin: 0% 50%;" :style="leftAngle">
                <div class="outside_circle" style="right:0">
                </div>
              </div>
            </div>
            <!-- 文字 -->
            <div style="position:absolute;width:200px;line-height: 200px;text-align: center;font-size:20px;font-weight: bold;">
              <span v-if="tweetLength <= 144"> {{ tweetLength}}</span>
              <span v-else> {{ 144 - tweetLength}}</span>
            </div>
            <!-- 内側線 -->
            <div class="inside_circle icon_spin" style="position:absolute;">
              <!-- 謎のドット -->
              <div class="inside_dot" style="position:absolute;">
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>


<script>
  //  インポート
  import Vuetify from "vuetify";

  export default {
    vuetify: new Vuetify(),
    FBSyasData:[],
    FBitem:null,
    created(){

    },
    data () {
      return{
        message:"Hello678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
        bui:{bui:1, Max:400, limit:100, Now:100}
      }
    },
    mounted() {

    },
    computed:{
      styles(){
        let width = this.message.length/144*100
        return {
          "border": "5px solid red",
          "width": width + '%'
        }
      },
      textLength(){
        return this.message.length;
      },
      currentAngle(){
        console.log(Math.floor(360*this.textLength/144));
        return Math.floor(360*this.textLength/144);
      },  
      rightAngle(){
        console.log("rightAngle")
        let angle = Math.min(this.currentAngle, 180);
        return {
          "transform": "rotate(" + angle + "deg)",
        }
      },
      leftAngle(){
        console.log("leftAngle")
        let angle = Math.min(Math.max(this.currentAngle-180, 0),180);
        return {
          "transform": "rotate(" + angle + "deg)",
        }
      },    
      tweetLength(){
        return this.message.length;
      }    
    }
  }
</script>

<style>
.icon_spin{
  animation: rotate-anime 1s linear infinite;
}
@keyframes rotate-anime {
  0%  {transform: rotate(0);}
  100%  {transform: rotate(-360deg);}
}

.square{
  position:absolute;
  width:100px;
  height:200px;
  overflow:hidden;
}
.outside_circle{
  position:absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border:10px solid green;
  box-sizing: border-box;
}
.inside_circle{
  position:absolute;
  width: 170px;
  height: 170px;
  left:15px;
  top:15px;
  border-radius: 50%;
  border:15px solid gray;
  box-sizing: border-box;
}
.inside_dot{
  position:absolute;
  width: 10px;
  height: 10px;
  left:10px;
  top:10px;
  border-radius: 50%;
  border:5px solid rgba(0, 0, 0, 0.397);
  box-sizing: border-box;
}

</style>
