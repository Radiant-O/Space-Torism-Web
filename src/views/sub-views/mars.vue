<template>
  <Reused>
    <template v-slot:image>
      <div class="dest_img">
        <img class="space_img" src="@/assets/destination/image-mars.webp" />
      </div>
    </template>
    <template v-slot:body>
      <div class="img_abt">
        <div class="dest_img_cont">
          <h1>MARS</h1>
          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
          <hr class="dest_line" />
          <div class="abt_dest">
            <div class="dest_distance">
              <p class="dist_header">AVG. DISTANCE</p>
              <p class="dist_no">225 Mil.KM</p>
            </div>
            <div class="dest_travel">
              <p class="dist_header">EST. TRAVEL TIME</p>
              <p class="dist_no">9 MONTHS</p>
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
