<template>
  <div class="files">
    <div class="container">
      <div class="files__wrapper">
        <div class="files__wrapper__list">
          <p>Quyidagi hujjatlarni yuklang:</p>
          <div class="files__wrapper__list__item">
            <span>Raqamli fotografiya</span>
            <div>
              <label for="file1"> <fa :icon="['fas', 'link']" /> </label>
              <input type="file" id="file1" @change="file1" />
              <div class="file__content">
                <span>Talablar</span>
                <p v-if="upload.img1 !== null">Successfully uploaded</p>
                <ul>
                  <li>3x4 (oq fonda) - jpeg, jpg, png formatida</li>
                  <li>Maksimal fayl hajmi 2 MB gacha.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="files__wrapper__list__item">
            <span>Pasportning skanerlangan nusxasi</span>
            <div>
              <label for="file2"> <fa :icon="['fas', 'link']" /> </label>
              <input type="file" id="file2" @change="file2" />
              <div class="file__content">
                <span>Talablar</span>
                <p v-if="upload.img2 !== null">Successfully uploaded</p>
                <ul>
                  <li>
                    (shu jumladan doimiy yashash manzili ko'rsatilgan hujjat) -
                    pdf formatida.
                  </li>
                  <li>Maksimal fayl hajmi 2 MB gacha.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="files__wrapper__list__item">
            <span>Sertifikatning skanerlangan nusxasi </span>
            <div>
              <label for="file3"> <fa :icon="['fas', 'link']" /> </label>
              <input type="file" id="file3" @change="file3" />
              <div class="file__content">
                <span>Talablar</span>
                <p v-if="upload.img3 !== null">Successfully uploaded</p>
                <ul>
                  <li>
                    umumiy o'rta ta'lim yoki o'rta ma'lumot to'g'risidagi diplom
                    (yoki bu yil bitirganligini tasdiqlovchi hujjat) - pdf
                    formatida.
                  </li>
                  <li>Maksimal fayl hajmi 2 MB gacha.</li>
                </ul>
              </div>
            </div>
          </div>
          <button class="submit__btn">
            <Button>Next</Button>
          </button>
          <div class="step__img">
            <img src="~/assets/icons/step2.svg" alt="step2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "apply__step__2",
  data() {
    return {
      file: {
        img1: "",
        img2: "",
        img3: "",
      },
      upload: {
        img1: null,
        img2: null,
        img3: null,
      },
    };
  },
  methods: {
    file1(e) {
      this.file.img1 = e.target.files[0];
      this.upload.img1 = true;
    },
    file2(e) {
      this.file.img2 = e.target.files[0];
      this.upload.img2 = true;
    },
    file3(e) {
      this.file.img3 = e.target.files[0];
      this.upload.img3 = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
