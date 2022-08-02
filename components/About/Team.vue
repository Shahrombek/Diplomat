<template>
  <div class="teacher">
    <div
      class="teacher__item"
      v-for="(item, index) in data"
      :key="index"
    >
      <div class="teacher__item__img">
        <img :src="item.img" alt="" />
      </div>
      <div class="teacher__item__content">
        <p>{{ item.name }}</p>
        <span>{{ item.job }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import TeamTechaersData from "~/data/TeamTechaersData";

export default {
  name: "about-team",
  data() {
    return {
        data:[],
    };
  },
  mounted() {
    this.data = TeamTechaersData
  },
};
</script>

<style lang="scss" scoped></style>
