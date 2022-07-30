<template>
  <div class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div>
          <div class="footer-logo">
            <img src="~/assets/icons/footer-logo.svg" alt="" />
          </div>

          <h6>Follow us</h6>
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
        <div class="left-read">
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
          </ul>
        </div>
        <div class="left-read">
          <h6>Address:</h6>
          <div class="icons-wallery">
            <fa :icon="['fas', 'location-dot']" />
            <span
              >Bunyodkor street 9, Chilanzar district, Tashkent,
              Uzbekistan</span
            >
          </div>
          <h6>Contacts:</h6>
          <div class="icons-wallery mb">
            <fa :icon="['fas', 'phone']" />
            <span>+998 99 777 77 77</span>
          </div>
          <div class="icons-wallery">
            <fa :icon="['fas', 'envelope']" />
            <span>info@diplomat.university</span>
          </div>
          <h6>Schedule:</h6>
          <div class="icons-wallery">
            <fa :icon="['fas', 'clock']" />
            <span>Monday - Friday: 9:00-18:00</span>
          </div>
        </div>
        <div>
          <h6>Subscribe & Get More Information</h6>
          <form>
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    <hr>
    <div class="container">
      <div class="copyright">
        <p>Copyright © Diplomat University 2022. All rights Reserved.</p>
        <p>Developed by: Online Service Group</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-component",
};
</script>

<style lang="scss" scoped></style>
