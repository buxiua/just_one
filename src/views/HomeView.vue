<template>
  <one-header></one-header>
  <one-home-body></one-home-body>
</template>

<script>
import OneHeader from "@/components/OneHeader.vue";
import OneHomeBody from "@/components/OneHomeBody.vue";
export default {
  name: "HomeView",
  components: {
    OneHeader,
    OneHomeBody,
  },
};
</script>
