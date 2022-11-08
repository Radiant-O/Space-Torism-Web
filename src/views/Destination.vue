<template>
  <!-- <section id="destination"></section> -->
  <section id="destination">
    <div class="top_page">
      <h4 class="page_header crew_header">
        <span class="header_no">01</span>
        PICK YOUR DESTINATION
      </h4>
      <div class="dest_img_header">
        <router-link to="/destination/moon" class="a">MOON</router-link>
        <router-link to="/destination/mars" class="a">MARS</router-link>
        <router-link to="/destination/europa" class="a">EUROPA</router-link>
        <router-link to="/destination/titan" class="a">TITAN</router-link>
      </div>

      <router-view />
    </div>
  </section>
</template>

<script>


export default {
 
  data() {
    return {
      destinations: ["MOON", "MARS", "EUROPA", "TITAN"],
      close: true,
    };
  },
};
</script>

<style></style>
