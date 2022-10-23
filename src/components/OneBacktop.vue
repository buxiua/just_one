<template>
  <el-button class="one-backtop" circle size="large" @click="backTop">
    <one-icon is="caret-top" />
  </el-button>
</template>
<script>
import OneIcon from "./OneIcon.vue";
export default {
  name: "one-backtop",
  components: {
    OneIcon,
  },
  methods: {
    backTop() {
      const scroll = window.scroll || window.scrollTo;
      scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.one-backtop {
  position: fixed;
  right: 100px;
  bottom: 100px;
  &:hover {
    animation: bounce 0.2s ease-in-out infinite reverse;
  }
}
</style>
