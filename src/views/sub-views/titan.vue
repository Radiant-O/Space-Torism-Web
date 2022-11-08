<template>
    <Reused>
      
      <template v-slot:image>
        <div class="dest_img">
        <img 
         
        class="space_img"
        src="@/assets/destination/image-titan.webp">
      </div>
      </template>
      <template v-slot:body>
        <div class="img_abt">
        
        <div class="dest_img_cont">
          <h1>TITAN</h1>
          <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
          <hr class="dest_line"/>
          <div class="abt_dest">
            <div class="dest_distance">
              <p class="dist_header">
                AVG. DISTANCE
              </p>
              <p class="dist_no">
                1.6 Bil. KM
              </p>
            </div>
            <div class="dest_travel">
              <p class="dist_header">
                EST. TRAVEL TIME
              </p>
              <p class="dist_no">
                7 YEARS
              </p>
            </div>
          </div>
        </div>
  
      </div>
      </template>
      </Reused>
  </template>
  
  <script>
  import Reused from '@/components/Reused.vue'
  export default {
  data(){
    
  },
  components: {Reused}
  }
  </script>
  
  <style>
  
  </style>