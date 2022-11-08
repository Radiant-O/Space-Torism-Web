<template>
  <Reused>
    <template v-slot:image>
      <div class="dest_img">
        <img class="space_img" src="@/assets/destination/image-europa.webp" />
      </div>
    </template>
    <template v-slot:body>
      <div class="img_abt">
        <div class="dest_img_cont">
          <h1>EUROPA</h1>
          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <hr class="dest_line" />
          <div class="abt_dest">
            <div class="dest_distance">
              <p class="dist_header">AVG. DISTANCE</p>
              <p class="dist_no">628 Mil. KM</p>
            </div>
            <div class="dest_travel">
              <p class="dist_header">EST. TRAVEL TIME</p>
              <p class="dist_no">3 YEARS</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Reused>
</template>

<script>
import Reused from "@/components/Reused.vue";
export default {
  data() {},
  components: { Reused },
};
</script>

<style></style>
