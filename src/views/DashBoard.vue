<template>
  <div id="DashBoard">
    <v-app>
      <v-main>
        <div>
          <!-- 車両数 -->
          <v-row>
            <!-- 車両数 -->
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="cyan fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 cyan--text">
                            <h5 class="text-truncate text-uppercase">車両数</h5>
                            <h1>53</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
            <!-- 編成数 -->
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="primary fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 primary--text">
                            <h5 class="text-truncate text-uppercase">編成数</h5>
                            <h1>11</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
            <!-- 入場車両 -->
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="success fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 success--text">
                            <h5 class="text-truncate text-uppercase">入場車両</h5>
                            <h1>5</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
          </v-row>

          <!-- 曜日スライダー -->
          <!-- <v-row>
            <v-col>
              <v-card scrollable elevation="4" class="overflow-y-auto">
                <v-slider
                  v-model="week_Position"
                  :max="6"
                  :tick-labels="week_labels"
                  class="mx-4"
                  ticks
                ></v-slider>
              </v-card>
            </v-col>
          </v-row> -->

          <!-- 2段目 -->
          <v-row>
            <!-- 故障情報 -->
            <v-col lg="4" cols="md" class="pb-2">
              <v-card class="dark">
                  <v-card-title class="font-weight-light text-truncate cyan--text">
                    本日の 故障情報
                  </v-card-title>
                  <v-card-text>
                      <v-carousel
                          cycle
                          height="180"
                          interval="2000"
                          hide-delimiter-background
                          show-arrows-on-hover>
                          <v-carousel-item>
                            <div class="row no-gutters">
                              <div class="col">
                                <div>
                                  <h2 class="cyan--text">Tc 111-0001
                                    <v-btn class="mb-0 cyan--text" outlined small fab color="indigo">
                                      <v-icon>mdi-magnify</v-icon>
                                    </v-btn>
                                  </h2>
                                  <h3 class="mb-0 cyan--text">ブレーキ装置</h3>
                                  <p class="mt-1 cyan--text">発生駅：A駅</p>
                                </div>
                              </div>
                            </div>
                          </v-carousel-item>

                          <v-carousel-item>
                              <div class="row no-gutters">
                                  <div class="col">
                                    <div>
                                      <h2 class="cyan--text">Tc 999-0001
                                        <v-btn class="mb-0 cyan--text" outlined small fab color="indigo">
                                          <v-icon>mdi-magnify</v-icon>
                                        </v-btn>
                                      </h2>
                                      <h3 class="mb-0 cyan--text">補助原電装置</h3>
                                      <p class="mt-1 cyan--text">発生駅：B駅</p>
                                    </div>
                                  </div>
                              </div>
                          </v-carousel-item>
                          
                      </v-carousel>
                  </v-card-text>
              </v-card>
            </v-col>

            <!-- 中間 -->
            <v-col lg="4" cols="md" class="pb-2">
              <v-card min-height="252">
                <v-card-title class="font-weight-light text-truncate primary--text">
                  一斉点検実施状況
                </v-card-title>
                
                <v-card-text>
                  <p class="primary--text subtitle-1">
                    EXX系の台車確認状況
                  </p>
                  <div class="my-5">
                    <v-progress-linear
                      color="primary"
                      height="10"
                      value="60"
                      striped
                    ></v-progress-linear>
                    <h3 class="font-weight-light text-truncate primary--text" >30/53(60%)</h3>

                  </div>
                </v-card-text>

                <v-card-actions>
                  <v-btn outlined rounded color="primary">
                    Details
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <!-- 故障情報の右の右 -->
            <v-col lg="4" cols="md" class="pb-2">
              <v-card min-height="252">
                <v-card-title class="font-weight-light text-truncate success--text">
                  On-boarding
                </v-card-title>
                <v-card-text>
                  <span class="success--text subtitle-1">
                    Judy Pincus
                  </span>
                  <div class="mb-3">
                    @jpincus
                    <h3>Service Manager</h3>
                    <span class="overline">Start date: 5/12/2020</span>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn outlined rounded color="success">
                    View
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          
          <!-- 3段目 -->
          <v-row>
            <!-- 作業実施状況 -->
            <v-col lg="4" >
              <v-card class="mx-auto">
                <v-list-item two-line>
                  <v-list-item-content class="cyan--text">
                    <v-list-item-title class="headline">本日の作業実施状況</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
            
                <v-list-item>
                  <v-list-item-icon >
                    <v-icon class="cyan--text">mdi-send</v-icon>
                  </v-list-item-icon>
                  <v-list-item-subtitle class="cyan--text">23両</v-list-item-subtitle>
                </v-list-item>
            
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon class="cyan--text">mdi-cloud-download</v-icon>
                  </v-list-item-icon>
                  <v-list-item-subtitle class="cyan--text">48%</v-list-item-subtitle>
                </v-list-item>
            
                <v-slider
                  v-model="week_Position"
                  :max="6"
                  :tick-labels="week_labels"
                  class="mx-4 cyan--text"
                  ticks
                ></v-slider>
            
                <v-list class="transparent">
                  <v-list-item v-for="item in forecast" :key="item.name">
                    <v-list-item-title class="cyan--text">{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle class="cyan--text">{{ item.temp }}</v-list-item-subtitle>
                    <v-list-item-subtitle>
                      <v-btn class="mb-0 cyan--text" outlined small fab color="indigo">
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-btn>
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
            
                <!-- <v-divider></v-divider>
            
                <v-card-actions>
                  <v-btn text>Full Report</v-btn>
                </v-card-actions> -->
              </v-card>
            </v-col>

            <!-- 車両配置情報 -->
            <v-col lg="4" >
              <v-card class="mx-auto">
                <v-list-item two-line>
                  <v-list-item-content class="blue--text">
                    <v-list-item-title class="headline">車両配置情報</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
            
                <v-list-item>
                  <v-list-item-icon >
                    <v-icon class="blue--text">mdi-send</v-icon>
                  </v-list-item-icon>
                  <v-list-item-subtitle class="blue--text">A箇所</v-list-item-subtitle>
                </v-list-item>
            
                <v-list class="transparent">
                  <v-list-item v-for="item in Placements" :key="item.name">
                    <v-list-item-title class="blue--text">{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle class="blue--text">{{ item.temp }}</v-list-item-subtitle>
                    <v-list-item-subtitle>
                      <v-btn class="mb-0 blue--text" outlined small fab color="indigo">
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-btn>
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
            
                <!-- <v-divider></v-divider>
            
                <v-card-actions>
                  <v-btn text>Full Report</v-btn>
                </v-card-actions> -->
              </v-card>
            </v-col>

            <v-col lg="4" cols="md" class="pb-2">
              <v-card min-height="252">
                <v-card-title class="font-weight-light text-truncate success--text">
                  XXXX
                </v-card-title>
                <v-card-text>
                  <span class="success--text subtitle-1">
                    XXX XXX
                  </span>
                  <div class="mb-3">
                    <h3>XXXX XXXX</h3>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn outlined rounded color="success">
                    View
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          
          <!-- お知らせ -->
          <v-row>
            <v-col>
              <v-card height="170" scrollable elevation="4" class="overflow-y-auto">
                <v-card-text>
                  <p>その他情報等</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          
          <!-- グラフ -->
          <!-- <v-row>
            <v-col>
              <v-card class="mx-auto text-center">
                <v-card-title class="primary--text">
                  Sales
                </v-card-title>
                <v-sparkline 
                  :value="sparklineData" 
                  padding="18"
                  label-size="4"
                  color="cyan"
                  :gradient="['#007bff','cyan']" 
                  :line-width="2"
                  :stroke-linecap="'round'"
                  smooth>
                  <template v-slot:label="item">
                    ${{ item.value }}
                  </template>
                </v-sparkline>
                <v-card-actions class="py-4 justify-center">
                  <v-btn color="primary" to="/reports">View Report</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row> -->

        </div>
      </v-main>
    </v-app>
  </div>
</template>


<script>

import Vuetify from "vuetify";
export default {
  vuetify: new Vuetify(),
  computed: {
    mini() {
        return (this.$vuetify.breakpoint.smAndDown) || this.toggleMini
    },
    buttonText() {
        return !this.$vuetify.theme.dark ? 'Go Dark' : 'Go Light'
    }
  },
  data: () => ({
      sidebarMenu: true,
      toggleMini: false,
      sparklineData: [
        423,
        446,
        675,
        510,
        590,
        610,
        423,
      ],
      Day_labels: ['9/20(日)', '9/21(月)', '9/22(火)', '9/23(水)', '9/24(木)', '9/25(金)', '9/26(土)'],
      week_labels: ['日', '月', '火', '水', '木', '金', '土'],
      week_Position:2,
      forecast: [
        { name: '故障',  temp: '2件', icon: 'mdi-magnify'},
        { name: '定期検査', temp: '2件', icon: 'mdi-magnify' },
        { name: '臨時検査', temp: '2件', icon: 'mdi-magnify' },
        { name: '仕業検査', temp: '4件', icon: 'mdi-magnify' },
      ],
      Placements: [
        { name: 'E101', temp: '5両', icon: 'mdi-magnify'},
        { name: 'E102', temp: '5両', icon: 'mdi-magnify' },
        { name: 'E111', temp: '10両', icon: 'mdi-magnify' },
        { name: 'E123', temp: '10両', icon: 'mdi-magnify' },
        { name: 'E232', temp: '11両', icon: 'mdi-magnify' },
        { name: 'E233', temp: '11両', icon: 'mdi-magnify' },
      ]
  }),
  created(){
    this.toggleTheme();
  },
  methods: {
    toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;   
        //this.$vuetify.theme.dark = true; //やっぱり固定
    },
  }
};

</script>



<style lang="scss" scoped>

.theme--dark .v-main {
    background-color: #181818;
}

.theme--dark.v-application {
    background-color: #181818;
}

.theme--dark.v-card, 
.theme--dark.v-data-table,
.theme--dark.v-tabs-items,
.theme--dark.v-tabs .v-tabs-bar {
    background-color: #232323;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

::-webkit-scrollbar {
    width: 8px;
    background-color: #111;
}

::-webkit-scrollbar-thumb {
    background-color: #222;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #444;
}

::-webkit-scrollbar-track:hover {
    background-color: #292929;
}
</style>

