<template>
  <div class="event">
    <div
      class="event__item"
      v-for="(item, index) in data"
      :key="index"
      v-if="index < showItemCount"
      @click="$emit('getnews', item)"
    >
      <div>
        <span class="day">{{ item.day }}</span>
        <span class="date">{{ item.date }}</span>
        <span class="week">{{ item.week }}</span>
      </div>
      <div>
        <img :src="item.img" :alt="item.title" />
      </div>
      <div>
        <p class="title">{{ item.title }}</p>
      </div>
      <div>
        <div class="top">
          <span class="time">{{ item.time }}</span>
          <span class="about">{{ item.about }}</span>
        </div>
        <div class="bottom">
          <Button class="btn-view">View more</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Edata from "../../data/dEventsData";

export default {
  props: ["showItemCount"],

  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.data = Edata;
  },
};
</script>

<style lang="scss" scoped></style>
