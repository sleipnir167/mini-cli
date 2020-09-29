<template>
  <v-app id="inspire">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card id="app" class="container mt-5">
        <h1>{{ message }}</h1>
        <v-card class="d-flex justify-content-between bg-dark p-3">
          <v-card 
            class="bg-secondary p-2 m-2 w-100"
            @drop="dropList($event, 'A')"
            @dragover.prevent
            @dragenter.prevent
          >
            <h2 class="text-light">Category A</h2>
            <v-card class="bg-white m-2 p-2" v-for="(list) in CategoryA" :key="list" draggable @dragstart="dragList($event,list.id)">
              {{ list.name }}
            </v-card>
          </v-card>
          <v-card 
            class="bg-secondary p-2 m-2 w-100"
            @drop="dropList($event, 'B')"
            @dragover.prevent
            @dragenter.prevent
          >
            <h2 class="text-light">Category B</h2>
            <v-card class="bg-white m-2 p-2" v-for="(list) in CategoryB" :key="list" draggable @dragstart="dragList($event,list.id)">
              {{ list.name }}
            </v-card>
          </v-card>
          <v-card 
            class="bg-secondary p-2 m-2 w-100"
            @drop="dropList($event, 'C')"
            @dragover.prevent
            @dragenter.prevent
          >
            <h2 class="text-light">Category C</h2>
            <v-card class="bg-white m-2 p-2" v-for="(list) in CategoryC"  :key="list" draggable @dragstart="dragList($event,list.id)">
              {{ list.name }}
            </v-card>
          </v-card>
        </v-card>
      </v-card>
    </v-form>
  </v-app>
</template>

<script>
// import Vue from "vue";
// import QuestionTipText from '../../Parts/QuestionTipText';

// Vue.component("q-tip", QuestionTipText)

export default {
  data() {
		return {
			message: 'HTML Drag&Drop in vue.js page',
      lists: [
        {
          id: 1, 
          name: 'ProductA',
          category: 'A'
        },
        {
          id: 2, 
          name: 'ProductB',
          category: 'B'
        },
        {
          id: 3, 
          name: 'ProductC',
          category: 'B'
        },
        {
          id: 4, 
          name: 'ProductD',
          category: 'C'
        },
        {
          id: 5, 
          name: 'ProductE',
          category: 'A'
        },
      ]
    };
  },
  computed: {
    CategoryA () {
      return this.lists.filter(list => list.category == 'A')
    },
    CategoryB () {
      return this.lists.filter(list => list.category == 'B')
    },
    CategoryC () {
      return this.lists.filter(list => list.category == 'C')
    }
  },
  methods:{
    dragList(event, dragId){
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.setData('list-id',dragId)
    },
    dropList(event, dropCategory){
      const dragId = event.dataTransfer.getData('list-id')
      const dragList = this.lists.find(list => list.id == dragId)
      dragList.category = dropCategory
    }
  }
};
</script>

<style scoped>

</style>

