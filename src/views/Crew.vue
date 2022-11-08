<template>
  <!-- <section id="crew"></section> -->
  <section id="crew">
    <div class="top_page">
      <h4 class="page_header crew_header">
        <span class="header_no">02</span> MEET YOUR CREW
      </h4>
      <transition name="slide" mode="out-in">
        <div class="crew_cont crew_content">
          <router-view :key="$route.path"></router-view>
        </div>
      </transition>
      
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
</template>

<script>
import space from "@/space.js";

export default {
  data() {
    return {
      crewdata: space.crew,
      active: true,
    };
  },
  methods: {},
};
</script>

<style>
.slide-leave-active,.slide-enter-active{
    transition: opacity 1s, transform 1s
}
.slide-enter,.slide-leave-to{
    opacity: 0;
    transform: translateX(-20%)
}
</style>
