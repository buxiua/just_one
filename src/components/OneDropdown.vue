<template>
  <div class="one-dropdown">
    <slot></slot>
    <div class="dropdown-items">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "one-dropdown",
};
</script>
<style lang="less">
.one-dropdown {
  height: 100%;
  position: relative;
  display: inline-block;
  .dropdown-items {
    display: none;
    flex-direction: column;
    width: max-content;
    position: absolute;
    right: 0;
    animation: show 0.3s 0.1s ease both;
  }
  &:hover .dropdown-items {
    display: flex;
  }
}

@keyframes show {
  0% {
    opacity: 0;
    top: 120%;
  }
  100% {
    opacity: 1;
    top: 100%;
  }
}
</style>
