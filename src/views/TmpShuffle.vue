<template>
  <v-app id="inspire">
    <v-container fluid>

    <div id="sudoku-demo" class="demo">

      <v-btn @click="shuffle" >
        Shuffle
      </v-btn>
      <transition-group name="cell" tag="div" class="container">
        <div v-for="cell in cells" :key="cell.id" class="cell">
          {{ cell.number }}
        </div>
      </transition-group>
    </div>

    </v-container>
  </v-app>
</template>

<script>
import _ from 'lodash';
export default {
  data () {
    return{
      cells: Array.apply(null, { length: 195 }).map(function(_, index) {
        return {
          id: index,
          number: (index % 9) + 1
        };
      })
    }
  },
  methods: {
    shuffle: function() {
      this.cells = _.shuffle(this.cells);
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin-top: 10px;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}
.cell:nth-child(3n) {
  margin-right: 0;
}
.cell:nth-child(27n) {
  margin-bottom: 0;
}
.cell-move {
  transition: transform 1s;
}
</style>