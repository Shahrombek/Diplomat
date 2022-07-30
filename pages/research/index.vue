<template>
  <div>
    <MenuLayout :links="pageLinks" :title="title">
      <MenuContent :item="item" />
    </MenuLayout>
  </div>
</template>

<script>
export default {
  name: "research",
  data() {
    return {
      pageLinks: [],
      item: {
        id: 0,
        link: "research",
        img: require("~/assets/images/reception.png"),
        title: "Research",
        body: [
          "Founded in 1956, the Management Development Institute of Singapore (MDIS) is Singapore’s oldest not-for-profit professional institute for lifelong learning. MDIS has two main subsidiaries: Management Development Institute of Singapore Pte Ltd which oversees its Singapore academic operations, and MDIS International Pte Ltd which focuses on MDIS’ globalisation strategy.",

          "MDIS offers internationally-accredited courses in Business and Management, Engineering, Fashion and Jewellery Design, Health and Nursing, Information Technology, Languages and Education, Life Sciences, Media and Communications, Psychology, Tourism and Hospitality Management, and Safety and Environmental Management.  These programmes are offered in collaboration with renowned universities in the United Kingdom.",

          "MDIS is EduTrust certified, attesting to its exemplary education and business excellence standards. The institute was first awarded the certification in 2010 – subsequently renewed for four years in 2014 and 2018. MDIS was also one of the first Private Education Institutions (PEIs) to be registered under the Enhanced Registration Framework.",

          "The institute achieved a double win at the Singapore Prestige Brand Award (SPBA); it was one of four winners as well as the overall winner of the SPBA - Heritage Brands 2018. In 2017, MDIS was ranked 4th for the Enterprise 50 Award for its contributions in spurring Singapore’s economy.  In 2019, MDIS had successfully transited from Singapore Service Class to Singapore Quality Class (Service) and is honoured to be one of the winners for the Corporate Merit Award at the Biennial Singapore Health Award.",
        ],
      },
      title: "About Us",
      AboutData: [],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
