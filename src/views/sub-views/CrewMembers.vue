<template>

  <div class="abt_crew">
    <h3>{{ crewMem.role }}</h3>
    <h1>{{ crewMem.name }}</h1>
    <p>{{ crewMem.bio }}</p>
  </div>

  <div class="crew_img">
    <img
      class="crew_pic"
      :src="require(`@/assets/crew/${crewMem.images.webp}`)"
      alt=""
    />
    <hr class="img_line" />
  </div>

</template>

<script>
import space from "@/space.js";
export default {
  props: {
    slug: String,
  },
  computed: {
    crewMem() {
      return space.crew.find((member) => member.slug == this.slug);
    },
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
