<template>
  <v-card class="card-small mb-4">

    <!-- Card Header -->
    <v-card-header class="border-bottom">
      <v-card-text :inset="inset">{{ title }}</v-card-text>
    </v-card-header>

    <v-card ref="form">
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>車種</label>
            <v-text-field ref="syas" v-model="syas" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>系式</label>
            <v-text-field ref="keis" v-model="keis" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>型式</label>
            <v-text-field ref="tmp" v-model="tmp" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>車体番号</label>
            <v-text-field ref="syano" v-model="syano" placeholder=" " outlined dense></v-text-field>
          </v-col>
        </v-row>
        <!-- 区切り -->
        <v-divider></v-divider>
        <!-- スペース調整用 -->
        <v-col cols="12" sm="12" md="12" lg="12"></v-col> 

        <v-row>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>軌間</label>
            <v-tooltip right>
              <template v-slot:activator="{on}">
                <v-icon small v-on="on">mdi-help-circle</v-icon>
              </template>
              <v-card>
                <v-img src="/Picture/300px-Gauge_EN.svg.png" >
                </v-img>
                <v-card-text class="text--primary">
                  <div>軌間（きかん）は、鉄道の線路を構成する左右の軌条（レール）の間隔である。ゲージ ともいう。</div>
                  <div>軌条には幅があるため、軌条頭部の内側の最短距離と規定される（詳しくは後述）。</div>
                  <div>※Wikipediaから転載</div>
                </v-card-text>
              </v-card>
            </v-tooltip>
            <!-- <q-tip2 class="qtip2" qtext="車種 EC,DC,EL,DL,FC,SL"></q-tip2> -->
            <v-text-field ref="軌間" v-model="軌間" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" class="py-0">
            <label>電気方式</label>
            <v-text-field ref="電気方式" v-model="電気方式" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>最高運転速度</label>
            <v-text-field ref="最高運転速度" v-model="最高運転速度" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>設計最高速度</label>
            <v-text-field ref="設計最高速度" v-model="設計最高速度" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>起動加速度</label>
              <v-tooltip right>
                <template v-slot:activator="{on}">
                  <v-icon small v-on="on">mdi-help-circle</v-icon>
                </template>
                <v-card>
                  <v-img src="/Picture/220px-Starting_acceleration.png" >
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>起動加速度（きどうかそくど）は鉄道車両における性能指標の一つで、</div>
                    <div>走行速度が0のとき（起動時）の加速度を示す数値</div>
                    <div>※Wikipediaから転載</div>
                  </v-card-text>
                </v-card>
              </v-tooltip>
            <v-text-field ref="起動加速度" v-model="起動加速度" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>減速度</label>
            <v-text-field ref="減速度" v-model="減速度" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>編成定員</label>
            <v-text-field ref="編成定員" v-model="編成定員" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>編成重量</label>
            <v-text-field ref="編成重量" v-model="編成重量" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>全長</label>
            <v-text-field ref="全長" v-model="全長" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>全幅</label>
            <v-text-field ref="全幅" v-model="全幅" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>全高</label>
            <v-text-field ref="全高" v-model="全高" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>車体材質</label>
            <v-text-field ref="車体" v-model="車体" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" class="py-0">
            <label>台車</label>
            <v-tooltip right>
              <template v-slot:activator="{on}">
                <v-icon small v-on="on">mdi-help-circle</v-icon>
              </template>
              <v-card>
                <v-img src="/Picture/250px-Brill77E.jpeg" >
                </v-img>
                <v-card-text class="text--primary">
                  <div>鉄道車両の台車（てつどうしゃりょうのだいしゃ）とは、鉄道車両において、</div>
                  <div>車体に直結されていない、自由度のある走り装置のことである。</div>
                  <div>※Wikipediaから転載</div>
                </v-card-text>
              </v-card>
            </v-tooltip>
            <v-text-field ref="台車" v-model="台車" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" class="py-0">
            <label>主電動機</label>
            <v-tooltip right>
              <template v-slot:activator="{on}">
                <v-icon small v-on="on">mdi-help-circle</v-icon>
              </template>
              <v-card>
                <v-card-text class="text--primary">
                  <div>起主電動機（しゅでんどうき）は、電車や電気機関車などの走行のための動力を生ずる電動機（モーター）である。</div>
                  <div>ほとんどの場合台車内部におかれ、歯車を用いた駆動装置によって輪軸に回転を伝達する。</div>
                  <div>※Wikipediaから転載</div>
                </v-card-text>
              </v-card>
            </v-tooltip>
            <v-text-field ref="主電動機" v-model="主電動機" placeholder=" " outlined dense></v-text-field>
          </v-col>
          
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>歯車比</label>
            <v-tooltip right>
              <template v-slot:activator="{on}">
                <v-icon small v-on="on">mdi-help-circle</v-icon>
              </template>
              <v-card>
                <v-card-text class="text--primary">
                  <div>車比（はぐるまひ）は2つの歯車またはローラーチェーンでつながれた2つのスプロケットの歯数の比、</div>
                  <div>ないしは駆動ベルトでつながれた2つの滑車の周長の比である。</div>
                  <div>※Wikipediaから転載</div>
                </v-card-text>
              </v-card>
            </v-tooltip>
            <v-text-field ref="歯車比" v-model="歯車比" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3" class="py-0">
            <label>編成出力</label>
            <v-text-field ref="編成出力" v-model="編成出力" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" class="py-0">
            <label>制御方式</label>
            <v-text-field ref="制御方式" v-model="制御方式" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="12" class="py-0">
            <label>制動装置</label>
            <v-text-field ref="制動装置" v-model="制動装置" placeholder=" " outlined dense></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" class="py-0">
            <label>保安装置</label>
            <v-text-field ref="保安装置" v-model="保安装置" placeholder=" " outlined dense></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      
    </v-card>

  </v-card>
