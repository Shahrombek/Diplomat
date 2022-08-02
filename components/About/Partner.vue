<template>
  <div class="partner">
    <div class="partner__item" v-for="(item, index) in data" :key="index" @click="$emit('getPartner', item)">
        <img :src="item.img" alt="item.title">
        <img :src="item.logo" alt="item.title">
        <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
import PartnerData from "~/data/PartnerData";

export default {
  name: "about-partner",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.data = PartnerData;
  },
};
</script>

<style lang="scss" scoped></style>
