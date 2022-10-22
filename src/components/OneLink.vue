<template>
  <div class="one-link">
    <router-link v-if="href" :to="href" :class="{ slider }">
      <slot></slot>
    </router-link>
    <a v-else href="javascript:void(0)" :class="{ slider }">
      <slot></slot>
    </a>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: "one-link",
  props: {
    href: {
      type: String,
      required: false,
    },
    slider: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="less">
.one-link {
  height: 100%;
  display: -ms-inline-flexbox;
  display: -webkit-inline-box;
  display: inline-flex;
  align-items: center;
  font-size: 1em;
  a {
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
  .el-icon {
    vertical-align: text-bottom;
  }
}
.slider {
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
    background-color: aqua;
  }
  &:hover::after {
    width: 100%;
  }
}
</style>
