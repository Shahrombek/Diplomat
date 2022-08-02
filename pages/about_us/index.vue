<template>
  <div>
    <MenuLayout :links="pageLinks" :title="title" @handleClick="click">
      <template v-if="partnerItem === null">
        <AboutTeam v-if="item.id === 4" />
        <AboutPartner @getPartner="getPartner" v-if="item.id === 6" />
        <MenuContent v-else :item="item" />
      </template>
      <template v-else>
        <MenuContent :item="partnerItem" />
      </template>
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
      partnerItem: null,
    };
  },
  methods: {
    click(id) {
      this.partnerItem = null;
      if (id === 4 || id === 6) {
        this.item = {};
        this.item.id = id;
      } else {
        this.item = AboutData.find((item) => item.id === id);
      }

      console.log(id, this.item);
    },
    getPartner(item) {
      item.body = [
        "University Policies protect the integrity of the university's mission, reputation and operations, and support the management of major institutional risks. They inform our community and third parties about the major risks that the university seeks to address and communicate risk tolerance in key areas.",
        "What is a university policy?",
        "How do you strive for academic excellence?",
        "Does Southampton Uni take attendance?",
        "How do I create a university policy?",
      ],
      this.partnerItem = item;
      
    },
  },

  mounted() {
    this.AboutData = AboutData;
  },
};
</script>

<style lang="scss" scoped></style>
