<template>
  <v-app id="inspire" class="miniskr" :style="{ background: $vuetify.theme.themes.light.background }">

    <!-- ツールバー -->
    <v-app-bar
      app
      clipped-left
      dense
      color=rgba(0,0,0,.80)
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ミニ車両管理</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- 右寄せ -->
      <v-toolbar-items>
      
        <!-- 「ベル」アイコン表示 -->
        <v-menu offset-y>
          <template v-slot:activator="{on}" >
          <v-btn icon v-on="on" >
            <v-badge
              :content="alert_Meassages.length"
              :value="alert_Meassages.length"
              color="green"
              overlap
            >
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
          </template>
            <v-card max-width="500" class="mx-auto" >
            <v-toolbar color="green" dark dense>
              <v-toolbar-title>通知</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-btn>
            </v-toolbar>

            <v-list two-line>
              <v-list-item-group v-model="selected" multiple active-class="pink--text" >
                <template v-for="(alert_Meassage, index) in alert_Meassages">
                  <v-list-item :key="alert_Meassage.title">
                    <!-- <template v-slot:default="{ active, toggle }"> -->
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title v-text="alert_Meassage.title"></v-list-item-title>
                        <v-list-item-subtitle class="text--primary" v-text="alert_Meassage.headline"></v-list-item-subtitle>
                        <v-list-item-subtitle v-text="alert_Meassage.subtitle"></v-list-item-subtitle>
                      </v-list-item-content>
        
                      <v-list-item-action>
                        <v-list-item-action-text v-text="alert_Meassage.action"></v-list-item-action-text>
                        <v-icon v-if="!active" color="blue lighten-1">mdi-checkbox-blank-outline</v-icon>
                        <v-icon v-else color="blue">mdi-checkbox-marked-outline</v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                  <!-- 罫線 -->
                  <v-divider
                    v-if="index + 1 < alert_Meassages.length"
                    :key="index"
                  ></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-menu>
        
        <!-- ヘルプ -->
        <v-menu offset-y>
          <template v-slot:activator="{on}">
          <!-- <v-btn icon v-on="on" >
            <v-icon>mdi-help</v-icon>
          </v-btn> -->
          <v-btn v-on="on" text>
            ヘルプ
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
          </template>
          <v-list dense>
            <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name" >
              <v-list-item-icon>
                <v-icon>{{ nav_list.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- サポート -->
        <v-menu offset-y>
          <template v-slot:activator="{on}">
          <!-- <v-btn icon v-on="on" >
            <v-icon>mdi-help</v-icon>
          </v-btn> -->
          <v-btn v-on="on" text> サポート 
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="Support in Supports" :key="Support.name" >
              <v-list-item-icon>
                <v-icon>{{ Support.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ Support.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- フルスクリーン切り替え -->
        <v-btn text @click="toggleFullScreen">
          <v-icon v-if="fullscreenflg">mdi-fullscreen-exit</v-icon>
          <v-icon v-else>mdi-fullscreen</v-icon>
        </v-btn>
        
        <!-- 「:」アイコン表示 -->
        <v-menu offset-y>
          <template v-slot:activator="{on}" >
          <v-btn icon v-on="on" >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="dot_vatical in dot_vaticals" :key="dot_vatical.name">
              <v-list-item-icon>
                <v-icon>{{ dot_vatical.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ dot_vatical.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <!-- メニュー -->
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color=rgba(0,0,0,.80)
      dark
    >
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-avatar>
          <!-- <img src="https://randomuser.me/api/portraits/men/81.jpg"> -->
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>msok</v-list-item-title>
          <v-list-item-subtitle>所属：A箇所</v-list-item-subtitle>
          <v-list-item-subtitle>担当：作業員</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      
      <!-- 境目(横線)を描画 -->
      <v-divider></v-divider>

      <v-list dense>
        <template v-for="nav_list in nav_lists">
          <!-- 小メニューがない場合 -->
          <v-list-item
              v-if="!nav_list.lists" 
              :to="nav_list.link"
              :key="nav_list.name"
              @click="menu_close"
          >
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ nav_list.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- 小メニューがある場合 -->
          <v-list-group
            v-else
            no-action
            :prepend-icon="nav_list.icon"
            :key="nav_list.name"
            v-model="nav_list.active"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ nav_list.name }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="list in nav_list.lists"
              :key="list.name"
              :to="list.link"
            >
              <v-list-item-icon>
                <v-icon>{{ list.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                {{ list.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <!-- メイン部分 -->
    <v-main class="ma-2">
      <!-- <v-container fluid> -->
        <transition mode=”out-in”>
          <router-view />
        </transition> 
      <!-- </v-container> -->
    </v-main>

    <!-- フッター -->
    <v-footer app >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>
</template>

<script>

import Vuetify from "vuetify";

export default {
  
  vuetify: new Vuetify(),
  props: {
    source: String,
  },
  data () {
    return {
      drawer: true,
      nav_lists: [
        { name: 'ダッシュボード', icon: 'mdi-television-guide' , active: false , link:"/DashBoard"},
        { name: 'お知らせ', icon: 'mdi-information-outline' , active: false , link:"/Info"},
        { name: '車両台帳', icon: 'mdi-train' , active: false , link:"/Daicho"},
        { name: '車両選択', icon: 'mdi-train' , active: false , link:"/DaichoSelect"},
        { name: '車両台帳詳細', icon: 'mdi-train' , active: false , link:"/DaichoView"},
        { name: '検査計画', icon: 'mdi-timetable' , active: false , link:"/Kensa"},
        { name: '使用実績', icon: 'mdi-table-edit' , active: false , link:"/Siyou"},
        { name: '編成管理', icon: 'mdi-view-list' , active: false , link:"/Hensei"},
        { name: '検修管理', icon: 'mdi-math-compass' , active: false , link:"/Kensyu"},
        // { name: '装備管理', icon: 'mdi-sync' , active: false , link:"/Tmp"},
        { name: 'マスタ管理', icon: 'mdi-database' , active: false , link:"/Master", 
          lists:[
            {name: '車種マスタ', icon: 'mdi-pencil-box-outline' , link:"/MasterSyasyu"},
            {name: '系式マスタ', icon: 'mdi-pencil' , link:"/MasterSyasyu"},
          ]
        },
        { name: '操作ナビ', icon: 'mdi-library' , active: false , link:"/Navi", 
          lists:[
            {name: '新車登録', icon: 'mdi-pencil-box-outline' , link:"/Navi"}
          ]
        },
        // { name: 'グラフ', icon: 'mdi-chart-bar' , active: false , link:"/Graph"}, 
        // { name: 'ユーザー登録', icon: 'mdi-account-plus' , active: false , link:"/Signup"},
        { name: 'ログイン', icon: 'mdi-login' , active: false , link:"/Signin"},
        { name: '研究開発用(Json表示)', icon: 'mdi-message' , active: false , link:"/JsonOdpt_Trainstatusinformation", 
          lists:[
            {name: '列車運行情報', icon: 'mdi-database' , link:"/JsonOdpt_Trainstatusinformation"},
            {name: '駅情報', icon: 'mdi-database' , link:"/JsonOdpt_Station"},
            {name: '路線情報', icon: 'mdi-database' , link:"/JsonOdpt_Railway"},
            {name: '列車位置情報', icon: 'mdi-database' , link:"/JsonOdpt_Train"},
            {name: '列車時刻表', icon: 'mdi-database' , link:"/JsonOdpt_TrainTimetable"},
          ]
        },
        { name: 'カレンダー', icon: 'mdi-calendar' , active: false , link:"/Calender"},
        { name: 'TMP', icon: 'mdi-help-box' , active: false , link:"/Tmp"},
        { name: 'Map', icon: 'mdi-map-marker' , active: false , link:"/vMap"},
      ],
      Supports: [
        { name: '管理者問い合わせ', icon: 'mdi-whatsapp' , active: true , link:"/"},
        { name: 'サポート問い合わせ', icon: 'mdi-ambulance' , active: false , link:"/"},
        { name: 'メッセージを送る', icon: 'mdi-message' , active: false , link:"/"},
        { name: '報告する', icon: 'mdi-message-alert' , active: false , link:"/"},
      ],
      dot_vaticals: [
        { name: '設定', icon: 'mdi-brightness-5' , active: true , link:"/"},
        { name: 'ユーザー登録', icon: 'mdi-account-plus' , active: false , link:"/"},
        { name: 'パスワード変更', icon: 'mdi-account-key' , active: false , link:"/"},
        { name: 'ログイン', icon: 'mdi-login' , active: false , link:"/"},
        { name: 'ログアウト', icon: 'mdi-logout' , active: false , link:"/"},
      ],
      alert_Meassages: [
        { id: 1 , title: '検査切れ', headline: "A保全", subtitle: 'A保全の検査切れが発生しました', action: '15分前', icon: 'mdi-whatsapp'},
        { id: 2 , title: '故障', headline: "故障発生", subtitle: 'XXXが故障' , action: '15分前', icon: 'mdi-whatsapp'},
        { id: 3 , title: '故障', headline: "対応中", subtitle: 'XXXに入場中' , action: '30分前', icon: 'mdi-whatsapp'},
        { id: 4 , title: '故障', headline: "修理中", subtitle: 'XXに入場中' , action: '1時間前', icon: 'mdi-whatsapp'},
        { id: 5 , title: '故障', headline: "完了", subtitle: '対応完了しました。' , action: '3日前', icon: 'mdi-whatsapp'},
      ],
      selected:[2],
      color: 'gray',
      colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal',
      ],
      right: false,
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: false,
      fullscreenflg:false,
    }
  },
  created () {
    // this.$vuetify.theme.dark = true //ダークモード
  },
  methods:{
    menu_close(){
      this.nav_lists.forEach( nav_list => nav_list.active = false)
    },
    toggleFullScreen() {
      let elem = document.body
      console.log(elem)
      if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
          elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
        this.fullscreenflg = true;
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        this.fullscreenflg = false;
      }
    }
  },
  computed: {
    bg () {
      return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
    },
  },
};

</script>

<style lang="scss">
html,
html.overflow-y-hidden {
  // overflow-y: hidden !important;
}

.v-application--wrap {
  background-color: #ebebeb;
}

html, body {
  background: white;
  padding: 0;
  margin: 0;
}

*:fullscreen
*:-ms-fullscreen,
*:-webkit-full-screen,
*:-moz-full-screen {
   overflow: auto !important;
}

.v-enter {
  opacity: 0;
  transform: translate(0px, 0);
}
.v-enter-active {
  transition: opacity 0.5s;
  transition: all 0.3s 0.3s ease;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-active {
  transition: opacity 0.5s;
  transition: all 0.3s 0s ease;
}
.v-leave-to {
  opacity: 0;
  transform: translate(0px, 0);
}
</style>