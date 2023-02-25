<template>
  <div class="max-w-3xl py-12 px-4 mx-auto overflow-x-hidden">
    <h1 class="text-3xl mb-12 font-semibold">Latest Properties in SE23</h1>

    <div
      class="flex gap-6 font-semibold text-xl border-b border-gray-300 pb-4 mb-8 divide-x"
    >
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

    <div class="mb-4" v-show="tab === 'rightmove'">
      <button @click="() => refresh(tab)">Refresh {{ tab }}</button>
      <div v-if="pending">Loading...</div>
      <div v-else>
        <div class="">
          <h2 class="text-lg font-semibold">
            Total results: {{ rightmove.results }}
          </h2>
        </div>
        <div>
          <div
            class="flex items-center gap-12"
            v-for="item in rightmove.items"
            :key="item.address"
          >
            <div>
              <img :src="item.images[0]" :alt="item.address" />
            </div>
            <div class="">
              <h2>{{ item.address }}</h2>
              <div>{{ item.price }}</div>
              <div>{{ item.beds }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { pending, data: rightmove } = useLazyAsyncData("rightmove", () =>
  $fetch("/api/rightmove")
);
const refresh = (key) => refreshNuxtData(key);
const tab = ref("rightmove");
</script>