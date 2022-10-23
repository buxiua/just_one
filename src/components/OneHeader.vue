<template>
  <header class="one-header">
    <nav id="nav">
      <span class="logo">
        <img src="https://placekitten.com/60" alt="logo" />
      </span>
      <div class="menu-list">
        <one-link slider>
          <one-icon is="notebook" class="margin-right-3" /> 搜索
        </one-link>
        <template v-for="item in navList" :key="item.value">
          <one-link v-if="!hasChildren(item)" :href="item.href" slider>
            <one-icon :is="item.icon" class="margin-right-3" />
            {{ item.value }}
          </one-link>
          <template v-else>
            <one-dropdown>
              <one-link slider>
                <one-icon :is="item.icon" class="margin-right-3" />
                {{ item.value }}
                <one-icon class="rotate-180" is="arrow-down" />
              </one-link>
              <template #dropdown>
                <one-link
                  v-for="child in item.children"
                  :key="child.value"
                  :href="child.href"
                >
                  <one-icon :is="child.icon" class="margin-right-3" />
                  {{ child.value }}
                </one-link>
              </template>
            </one-dropdown>
          </template>
        </template>
      </div>
    </nav>
    <slot></slot>
  </header>
</template>
<script>
import OneLink from "./OneLink.vue";
import OneIcon from "./OneIcon.vue";
import OneDropdown from "./OneDropdown.vue";
import { navList } from "@/assets/data.js";
export default {
  name: "one-header",
  components: {
    OneLink,
    OneIcon,
    OneDropdown,
  },
  data() {
    return {
      navList,
    };
  },
  methods: {
    hasChildren(item) {
      if (item.children && item.children.length !== 0) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="less">
.one-header {
  height: 400px;
  width: 100%;
  min-width: 1000px;
  background-image: url("https://placekitten.com/1920/400");
}
.margin-horizontail-5 {
  margin-top: 5px;
  margin-bottom: 5px;
}

#nav {
  backdrop-filter: blur(10px);
  box-shadow: 1px 1px 0.2px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  height: 60px;
  max-height: 60px;
  padding: 0 60px;
  display: -ms-flexbox;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 100%;
    width: 60px;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  }
  .menu-list {
    width: max-content;
    height: 100%;
    max-height: 60px;
    & > div {
      margin: 0 15px;
    }
    .one-dropdown {
      .dropdown-items {
        .one-link {
          padding: 3px 0;
        }
      }
      &:hover .rotate-180 {
        transform: rotate(180deg);
      }
      .rotate-180 {
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>
