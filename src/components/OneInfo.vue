<template>
  <div class="one-info">
    <div class="blog-info">
      <div class="avatar">
        <img src="https://placekitten.com/300" alt="avatar" />
      </div>
      <span class="nickname">{{ "拾九" }}</span>
      <span class="slogan">{{ "day day up!!" }}</span>
    </div>
    <div class="statistic-info">
      <one-link v-for="(item, index) in statisticList" :key="index">
        <div class="statisic-name">{{ item.name }}</div>
        <div class="statistic-value">{{ item.value }}</div>
      </one-link>
    </div>
  </div>
</template>
<script>
import OneLink from "./OneLink.vue";
import { statisticInfo } from "@/assets/data.js";
export default {
  name: "one-info",
  components: {
    OneLink,
  },
  data() {
    return {
      statisticList: statisticInfo,
    };
  },
};
</script>
<style lang="less">
.one-info {
  padding: 30px 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.1);
  }
  .blog-info {
    text-align: center;
    img {
      height: 125px;
      width: 125px;
      border-radius: 50%;
    }
    span {
      cursor: pointer;
    }
    .nickname,
    .slogan {
      display: block;
      margin: 10px 0;
      font-size: 1.5em;
    }
    .slogan {
      font-size: 1em;
    }
  }
  .statistic-info {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    a {
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: translateY(-3px);
        color: aqua;
      }
    }
  }
}
</style>
