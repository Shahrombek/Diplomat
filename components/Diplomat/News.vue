<template>
  <div class="cards">
    <div class="cards__item" v-for="(item, index) in data" :key="index">
      <div v-if="index < showItemCount" @click="$emit('getnews', item)">
        <div class="cards__item__img">
          <img :src="item.img" alt="" />
        </div>
        <span class="date">{{ item.date }}</span>
        <p class="title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "diplomat-news",
  props: ["showItemCount"],
  data() {
    return {
      data: [
        {
          img: require("~/assets/images/d_news1.png"),
          date: "March 23, 2022",
          title: "Books and podcasts that inspire to break the gender bias",
        },
        {
          img: require("~/assets/images/d_news2.png"),
          date: "March 23, 2022",
          title:
            "Universities must not shirk public role, says Sorbonne president",
        },
        {
          img: require("~/assets/images/d_news3.png"),
          date: "March 23, 2022",
          title: "Modern universities should be the engines of levelling up",
        },
        {
          img: require("~/assets/images/d_news4.png"),
          date: "March 23, 2022",
          title: "UNC research chief steps down over plagiarism charge",
        },
        {
          img: require("~/assets/images/d_news5.png"),
          date: "March 23, 2022",
          title: "Canadians push research ethics in undergraduate classes",
        },
        {
          img: require("~/assets/images/d_news6.png"),
          date: "March 23, 2022",
          title: "Biden expands loan forgiveness for public sector workers",
        },
        {
          img: require("~/assets/images/d_news7.png"),
          date: "March 23, 2022",
          title: "Politics splits US college admissions counsellors",
        },
        {
          img: require("~/assets/images/d_news4.png"),
          date: "March 23, 2022",
          title: "UNC research chief steps down over plagiarism charge",
        },
        {
          img: require("~/assets/images/d_news5.png"),
          date: "March 23, 2022",
          title: "Canadians push research ethics in undergraduate classes",
        },
        {
          img: require("~/assets/images/d_news6.png"),
          date: "March 23, 2022",
          title: "Biden expands loan forgiveness for public sector workers",
        },
        {
          img: require("~/assets/images/d_news7.png"),
          date: "March 23, 2022",
          title: "Politics splits US college admissions counsellors",
        },
        {
          img: require("~/assets/images/d_news4.png"),
          date: "March 23, 2022",
          title: "UNC research chief steps down over plagiarism charge",
        },
        {
          img: require("~/assets/images/d_news5.png"),
          date: "March 23, 2022",
          title: "Canadians push research ethics in undergraduate classes",
        },
        {
          img: require("~/assets/images/d_news6.png"),
          date: "March 23, 2022",
          title: "Biden expands loan forgiveness for public sector workers",
        },
        {
          img: require("~/assets/images/d_news7.png"),
          date: "March 23, 2022",
          title: "Politics splits US college admissions counsellors",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
