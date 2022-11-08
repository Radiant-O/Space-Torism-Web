<template>
    <Reused>
      
      <template v-slot:image>
        <div class="dest_img">
        <img 
        
        class="space_img"
        src="@/assets/destination/image-moon.webp">
      </div>
      </template>
      <template v-slot:body>
        <div class="img_abt">
        
        <div class="dest_img_cont">
          <h1 @click="getDestination">MOON</h1>
          <p>"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          <hr class="dest_line"/>
          <div class="abt_dest">
            <div class="dest_distance">
              <p class="dist_header">
                AVG. DISTANCE
              </p>
              <p class="dist_no">
                384,400KM
              </p>
            </div>
            <div class="dest_travel">
              <p class="dist_header">
                EST. TRAVEL TIME
              </p>
              <p class="dist_no">
                3 DAYS
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
import planets from "@/data.json";

export default {
data(){
  return{
    Planet : planets,
    
  }
},
components: {Reused},
methods:{
   getDestination(){
     console.log(this.Planet.destinations)
   }
 }

}
</script>

<style>

</style>