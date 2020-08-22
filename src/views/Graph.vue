<template>
  <div>
    <LineChart/>
  </div>
</template>
 
<script>
import LineChart from '../components/LineChart' // vue-chartjsの読み込み
export default {
  name: 'LineSample',
  data () {
    return {
    }
  },
  components: {
    LineChart
  }
}
</script>