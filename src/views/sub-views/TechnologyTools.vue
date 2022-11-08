<template>
    
        <div class="abt_launch">
          <h4>THE TERMINOLOGY...</h4>
          <h1>{{spaceTech.name}}</h1>
          <p>
            {{spaceTech.description}}
          </p>
        </div>
        <div class="launch_img">
          <img
            :src="require(`@/assets/technology/${spaceTech.images.portrait}`)"
            alt=""
            class="desktop_img"
          />
          <img
            :src="require(`@/assets/technology/${spaceTech.images.landscape}`)"
            id="mobile_img"
          />
        </div>
    
  
</template>

<script>
import space from '@/space.js';
export default {
    props:{
        slug: String,
    },
    //the space technology is computed so it can be easily updated if there is change in the space.js and it is to only return the details as slug
    computed: {
        spaceTech() {
      return space.technology.find((tools) => tools.slug == this.slug);
    },
    },
}
</script>

<style>

</style>
