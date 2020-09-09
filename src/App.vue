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

      <!-- ヘルプアイコン表示 -->
      <v-menu offset-y>
        <template v-slot:activator="{on}">
        <v-btn icon v-on="on" >
          <v-icon>mdi-help</v-icon>
        </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="nav_list in nav_lists" :key="nav_list" >
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y>
        <template v-slot:activator="{on}" >
        <v-btn icon v-on="on" >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="dot_vatical in dot_vaticals" :key="dot_vatical">
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
          <v-list-item-subtitle>A所属</v-list-item-subtitle>
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
    <!-- <v-main>
      <v-content>
        <v-container >
          <router-view />
        </v-container>
      </v-content>
    </v-main> -->

    <v-main class="ma-2">
      <router-view />
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
        { name: '検査計画', icon: 'mdi-timetable' , active: false , link:"/Kensa"},
        { name: '使用実績', icon: 'mdi-speedometer' , active: false , link:"/Tmp"},
        { name: '検修管理', icon: 'mdi-math-compass' , active: false , link:"/Tmp"},
        { name: '装備管理', icon: 'mdi-battery-positive' , active: false , link:"/Tmp"},
        { name: 'マスタ管理', icon: 'mdi-database' , active: false , link:"/Master", lists:[{name: '車種マスタ', icon: 'mdi-pencil-box-outline' , link:"/MasterSyasyu"},{name: 'quick2', icon: 'mdi-pencil' , link:"/Info"}]},
        { name: '操作ナビ', icon: 'mdi-help-box' , active: false , link:"/Navi", lists:[{name: '新車登録', icon: 'mdi-pencil-box-outline' , link:"/Navi"}]},
        { name: 'グラフ', icon: 'mdi-chart-bar' , active: false , link:"/Graph"}, 
        { name: 'TMP', icon: 'mdi-help-box' , active: false , link:"/Tmp"},
        { name: 'Signup', icon: 'mdi-help-box' , active: false , link:"/Signup"},
        { name: 'Signin', icon: 'mdi-help-box' , active: false , link:"/Signin"},
        { name: 'Json表示', icon: 'mdi-help-box' , active: false , link:"/Json1"},
        { name: 'カレンダー', icon: 'mdi-help-box' , active: false , link:"/Calender"},
      ],
      dot_vaticals: [
        { name: '設定', icon: 'mdi-brightness-5' , active: true , link:"/"},
        { name: 'ユーザー登録', icon: 'mdi-account-plus' , active: false , link:"/"},
        { name: 'パスワード変更', icon: 'mdi-account-key' , active: false , link:"/"},
        { name: 'ログイン', icon: 'mdi-login' , active: false , link:"/"},
        { name: 'ログアウト', icon: 'mdi-logout' , active: false , link:"/"},
        
      ],
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
    }
  },
  created () {
    // this.$vuetify.theme.dark = true //ダークモード
  },
  methods:{
    menu_close(){
      this.nav_lists.forEach( nav_list => nav_list.active = false)
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
  overflow-y: hidden !important;
}


.v-application--wrap {
  background-color: #ebebeb;
}
</style>