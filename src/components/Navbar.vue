<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/utilities/logo.svg" />
    </div>
    <div class="line">
     </div>
     
    <div class="hamburger" v-if="!nav">
      <img src="../assets/utilities/icon-hamburger.svg"  @click="toggleNav" alt="">
    </div>
    <nav class="navbar">
      <router-link 
      v-for="link in navlinks" 
      :key="link.id" 
      :to="link.to"
      class="links">
      <span class="no">{{ link.id }}</span> {{ link.title }}
      </router-link>
    </nav>

    
  </header>
  <div class="mobile_nav" v-if="nav">
    <img  src="../assets/utilities/icon-close.svg" alt="" class="mobile_close" @click="toggleNav">
    <nav class="mobile_links" @click="toggleNav">
      <router-link 
      v-for="link in navlinks" 
      :key="link.id" 
      :to="link.to">
      <span class="no">{{ link.id }}</span> {{ link.title }}
      </router-link>
    </nav>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      navlinks: [
        { id: "00", title: "HOME", to: "/" },
        { id: "01", title: "DESTINATION", to: "/destination/moon" },
        { id: "02", title: "CREW", to: "/crew/douglas-hurley" },
        { id: "03", title: "TECHNOLOGY", to: "/technology/launch-vehicle" }, 
      ],
      nav: false
    };
  },
  methods: {
    toggleNav(){
      this.nav=!this.nav
    }
  }
};
</script>

<style></style>
