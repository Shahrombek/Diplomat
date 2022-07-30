<template>
  <div>
    <MenuLayout :links="pageLinks" :title="title" @handleClick="click">
      <MenuContent :item="item" />
    </MenuLayout>
  </div>
</template>

<script>
import AboutData from "../../data/AboutUsData";

export default {
  name: "about-us",
  data() {
    return {
      pageLinks: [
        { id: 0, link: "University" },
        { id: 1, link: "Rector's congratulations" },
        { id: 2, link: "Our mission" },
        { id: 3, link: "Structure" },
        { id: 4, link: "Our team" },
        { id: 5, link: "Policies and regulations" },
        { id: 6, link: "Our Partners" },
      ],
      item: {},
      title: "About Us",
      AboutData: [],
    };
  },
  methods: {
    click(id) {
      this.item = AboutData.find((item) => item.id === id);

    },
  },
  mounted() {
    this.AboutData = AboutData;
  },
};
</script>

<style lang="scss" scoped></style>
