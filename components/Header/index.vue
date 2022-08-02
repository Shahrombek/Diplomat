<template>
  <div class="header">
    <div class="header-container">
      <div class="header-wrapper">
        <nav :class="{ showbg: is_navbar_active }">
          <div class="nav-top">
            <div class="container">
              <div class="navbar-top-wrapper">
                <div class="navbar-top-contact">
                  <button class="btn call">
                    <fa :icon="['fas', 'phone']" />
                    <span>+998 99 777 77 77</span>
                  </button>
                  <div class="icons">
                    <button class="btn">
                      <fa :icon="['fab', 'telegram']" />
                    </button>
                    <button class="btn">
                      <fa :icon="['fab', 'youtube']" />
                    </button>
                    <button class="btn">
                      <fa :icon="['fab', 'facebook-f']" />
                    </button>
                    <button class="btn">
                      <fa :icon="['fab', 'instagram']" />
                    </button>
                  </div>
                </div>
                <div class="navbar-top-apply">
                  <button class="btn apply">
                    <nuxt-link to="/apply">Apply Now</nuxt-link>
                  </button>
                  <button class="btn search">
                    <fa :icon="['fas', 'magnifying-glass']" />
                  </button>
                  <select>
                    <option value="">en</option>
                    <option value="">ru</option>
                    <option value="">uz</option>
                    <option value="">kz</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="nav-bottom">
            <div class="container">
              <div class="nav-bottom-wrapper">
                <div class="logo">
                  <NuxtLink to="/"
                    ><img src="~/assets/icons/light-logo.svg" alt=""
                  /></NuxtLink>
                </div>
                <ul>
                  <li>
                    <NuxtLink to="/about_us">About Us</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/academic_part">Academic part</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/reception">Reception</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/life_in_diplomat">Life in Diplomat</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/research">Research</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/news_and_events">News and Events</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/quick_links">Quick Links</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/our_contacts">Our contacts</NuxtLink>
                  </li>
                  <li>
                    <button class="btn btn-burger">
                      <fa :icon="['fas', 'bars']" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div class="container">
          <div class="text-body">
            <span> BEST University IN THIS TOWN </span>
            <h1>Diplomat University</h1>
            <p>
              Have you been admitted to our next great class? Start the
              countdown by completing your enrollment and meeting other incoming
              Wildcats.
            </p>
          </div>
        </div>
      </div>
      <div class="swiper__area">
        <div class="container">
          <client-only>
            <swiper :options="swiperOption" class="swiper__area__data">
              <swiper-slide v-for="(item, index) in data" :key="index">
                <div class="swiper-item">
                  <img :src="item.img" alt="logo" />
                  <div class="swiper-item-content">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.info }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperData from "~/data/HeaderSwiperData";
export default {
  name: "header-component",
  data() {
    return {
      is_navbar_active: false,
      data: null,
      swiperOption: {
        loop: true,
        slidesPerView: 4,
        autoplay: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  mounted() {
    this.data = SwiperData;
    window.addEventListener("scroll", () => {
      window.scrollY > 160
        ? (this.is_navbar_active = true)
        : (this.is_navbar_active = false);
    });
  },
};
</script>

<style lang="scss" scoped></style>
