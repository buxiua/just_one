<template>
  <el-icon class="one-icon">
    <component :is="is" />
  </el-icon>
</template>
<script>
export default {
  name: "one-link",
  props: {
    is: String,
  },
};
</script>
<style>
.one-icon {
  vertical-align: text-bottom;
}
</style>
