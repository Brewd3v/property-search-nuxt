<script setup>
import Slider from "@/components/Slider.vue";

defineProps({
  images: {
    type: Array,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  beds: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center gap-12 pt-6">
    <div>
      <div class="w-96 h-64" v-if="images && images.length > 0">
        <Slider
          v-if="images.length > 1"
          :images="images"
          classes="w-96 h-64 object-cover"
        />
        <img v-else :src="images[0]" class="w-96 h-64 object-cover" />
      </div>
    </div>
    <div>
      <h2 class="text-xl mb-2 text-gray-900">
        <NuxtLink
          class="flex gap-2 items-center hover:text-teal-600 duration-200"
          :href="url"
          target="_blank"
          rel="noopener"
        >
          <span>{{ address }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </NuxtLink>
      </h2>
      <div class="text-3xl mb-3 font-medium">{{ price }}</div>
      <div class="flex gap-2 text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
            clip-rule="evenodd"
          />
        </svg>
        <span>{{ beds }}</span>
      </div>
    </div>
  </div>
</template>
