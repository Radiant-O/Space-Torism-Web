<template>

  <section id="technology">
    <div class="top_page">
      <h4 class="page_header crew_header">
        <span class="header_no">03</span> SPACE LAUNCH 101
      </h4>
                
      <div class="tech_content">
        <div class="launch_no desktop_no">
          <!-- The  router-link is loop for each of the links in the space technology and the destination is bind with the router params.slug -->
          <router-link
            class="span"
            v-for="technology in technologies"            :key="technology.id"
            :to="{
              name: 'Tool',
              params: {
                slug: technology.slug
              }
            }">
            <span>{{technology.id}}</span>
          </router-link>
        </div>

        <router-view :key="$route.path"></router-view>

        <div class="launch_no mobile_no">
          <router-link 
            class="span"
            v-for="technology in technologies"            :key="technology.id"
            :to="{
              name: 'Tool',
              params: {
                slug: technology.slug
              }
            }">
            <span>{{technology.id}}</span>
          </router-link>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>


import space from '@/space.js';
export default {
     data(){
         return{
              technologies : space.technology
         };
     }
};
</script>

<style></style>
