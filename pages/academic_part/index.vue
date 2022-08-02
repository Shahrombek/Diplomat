<template>
  <div>
    <MenuLayout :links="pageLinks" :title="title" @handleClick="click">
      <AboutTeam v-if="item.id === 2" />
      <MenuContent v-else :item="item" />
    </MenuLayout>
  </div>
</template>

<script>
import AcademicPartData from "../../data/AcademicPartData";

export default {
  name: "Our programs",
  data() {
    return {
      pageLinks: [
        { id: 0, link: "Bachelor of IT" },
        { id: 1, link: "Bachelor of Economics" },
        { id: 2, link: "Faculty Members" },
      ],
      item: {},
      title: "Our programs",
      AcademicPartData: [],
    };
  },
  methods: {
    click(id) {
      if (id === 2) {
        this.item = {};
        this.item.id = id;
      }else{
        this.item = AcademicPartData.find((item) => item.id === id);
      }

      console.log(id, this.item);
    },
  },
  mounted() {
    this.AcademicPartData = AcademicPartData;
  },
};
</script>

<style lang="scss" scoped></style>
