"use client"
<template>
  <carousel :items-to-show="1">
    <slide v-for="image in images" :key="image">
      <img
        :class="{ 'w-64 h-48 object-cover': !classes, classes: classes }"
        :src="image"
      />
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  props: {
    images: Array,
    classes: String,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style scoped>
.carousel__slide,
.carousel__slide {
  width: 100% !important;
}

.carousel__next,
.carousel__prev,
.carousel__next:hover,
.carousel__prev:hover {
  color: white !important;
}

.carousel__prev--disabled {
  color: gray;
}
</style>
