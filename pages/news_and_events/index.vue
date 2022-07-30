<template>
  <div class="news_and_events">
    <div class="enter_page news" v-if="newsContent === null">
      <div class="container">
        <div class="news_btns">
          <div @click="changeActiveTab(1)">
            <Button :class="{ outlined: activeTab !== 1 }">News</Button>
          </div>
          <div @click="changeActiveTab(2)">
            <Button :class="{ outlined: activeTab !== 2 }">Events</Button>
          </div>
        </div>
        <div class="news_body">
          <DiplomatNews
            v-if="activeTab === 1"
            :showItemCount="newsItem"
            @getnews="getNews"
          />
          <DiplomatEvents
            v-else
            :showItemCount="eventsItem"
            @getnews="getNews"
          />
          <div class="news_body_btn">
            <div @click="load(activeTab)">
              <Button class="capitalize">Load More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news_and_events_layout" v-else>
      <MenuLayout :links="[]" title="">
        <MenuContent :item="newsContent" />
      </MenuLayout>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      newsItem: 11,
      newsContent: null,
      eventsItem: 5,
    };
  },
  methods: {
    changeActiveTab(num) {
      this.activeTab = num;
    },
    load(activeTab) {
      if (activeTab === 1) {
        this.newsItem += 4;
      } else {
        this.eventsItem += 4;
      }
    },
    getNews(item) {
      console.log(item);
      (item.body = [
        "Founded in 1956, the Management Development Institute of Singapore (MDIS) is Singapore’s oldest not-for-profit professional institute for lifelong learning. MDIS has two main subsidiaries: Management Development Institute of Singapore Pte Ltd which oversees its Singapore academic operations, and MDIS International Pte Ltd which focuses on MDIS’ globalisation strategy.",

        "MDIS offers internationally-accredited courses in Business and Management, Engineering, Fashion and Jewellery Design, Health and Nursing, Information Technology, Languages and Education, Life Sciences, Media and Communications, Psychology, Tourism and Hospitality Management, and Safety and Environmental Management.  These programmes are offered in collaboration with renowned universities in the United Kingdom.",

        "MDIS is EduTrust certified, attesting to its exemplary education and business excellence standards. The institute was first awarded the certification in 2010 – subsequently renewed for four years in 2014 and 2018. MDIS was also one of the first Private Education Institutions (PEIs) to be registered under the Enhanced Registration Framework.",

        "The institute achieved a double win at the Singapore Prestige Brand Award (SPBA); it was one of four winners as well as the overall winner of the SPBA - Heritage Brands 2018. In 2017, MDIS was ranked 4th for the Enterprise 50 Award for its contributions in spurring Singapore’s economy.  In 2019, MDIS had successfully transited from Singapore Service Class to Singapore Quality Class (Service) and is honoured to be one of the winners for the Corporate Merit Award at the Biennial Singapore Health Award.",

        "Continuing with its long-standing tradition of giving back to society, the MDIS Education Trust Fund (inaugurated in 1999) supports deserving students facing financial difficulties in pursuing their education in Singapore. To date, MDIS has awarded more than 8,000 scholarships and bursaries totalling over S$6 million.  The institute also actively supports several charities and provides community assistance, in reaching out to the young, elderly, and disabled.",

        "Equally vested in corporate-level training, MDIS’ corporate training arm, the Management Development and Consultancy, was set up in 1995 to cater to the training needs of the workforce. In 2014, MDIS acquired the Service Quality Centre to diversify its offerings in training solutions – in its endeavour to be a premium provider of training solutions in the region.",

        "Apart from the main Singapore campus, MDIS has international campuses in Tashkent, Uzbekistan, as well as in Johor, Malaysia. MDIS also has representative offices in India, and Indonesia, as well as agents throughout Southeast Asia",
      ]),
        (this.newsContent = item);
    },
  },
  mounted() {
    this.newsContent = null;
  },
};
</script>

<style lang="scss" scoped></style>
