<template>
  <div class="layout">
    <div class="container">
      <div class="layout__wrapper">
        <div class="layout__wrapper__content">
          <slot></slot>
        </div>
        <div class="layout__wrapper__menu">
          <div class="layout__wrapper__menu__links" v-if="links.length > 0">
            <p class="links__title">{{ title }}</p>
            <ul>
              <li
                v-for="(item, index) in links"
                :key="index"
                :class="{ active: index === activeLink }"
                @click="() => changeActiveLink(index)"
              >
                <NuxtLink :to="'#' + item.link">{{ item.link }}</NuxtLink>
              </li>
            </ul>
          </div>
          <p class="d__events">Diplomat events</p>
          <div class="layout__wrapper__menu__events">
            <div v-for="(item, index) in Edata" :key="index" v-if="index < 3">
              <NuxtLink to="#">
                <img :src="item.img" :alt="item.title" />
                <p>{{ item.title }}</p>
                <p>
                  <span>{{ item.day + item.date }}</span>
                  <span>{{ item.about }}</span>
                </p>
              </NuxtLink>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Edata from "../../data/dEventsData";

export default {
  name: "menu-layout",
  props: ["links", "title"],
  data() {
    return {
      activeLink: 0,
      Edata: [],
    };
  },
  methods: {
    changeActiveLink(index) {
      this.activeLink = index;
      this.$emit("handleClick", index);
    },
  },
  mounted() {
    this.Edata = Edata;
    this.activeLink = 0;
    this.changeActiveLink(0);
  },
};
</script>

<style lang="scss" scoped></style>
