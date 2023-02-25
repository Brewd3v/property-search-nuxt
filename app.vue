<template>
  <div class="">{{ data }}</div>
</template>
<script setup>
const { data } = useFetch("/api/rightmove");
</script>