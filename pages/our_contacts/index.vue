<template>
  <div class="contact">
    <div class="container">
      <div class="contact__wrapper">
        <div class="contact__wrapper__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4080.106657284687!2d69.27676122150255!3d41.31162753874182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2c64aa3d0f%3A0xba59bc80197d4da8!2z0JDQvNC40YAg0KLQtdC80YPRgCDQpdC40LXQsdC-0L3QuA!5e0!3m2!1sru!2s!4v1659336631155!5m2!1sru!2s"
            width="100%"
            height="600"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div class="contact__wrapper__map__info">
            <span>Address: </span>
            <p>Bunyodkor street 9, Chilanzar district, Tashkent, Uzbekistan</p>
            <span>Email:</span>
            <p>info@diplomat.university</p>
            <span>Телефон:</span>
            <p>+998 99 777 77 77</p>
          </div>
        </div>
        <div class="contact__wrapper__text">
          <p>
            Dear students, professors, prospective students, and the visitors of
            our website,
          </p>
          <p>
            For your enquiries and getting support please email to contacts
            below. Please note that emails sent to the wrong contacts will not
            be considered. Please ensure that your issue is addressed to the
            relevant contact.
          </p>
        </div>
        <div class="contact__wrapper__table">
          <div class="thead">
            <div class="tr">
              <div class="th">Service</div>
              <div class="th">Email</div>
            </div>
          </div>
          <div class="tbody">
            <div class="tr">
              <div class="th">Academic affairs</div>
              <div class="th">academicaffairsdiplomatuniversity.org</div>
            </div>
            <div class="tr">
              <div class="th">Admission</div>
              <div class="th">academicaffairsdiplomatuniversity.org</div>
            </div>
            <div class="tr">
              <div class="th">HR</div>
              <div class="th">academicaffairsdiplomatuniversity.org</div>
            </div>
            <div class="tr">
              <div class="th">Legal help</div>
              <div class="th">academicaffairsdiplomatuniversity.org</div>
            </div>
            <div class="tr">
              <div class="th">IT help</div>
              <div class="th">academicaffairsdiplomatuniversity.org</div>
            </div>
            <div class="tr">
              <div class="th">Other questions</div>
              <div class="th">academicaffairsdiplomatuniversity.org</div>
            </div>
          </div>
        </div>
        <div class="contact__wrapper__form">
          <p>
            Form for <br />
            direct letter
          </p>
          <form>
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone" />
              <input type="email" placeholder="Email the address" />
            </div>
            <div>
              <textarea placeholder="Type here"></textarea>
              <div class="check__and__send">
                <input type="checkbox" />

                <button class="submit__btn" type="submit">
                  <Button>Send</Button>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "our-contact",
};
</script>

<style lang="scss" scoped></style>
