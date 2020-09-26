<template>
  <div id="JsonOdpt_Trainstatusinformation">
    <div>json作成直指定</div>
    <JSONView :data="data" />
    <div>東京公共</div>
    <JSONView :data="tkkk" />
    <!-- <div>bit</div>
    <JSONView :data="info" /> -->
    <div>ローカル取得</div>
    <JSONView :data="users" />
  </div>
</template>
 
<script>
import { JSONView } from 'vue-json-component';
import axios from 'axios';
import userss from '../assets/Trainstatusinformation.json'

export default {
  name: "App",
  components: {
    JSONView
  },
  data(){
    return{
      data:[{ "name": "山田2", "age": 21 },{ "name": "佐藤", "age": 22 },{ "name": "鈴木", "age": 32 }],
      tkkk: [],
      info: [],
      users: userss,
      usersa: [],
      items:null
    }
  },
  mounted(){
    
        // axios.get('https://randomuser.me/api/',
        //     {
        //       params: {
        //         results: '3'
        //       }
        //     })
        // .then(response => console.log(response))

        // ■東京公共
        // axios.get('https://api-tokyochallenge.odpt.org/api/v4/odpt:TrainInformation?odpt:operator=odpt.Operator:JR-East&acl:consumerKey=00275963aa9f34380bd6ea18cb650cc49439e042c73bdedb11ca0b114e8cd76e')
        // .then(response => this.tkkk = response.data)   
        // .catch(error => console.log(error))
        
function reqListener () {
  // console.log(this.responseText);
  this.tkkk = JSON.parse(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://weather.livedoor.com/weather_hacks/webservice");
oReq.send();

        // ■bit
        // axios
        //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        //   .then(response => (this.info = response))
        //   .catch(error => console.log(error))
        
        // ■ローカル取得
        axios.get('../assets/Trainstatusinformation.json',
            {
              params: {
                results: '10'
              }
            })
        .then(response => this.users = response.data.results)
  
    }
};
</script>
 
<style>
#JsonOdpt_Trainstatusinformation {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 150px;
  margin: 0 auto;
  width: 800px;
  height: 100%;
  overflow:scroll;
}
</style>
 