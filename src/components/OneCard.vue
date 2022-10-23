<template>
  <div class="one-card">
    <div class="article-info">
      <h2>
        <router-link :to="href">
          {{ title }}
        </router-link>
      </h2>
      <div class="article-meta">
        <span class="create-time">{{ time }}</span> |
        <one-icon class="margin-right-3" is="files" />
        <one-link :href="href">{{ category }}</one-link> |
        <one-link-group
          prefix="collection-tag"
          separator=" - "
          :links="tags"
        ></one-link-group>
      </div>
      <p class="article-desc">{{ desc }}</p>
    </div>
    <router-link :class="{ left }" :to="href">
      <img :src="img" :alt="alt" />
    </router-link>
  </div>
</template>
<script>
import OneLink from "./OneLink.vue";
import OneLinkGroup from "./OneLinkGroup.vue";
import OneIcon from "./OneIcon.vue";
export default {
  name: "one-card",
  components: {
    OneLink,
    OneLinkGroup,
    OneIcon,
  },
  props: {
    tags: Array,
    createTime: Number,
    title: String,
    category: String,
    desc: String,
    href: String,
    img: String,
    alt: String,
    left: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    time() {
      const time = new Date(this.createTime);
      const year = time.getFullYear();
      const month = time.getMonth();
      const day = time.getDate();
      return `${year}年${month}月${day}日`;
    },
  },
};
</script>
<style lang="less">
.one-card {
  height: 200px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: stretch;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 30px;
  &:not(:first-child) {
    margin-top: 20px;
  }
  box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.1);
  }

  .article-info {
    flex: 1;
    padding: 30px 30px;
    .article-meta {
      font-size: 0.95em;
      margin: 15px 0;
    }
    h3,
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p {
      font-size: 1.1em;
    }
  }
  a {
    text-decoration: none;
    color: black;
    overflow: hidden;
    img {
      transition: all 0.6s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .router-link {
    width: 250px;
    flex: 0;
    overflow: hidden;
  }
  .left {
    order: -1;
  }
}
</style>
