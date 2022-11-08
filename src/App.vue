<template>
  <Navbar 
  />
  <!-- <transition name="slide" mode="out-in">
     </transition> -->
    <router-view />
   
  
 
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components:{
    Navbar
},
}
</script>

<style>
/* .slide-leave-active,.slide-enter-active{
    transition: opacity 1s, transform 1s
}
.slide-enter,.slide-leave-to{
    opacity: 0;
    transform: translateX(-20%)
} */
</style>