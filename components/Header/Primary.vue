<template>
  <div class="header header__primary">
    <div class="header-container">
      <div class="header-wrapper">
        <nav class="primary__navbar">
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
                    ><img src="~/assets/icons/dark-logo.svg" alt=""
                  /></NuxtLink>
                </div>
                <ul>
                  <li>
                    <NuxtLink to="/about_us" name="About Us">About Us</NuxtLink>
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
        <div class="primary__bg">
          <img src="~/assets/images/bg_primary.png" alt="" />
          <div class="primary__bg__content">
            <div class="container">
              <div class="content__body">
                <p>{{ this.$route.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-component",
  data() {
    return {
      is_navbar_active: false,
      title: "",
    };
  },
  methods: {
    routerLink: function (name, num) {
      console.log(name, num);
      console.log(this.$route);
    },
  },
  mounted() {
      console.log(this.$route);

    window.addEventListener("scroll", () => {
      window.scrollY > 160
        ? (this.is_navbar_active = true)
        : (this.is_navbar_active = false);
    });
  },

  computed: {
    getLink: function () {
      return routerLink(Math.random(), 123);
    },
  },
};
</script>

<style lang="scss" scoped></style>
