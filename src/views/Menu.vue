<template>
  <div id="Menu">
    <v-app id="inspire">
        <v-card class="overflow-hidden">
          <v-navigation-drawer
            v-model="drawer"
            :color="color"
            :expand-on-hover="expandOnHover"
            :mini-variant="miniVariant"
            :right="right"
            :permanent="permanent"
            :src="bg"
            absolute
            dark
          >
            <v-list dense nav class="py-0" >
              <v-list-item two-line :class="miniVariant && 'px-0'">
                <v-list-item-avatar>
                  <!-- <img src="https://randomuser.me/api/portraits/men/81.jpg"> -->
                  <v-icon>mdi-account-circle</v-icon>
                </v-list-item-avatar>
    
                <v-list-item-content>
                  <v-list-item-title>Application</v-list-item-title>
                  <v-list-item-subtitle>Subtext</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
    
              <v-divider></v-divider>


              <v-list nav dense>
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

            </v-list>
          </v-navigation-drawer>
        </v-card>
    </v-app>
  </div>
</template>

<script>
import Vuetify from "vuetify";

export default {
  el: '#Menu',
  vuetify: new Vuetify(),
  data () {
    return {
      drawer: true,
      nav_lists: [
        { name: 'ダッシュボード', icon: 'mdi-television-guide' , active: false , link:"/Info"},
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
  methods:{
    menu_close(){
      console.log("test");
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

<style lang="scss" scoped>

#inspire{
  height:100%;
  // background-color:red;

  & .overflow-hidden{
    height: 100%;
  }
}
</style>

