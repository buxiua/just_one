<template>
  <el-icon>
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
