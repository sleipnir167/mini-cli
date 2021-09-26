<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid>

        <div class="divHeader">
          <div>車両を選択してください</div>
          <div>選択中の車両: {{ selected }}</div>
        </div>


        <div v-for="item in items" :key="item.title" >
          <v-card class="divHensName" >{{item.hens}}</v-card>
          <router-link to="/DaichoView">
            <v-card v-for="sosei in item.soseis" 
              :class="sosei.stype"
              :key="sosei" class="sitem rounded-0" 
              @mouseover="selected = sosei.name"
              >
              {{sosei.name}}
            </v-card>
          </router-link>
        </div>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vuetify from "vuetify";
export default {
  vuetify: new Vuetify(),
  data () {
    return{
      selected:null,
      selecteda:null,
      items:[ 
        {
          id:1,
          grp:"Aグループ",
          hens:"H101",
          soseis:[
            { id: 1, name: "T'c 234 0001", fixed: false , stype: "Tc" },
            { id: 2, name: "M2  234 0003", fixed: false , stype: "M" },
            { id: 3, name: "M1  235 0003", fixed: false , stype: "M" },
            { id: 4, name: "T   235 0001", fixed: false , stype: "T" },
            { id: 5, name: "M2  234 0002", fixed: false , stype: "M" },
            { id: 6, name: "M1  235 0002", fixed: false , stype: "M" },
            { id: 7, name: "T'  234 0001", fixed: false , stype: "T" },
            { id: 8, name: "M2  234 0001", fixed: false , stype: "M" },
            { id: 9, name: "M1  235 0001", fixed: false , stype: "M" },
            { id: 10, name: "T   235 4620", fixed: false , stype: "T" },
            { id: 11, name: "Tc  235 0001", fixed: false , stype: "Tc" },
          ]
        },
        {
          id:2,
          grp:"Aグループ",
          hens:"H102",
          soseis:[
            { id: 1, name: "T'c 234 0002", fixed: false , stype: "Tc" },
            { id: 2, name: "M2  234 0006", fixed: false , stype: "M" },
            { id: 3, name: "M1  235 0006", fixed: false , stype: "M" },
            { id: 4, name: "T   235 0002", fixed: false , stype: "T" },
            { id: 5, name: "M2  234 0005", fixed: false , stype: "M" },
            { id: 6, name: "M1  235 0005", fixed: false , stype: "M" },
            { id: 7, name: "T'  234 0002", fixed: false , stype: "T" },
            { id: 8, name: "M2  234 0004", fixed: false , stype: "M" },
            { id: 9, name: "M1  235 0004", fixed: false , stype: "M" },
            { id: 10, name: "T   235 4640", fixed: false , stype: "T" },
            { id: 11, name: "Tc  235 0002", fixed: false , stype: "Tc" },
          ]
        },
        {
          id:3,
          grp:"Aグループ",
          hens:"H103",
          soseis:[
            { id: 1, name: "T'c 234 0003", fixed: false , stype: "Tc" },
            { id: 2, name: "M2  234 0009", fixed: false , stype: "M" },
            { id: 3, name: "M1  235 0009", fixed: false , stype: "M" },
            { id: 4, name: "T   235 0003", fixed: false , stype: "T" },
            { id: 5, name: "M2  234 0008", fixed: false , stype: "M" },
            { id: 6, name: "M1  235 0008", fixed: false , stype: "M" },
            { id: 7, name: "T'  234 0003", fixed: false , stype: "T" },
            { id: 8, name: "M2  234 0007", fixed: false , stype: "M" },
            { id: 9, name: "M1  235 0007", fixed: false , stype: "M" },
            { id: 10, name: "T   235 4603", fixed: false , stype: "T" },
            { id: 11, name: "Tc  235 0003", fixed: false , stype: "Tc" },
          ]
        },
        {
          id:4,
          grp:"Bグループ",
          hens:"H104",
          soseis:[
            { id: 1, name: "T'c 234 0004", fixed: false , stype: "Tc" },
            { id: 2, name: "M2  234 0012", fixed: false , stype: "M" },
            { id: 3, name: "M1  235 0012", fixed: false , stype: "M" },
            { id: 4, name: "T   235 0004", fixed: false , stype: "T" },
            { id: 5, name: "M2  234 0011", fixed: false , stype: "M" },
            { id: 6, name: "M1  235 0011", fixed: false , stype: "M" },
            { id: 7, name: "T'  234 0004", fixed: false , stype: "T" },
            { id: 8, name: "M2  234 0010", fixed: false , stype: "M" },
            { id: 9, name: "M1  235 0010", fixed: false , stype: "M" },
            { id: 10, name: "T   235 0501", fixed: false , stype: "T" },
            { id: 11, name: "Tc  235 0004", fixed: false , stype: "Tc" },
          ]
        },
        {
          id:5,
          grp:"Bグループ",
          hens:"H105",
          soseis:[
            { id: 1, name: "T'c 234 0005", fixed: false , stype: "Tc" },
            { id: 2, name: "M2  234 0015", fixed: false , stype: "M" },
            { id: 3, name: "M1  235 0015", fixed: false , stype: "M" },
            { id: 4, name: "T   235 0005", fixed: false , stype: "T" },
            { id: 5, name: "M2  234 0014", fixed: false , stype: "M" },
            { id: 6, name: "M1  235 0014", fixed: false , stype: "M" },
            { id: 7, name: "T'  234 0005", fixed: false , stype: "T" },
            { id: 8, name: "M2  234 0013", fixed: false , stype: "M" },
            { id: 9, name: "M1  235 0013", fixed: false , stype: "M" },
            { id: 10, name: "T   235 0502", fixed: false , stype: "T" },
            { id: 11, name: "Tc  235 0005", fixed: false , stype: "Tc" },
          ]
        },
        {
          id:6,
          grp:"Bグループ",
          hens:"H106",
          soseis:[
            { id: 1, name: "T'c 234 0006", fixed: false , stype: "Tc" },
            { id: 2, name: "M2  234 0018", fixed: false , stype: "M" },
            { id: 3, name: "M1  235 0018", fixed: false , stype: "M" },
            { id: 4, name: "T   235 0006", fixed: false , stype: "T" },
            { id: 5, name: "M2  234 0017", fixed: false , stype: "M" },
            { id: 6, name: "M1  235 0017", fixed: false , stype: "M" },
            { id: 7, name: "T'  234 0006", fixed: false , stype: "T" },
            { id: 8, name: "M2  234 0016", fixed: false , stype: "M" },
            { id: 9, name: "M1  235 0016", fixed: false , stype: "M" },
            { id: 10, name: "T   235 4607", fixed: false , stype: "T" },
            { id: 11, name: "Tc  235 0006", fixed: false , stype: "Tc" },
          ]
        },
        {
          id:7,
          grp:"Bグループ",
          hens:"H107",
          soseis:[
            { id: 1, name: "T'c 234 0007", fixed: false , stype: "Tc" },
            { id: 2, name: "M2  234 0021", fixed: false , stype: "M" },
            { id: 3, name: "M1  235 0021", fixed: false , stype: "M" },
            { id: 4, name: "T   235 0007", fixed: false , stype: "T" },
            { id: 5, name: "M2  234 0020", fixed: false , stype: "M" },
            { id: 6, name: "M1  235 0020", fixed: false , stype: "M" },
            { id: 7, name: "T'  234 0007", fixed: false , stype: "T" },
            { id: 8, name: "M2  234 0019", fixed: false , stype: "M" },
            { id: 9, name: "M1  235 0019", fixed: false , stype: "M" },
            { id: 10, name: "T   235 4608", fixed: false , stype: "T" },
            { id: 11, name: "Tc  235 0007", fixed: false , stype: "Tc" },
          ]
        },
        {
          id:8,
          grp:"Cグループ",
          hens:"HE201",
          soseis:[
            { id: 1, name: "T'c 201 0101", fixed: false , stype: "Tc" },
            { id: 2, name: "M2  201 0201", fixed: false , stype: "M" },
            { id: 3, name: "M1  201 0201", fixed: false , stype: "M" },
            { id: 4, name: "T   201 0101", fixed: false , stype: "T" },
            { id: 3, name: "M1  201 0201", fixed: false , stype: "M" },
            { id: 5, name: "Tsc 201 0101", fixed: false , stype: "Tsc" },
          ]
        }
      ],
    }
  },
  created(){
    this.toggleTheme();
  },
  methods: {
    toggleTheme() {
        // this.$vuetify.theme.dark = !this.$vuetify.theme.dark;   
        this.$vuetify.theme.dark = true; //やっぱり固定
    },
    setselect(){
      console.log("aaaasdfasd")
      this.selected = "aaa"
    }
  }
}
</script>

<style lang="scss" scoped>

.theme--dark .v-main {
    // background-color: #181818;
}

.theme--dark.v-application {
    // background-color: #181818;
    color: #181818;
}

.divHeader{
  width:500px;
  height:100px;
  border: solid 1px red;
  margin:2px;
  opacity:0.8;
}

.divHensName{
  width:60px;
  height:60px;
  border: solid 1px transparent;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  margin:2px;
  opacity:0.8;
  background-color: rgba(28,100,73);
}

.sitem{
  width:60px;
  height:60px;
  border: solid 1px transparent;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  opacity:0.8;
  font-size: 80%;
  

  &.Tc{
    background-color: rgba(114,47,61);
  }
  &.M{
    background-color: rgba(53,54,119);
  }
  &.T{
    background-color: rgb(21, 84, 100);
  }
  &.Tsc{
    background-color: rgba(95,70,55);
  }
  
}
.sitem:hover{
  width:60px;
  height:60px;
  border: solid 1px transparent;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  opacity:0.5;
  
}
</style>