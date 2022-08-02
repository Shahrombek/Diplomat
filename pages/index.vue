<template>
  <div>
    <div class="diplomat__university">
      <div class="container">
        <div class="diplomat diplomat__university__wrapper">
          <div class="view__gallery">
            <img src="~/assets/images/d_university1.png" alt="img" />
            <button class="btn">
              <span>View Gallery</span>
              <fa :icon="['fas', 'arrow-right-long']" />
            </button>
          </div>
          <div class="video__content">
            <img src="~/assets/images/d_university2.png" alt="img" />
            <div class="video__icon">
              <img src="~/assets/icons/videoIcon.svg" alt="" />
            </div>
            <span></span>
            <span class="anime__delay"></span>
          </div>
          <div class="diplomat__info">
            <span>WHY CHOOSE US</span>
            <h2>Why Diplomat University</h2>
            <p>
              As Diplomat’s land-grant university, we are driven to do great
              things. It’s our passion to transform the lives of our student
              Wildcats and to solve some of the biggest challenges facing our
              state and the world.
            </p>
            <div class="diplomat__check__step">
              <p><fa :icon="['fas', 'check']" /> Graduate Programs</p>
              <p><fa :icon="['fas', 'check']" /> International Hubs</p>
              <p><fa :icon="['fas', 'check']" /> Undergraduate Programs</p>
              <p><fa :icon="['fas', 'check']" /> Alumni & Giving</p>
              <p><fa :icon="['fas', 'check']" /> Doctoral Degreess</p>
              <p><fa :icon="['fas', 'check']" /> Global Students</p>
            </div>
            <div class="diplomat__score">
              <div>
                <h6>
                  76
                  <img src="~/assets/icons/plus.svg" alt="plus" />
                </h6>
                <p>Years Of Experience</p>
              </div>
              <div>
                <h6>
                  25K
                  <img src="~/assets/icons/plus.svg" alt="plus" />
                </h6>
                <p>Global Students</p>
              </div>
            </div>

            <Button>READ MORE</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="gain__valuable">
      <div class="container">
        <div class="gain__valuable__wrapper">
          <div class="gain__valuable__wrapper__left">
            <span>TO THE JOURNEY AHEAD</span>
            <h2>Gain valuable Knowledga & Experience</h2>
            <div>
              <button class="btn">
                <img src="~/assets/icons/university.svg" alt="univer" />
              </button>
              <div class="content">
                <h4>University Life</h4>
                <p>
                  At Eller, our forward-looking approach gives students
                  confidence to lead in the face of profound technical, social
                  and economic change.
                </p>
              </div>
            </div>
            <div>
              <button class="btn btn__second">
                <img src="~/assets/icons/pc.svg" alt="univer" />
              </button>
              <div class="content">
                <h4>Online Education</h4>
                <p>
                  We collaborate without boundaries and create innovations that
                  improve the world. Here, students become leaders. Ideas become
                  best practices.
                </p>
              </div>
            </div>
            <div>
              <button class="btn">
                <img src="~/assets/icons/users.svg" alt="univer" />
              </button>
              <div class="content">
                <h4>Campus Tours</h4>
                <p>
                  Concepts become thriving businesses. Given our fearless
                  spirit, it’s no wonder we often appear near the top in
                  international rankings.
                </p>
              </div>
            </div>
          </div>
          <div class="gain__valuable__wrapper__right">
            <div class="img__wallery wallery__left">
              <div class="img__wallery__item first__item">
                <img src="~/assets/icons/bg.png" alt="bg" />
                <div class="img__wallery__item__content dark__content">
                  <h4>You Apply</h4>
                  <p>
                    Your support makes it possible for students to rise over
                    barriers and gain valuable experience to expand their
                    knowledge and leadership.
                  </p>
                </div>
              </div>
              <div class="img__wallery__item second__item">
                <img src="~/assets/images/univerLife2.png" alt="bg" />
              </div>
            </div>
            <div class="img__wallery">
              <div class="img__wallery__item three__item">
                <img src="~/assets/images/univerLife1.png" alt="bg" />
              </div>
              <div class="img__wallery__item four__item">
                <img src="~/assets/icons/bg.png" alt="bg" />
                <div class="img__wallery__item__content">
                  <h4>We Connect</h4>
                  <p>
                    Eller College and the dean the flexibility to seize new
                    initiatives, meet unexpected needs and strengthen ongoing
                    programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="faculties">
      <div class="container">
        <div class="faculties__wrapper">
          <h2>Faculties</h2>
          <div class="faculties__wrapper__card">
            <div class="faculties__wrapper__card__item">
              <img src="~/assets/images/faculty1.png" alt="" />
            </div>
            <div class="faculties__wrapper__card__item">
              <img src="~/assets/images/faculty2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="diplomat__news">
      <div class="container">
        <div class="diplomat__news__wrapper">
          <span>The latest stories from Diplomat</span>
          <div class="diplomat__news__wrapper__header">
            <h2>Diplomat news</h2>
            <Button>view more</Button>
          </div>
          <div class="diplomat__news__wrapper__body">
            <DiplomatNews showItemCount="7" />
          </div>
        </div>
      </div>
    </div>

    <div class="banner">
      <div class="container">
        <div class="banner__wrapper">
          <span>INTERESTED IN JOINING US ?</span>
          <h2>Join Us For Information About New Student Admissions</h2>
          <p>
            At Eller, our forward-looking approach gives students confidence to
            lead in the face of profound technical, social and economic change.
          </p>
          <Button>Contact us</Button>
        </div>
      </div>
    </div>

    <div class="diplomat__events">
      <div class="container">
        <div class="diplomat__events__wrapper">
          <span>The latest events from Diplomat</span>
          <div class="diplomat__events__wrapper__header">
            <h2>Diplomat events</h2>
            <Button>view more</Button>
          </div>
          <div class="diplomat__events__wrapper__body">
            <DiplomatEvents showItemCount="3" />
          </div>
        </div>
      </div>
    </div>
    <div class="partner__swiper">
      <div class="container">
        <div class="partner__swiper__wrapper">
          <h2>Our Partners</h2>
          <client-only>
            <swiper :options="swiperOption" class="partner__swiper__wrapper__body">
              <swiper-slide>
                <div class="swiper-item">
                  <img src="~/assets/icons/partner_logo1.svg" alt="logo" />
                </div>
              </swiper-slide>
              <swiper-slide
                ><div class="swiper-item">
                  <img src="~/assets/icons/partner_logo2.svg" alt="logo" /></div
              ></swiper-slide>
              <swiper-slide
                ><div class="swiper-item">
                  <img src="~/assets/icons/partner_logo3.svg" alt="logo" /></div
              ></swiper-slide>
              <swiper-slide
                ><div class="swiper-item">
                  <img src="~/assets/icons/partner_logo4.svg" alt="logo" /></div
              ></swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      swiperOption: {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4,
        autoplay:true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style lang="scss"></style>
