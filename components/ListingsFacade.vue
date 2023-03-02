<template>
  <div class="space-y-6 divide-y">
    <div class="pt-6" v-for="(item, index) in 3" :key="index">
      <div class="flex items-center gap-12">
        <div>
          <div
            class="w-96 h-64 bg-gray-300 delay-1000 duration-1000 animate-pulse"
          ></div>
        </div>
        <div>
          <h2 class="text-xl mb-2 text-gray-900">
            <div
              class="flex gap-2 items-center hover:text-teal-600 duration-200"
              target="_blank"
              rel="noopener"
            >
              <span
                class="w-[300px] bg-gray-300 delay-1000 duration-1000 block h-[28px] animate-pulse"
              ></span>
            </div>
          </h2>
          <div
            class="w-[300px] bg-gray-300 delay-1000 duration-1000 h-[36px] text-3xl mb-3 font-medium animate-pulse"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
