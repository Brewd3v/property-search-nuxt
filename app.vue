<template>
  <div class="max-w-3xl py-12 px-4 mx-auto overflow-x-hidden">
    <h1 class="text-3xl mb-12 font-semibold">Latest Properties in SE23</h1>
    <div
      class="flex justify-between items-center gap-6 font-semibold text-xl border-b border-gray-300 pb-4 mb-4"
    >
      <div class="flex gap-6 divide-x items-center">
        <div
          :class="{
            'text-teal-600': tab === 'rightmove',
            'cursor-pointer': tab !== 'rightmove',
            'duration-300': true,
          }"
          @click="() => (tab = 'rightmove')"
        >
          Rightmove
        </div>
        <div
          :class="{
            'text-teal-600': tab === 'pedder',
            'cursor-pointer': tab !== 'pedder',
            'duration-300 pl-6': true,
          }"
          @click="() => (tab = 'pedder')"
        >
          Pedder
        </div>
        <div
          :class="{
            'text-teal-600': tab === 'dexters',
            'cursor-pointer': tab !== 'dexters',
            'duration-300 pl-6': true,
          }"
          @click="() => (tab = 'dexters')"
        >
          Dexters
        </div>
      </div>
    </div>

    <div v-if="tab === 'rightmove'">
      <Listings v-if="rightmove" :tab="tab" :data="rightmove" />
    </div>

    <div v-if="tab === 'pedder'">
      <Listings v-if="pedder" :tab="tab" :data="pedder" />
    </div>
    <div v-if="tab === 'dexters'">
      <Listings v-if="dexters" :tab="tab" :data="dexters" />
    </div>
  </div>
</template>
<script setup>
import Listings from "@/components/Listings.vue";
const tab = ref("rightmove");

const rightmove = await useLazyAsyncData(
  "rightmove",
  () => $fetch("/api/rightmove"),
  {
    server: false,
  }
);

const pedder = await useLazyAsyncData("pedder", () => $fetch("/api/pedder"), {
  server: false,
});

const dexters = await useLazyAsyncData(
  "dexters",
  () => $fetch("/api/dexters"),
  {
    server: false,
  }
);
</script>
