<template>
  <!-- <section id="crew"></section> -->
  <transition name="slide">
  <section id="crew">
    <div class="top_page">
      <h4 class="page_header crew_header">
        <span class="header_no">02</span> MEET YOUR CREW
      </h4>
      
        <div class="crew_cont crew_content">
          <transition name="slide">
          <router-view :key="$route.path"></router-view>
        </transition>
        </div>

      
      <div class="crew_slider">
        <router-link
          class="slider"
          v-for="crew in crewdata"
          :key="crew.id"
          :to="{
            name: 'Member',
            params: {
              slug: crew.slug,
            },
          }"
        >
          <span></span>
          
        </router-link>
      </div>
    </div>
  </section>
</transition>
</template>

<script>
import space from "@/space.js";

export default {
  data() {
    return {
      crewdata: space.crew,
      active: true,
      interval:""
    };
  },
  methods: {},
  mounted() {
    this.interval = setInterval(() => {
      this.crewdata.id = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
     
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.slide-leave-active, .slide-enter-active{
    transition: all 0.75s ease-out
}
.slide-enter-to{
    position: absolute;
    right: 0;
}
.slide-leave-from{
    position: absolute;
    left: 0;
}
.slide-enter-from{
    position: absolute;
    right: -100;
}
.slide-leave-to{
    position: absolute;
    left: -100%
}
</style>
