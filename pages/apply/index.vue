<template>
  <div class="apply__now">
    <div class="container">
      <div class="apply__now__wrapper">
        <form @submit.prevent="handleSubmit">
          <label>
            <p>Dastur</p>
            <select v-model="form.bosqich">
              <option>Bakalavr</option>
              <option>Magistratura</option>
            </select>
          </label>
          <label>
            <p>O'qish shakli</p>
            <select v-model="form.shakl">
              <option>Kunduzgi</option>
              <option>Sirtqi</option>
              <option>Kechgi</option>
              <option>Maxsus</option>
            </select>
          </label>
          <label>
            <p>Fakultet</p>
            <select v-model="form.fakultet">
              <option>Ekonomika</option>
              <option>Energetika</option>
            </select>
          </label>
          <p>Shaklni to'ldiring:</p>
          <div class="primary__form">
            <label for="name">
              F.I.O.
              <input
                v-model="form.name"
                type="text"
                id="name"
                placeholder="F.I.O."
              />
            </label>
            <label for="pol">
              Qavat
              <select id="pol" v-model="form.pol">
                <option>Qavat</option>
              </select>
            </label>
            <label for="date">
              Tug'ilgan sana
              <input
                v-model="form.birthdata"
                type="text"
                id="date"
                placeholder="Tug'ilgan sana"
              />
            </label>
            <label for="nat">
              Millati
              <input
                v-model="form.millat"
                type="text"
                id="nat"
                placeholder="Millati"
              />
            </label>
            <label for="num">
              Pasport seriya raqami
              <input
                v-model="form.pasport_num"
                type="text"
                id="num"
                placeholder="Pasport seriya raqami"
              />
            </label>
            <label for="passport">
              Pasportni kim bergan?
              <input
                v-model="form.hudud"
                type="text"
                id="passport"
                placeholder="Pasportni kim bergan?"
              />
            </label>
            <label for="srok">
              Eng yaxshi sanadan oldin
              <input
                v-model="form.sana"
                type="text"
                id="srok"
                placeholder="Eng yaxshi sanadan oldin"
              />
            </label>
            <label for="mesto">
              Yashash joyi
              <input
                v-model="form.yashash_joyi"
                type="text"
                id="mesto"
                placeholder="Yashash joyi"
              />
            </label>
            <label for="jitel">
              Doimiy yashash joyi
              <input
                v-model="form.doimiy_yashash_joyi"
                type="text"
                id="jitel"
                placeholder="Doimiy yashash joyi"
              />
            </label>
            <label for="phone">
              Telefon nomeri
              <input
                v-model="form.tel_raqam"
                type="text"
                id="phone"
                placeholder="Telefon nomeri"
              />
            </label>
            <label for="email">
              E-mail
              <input
                v-model="form.email"
                type="text"
                id="email"
                placeholder="E-mail"
              />
            </label>
            <label for="tel">
              Telefon raqami (Telegramda ro'yxatdan o'tgan)
              <input
                v-model="form.tg_tel_raqam"
                type="text"
                id="tel"
                placeholder=" Telefon raqami"
              />
            </label>
            <button type="submit" class="btn_submit">
              <Button class="apply__next__btn">Next</Button>
            </button>
            <img class="step__img" src="~/assets/icons/step1.svg" alt="" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "apply",
  data() {
    return {
      form: {
        bosqich: "",
        shakl: "",
        fakultet: "",
        name: "",
        pol: "",
        birthdata: "",
        millat: "",
        pasport_num: "",
        hudud: "",
        sana: "",
        yashash_joyi: "",
        doimiy_yashash_joyi: "",
        tel_raqam: "",
        email: "",
        tg_tel_raqam: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.form);

      this.form = {
        bosqich: "",
        shakl: "",
        fakultet: "",
        name: "",
        pol: "",
        birthdata: "",
        millat: "",
        pasport_num: "",
        hudud: "",
        sana: "",
        yashash_joyi: "",
        doimiy_yashash_joyi: "",
        tel_raqam: "",
        email: "",
        tg_tel_raqam: "",
      };


      this.$router.push("/apply/step2")
    },
  },
};
</script>

<style lang="scss" scoped></style>
