<template>
  <div class="one-link-group">
    <one-icon class="margin-right-3" :is="prefix" />
    <one-link :href="firstItem.href">{{ firstItem.value }}</one-link>
    <template v-for="(item, index) in lastItems" :key="index">
      {{ separator }}
      <one-link :href="item.href">{{ item.value }}</one-link>
    </template>
  </div>
</template>
<script>
import OneLink from "./OneLink.vue";
import OneIcon from "./OneIcon.vue";
export default {
  name: "one-link-group",
  components: {
    OneLink,
    OneIcon,
  },
  props: {
    links: {
      type: Array,
      required: true,
      validator(links) {
        return Array.isArray(links) && links.length > 0;
      },
    },
    prefix: String,
    separator: String,
  },
  computed: {
    firstItem() {
      return this.links[0];
    },
    lastItems() {
      return this.links.slice(1);
    },
  },
};
</script>
<style>
.one-link-group {
  display: inline-block;
}
</style>
