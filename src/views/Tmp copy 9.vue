<template>
<ul id="root" @click="isShow = !isShow">
   <li>Root</li>

   <transition name="slide">
      <ul class="child" v-if="isShow">
         <li>item 1</li>
         <li>item 2</li>
         <li>item 3</li>
         <li>item 4</li>
      </ul>
   </transition>
</ul>
</template>

<script>
  export default {
    name: '#root',
    data: function() {
      return{
        isShow:false
      }
    },
  }
</script>

<style lang="scss" scoped>
ul {
   cursor: pointer;
}

.slide-enter-active {
   transition-duration: 0.3s;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   transition-duration: 0.3s;
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}
</style>