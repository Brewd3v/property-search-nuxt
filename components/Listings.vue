<script setup>
import ListingsFacade from "@/components/ListingsFacade.vue";
import Listing from "@/components/Listing.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { data: items, pending, refresh } = props.data;
</script>

<template>
  <div>
    <div v-if="pending">
      <ListingsFacade />
    </div>

    <div v-else>
      <div v-if="items" class="space-y-6 divide-y">
        <div v-for="item in items" :key="item.url">
          <Listing
            :images="item.images"
            :address="item.address"
            :price="item.price"
            :url="item.url"
            :beds="item.beds"
          />
        </div>
      </div>
    </div>
  </div>
</template>
