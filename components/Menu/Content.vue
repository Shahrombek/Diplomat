<template>
  <div class="content">
    <div class="content__img">
      <img :src="item.img" alt="" />
    </div>
    <h6 class="content__title">{{ item.title }}</h6>
    <div class="content__body">
      <p v-for="(item, index) in item.body" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-content",
  props: ["item"],
};
</script>

<style lang="scss" scoped></style>
