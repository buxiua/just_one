<template>
  <router-view />
  <one-backtop />
</template>
<script>
import OneBacktop from "@/components/OneBacktop.vue";
export default {
  name: "app",
  components: {
    OneBacktop,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nadfv {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