</template>

<script>
import Vue from "vue";
import QuestionTipText2 from '../Parts/QuestionTipText2';
Vue.component("q-tip2", QuestionTipText2)

export default {
  name: 'user-account-details',
  props: {
    title: {type: String,default: "基本情報",},
    syas: {type: String,default: 'EC',},
    keis: {type: String,default: 'E231系',},
    syano: {type: String,default: '7010',},

    軌間: {type: String,default: "1,067 mm",},
    電気方式: {type: String,default: "直流 1,500 V（架空電車線方式）",},
    最高運転速度: {type: String,default: "100 km/h",},
    設計最高速度: {type: String,default: "120 km/h",},
    起動加速度: {type: String,default: "3.0 km/h/s",},
    減速度: {type: String,default: "5.0 km/h/s",},
    編成定員: {type: String,default: "1,582名",},
    編成重量: {type: String,default: "318.8 t",},
    全長: {type: String,default: "20,000 mm",},
    全幅: {type: String,default: "2,950 mm",},
    全高: {type: String,default: "3,980 mm",},
    車体: {type: String,default: "ステンレス",},
    台車: {type: String,default: "軸梁式ボルスタレス台車",},
    主電動機: {type: String,default: "かご形三相誘導電動機",},
    歯車比: {type: String,default: "1:6.06",},
    編成出力: {type: String,default: "3,360 kW",},
    制御方式: {type: String,default: "IGBT素子VVVFインバータ制御",},
    制動装置: {type: String,default: "回生ブレーキ併用電気指令式ブレーキ・純電気ブレーキ",},
    保安装置: {type: String,default: "ATS-Ps",},
	
    teiin: {
      type: String,
      default: '1,524名',
    },
    tmp: {
      type: String,
      default: 'XXX',
    },
  },
};
</script>

<style lang="scss" scoped>

.v-tooltip__content.menuable__content__active {
  opacity: 1!important;
}


</style>