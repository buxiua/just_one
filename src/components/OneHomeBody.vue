<template>
  <div class="one-home-body">
    <main class="home-main">
      <one-card
        v-for="(article, index) in articleList"
        :key="article.title"
        v-bind="article"
        :alt="article.title"
        :left="index % 2 === 1"
      />
    </main>
    <aside>
      <one-info></one-info>
    </aside>
  </div>
</template>
<script>
import OneInfo from "@/components/OneInfo.vue";
import OneCard from "@/components/OneCard.vue";
import { articleList } from "@/assets/data.js";
export default {
  name: "one-home-body",
  components: {
    OneCard,
    OneInfo,
  },
  data() {
    return {
      articleList,
    };
  },
  created() {
    console.log(articleList);
  },
};
</script>
<style lang="less">
.one-home-body {
  width: 1200px;
  min-width: 1000px;
  padding: 20px 0;
  margin: 0 auto;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  .home-main {
    width: 0;
    flex: 1;
  }
  aside {
    flex: 0;
    min-width: 350px;
    height: 100%;
  }
}
</style>
