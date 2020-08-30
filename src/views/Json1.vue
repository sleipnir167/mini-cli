<template>
  <div id="Json1">
    <div>ローカル取得</div>
    <JSONView :data="users" />
  </div>
</template>
 
<script>
import { JSONView } from 'vue-json-component';
import axios from 'axios';
import userss from '../assets/Trainstatusinformation.json'

export default {
  components: {
    JSONView
  },
  data(){
    return{
      users: userss,
    }
  },
  mounted(){
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
#Json1 {
  color: #2c3e50;
  margin: 0 auto;
  width: 800px;
  height: 100%;
  overflow:scroll;
}
</style>
 