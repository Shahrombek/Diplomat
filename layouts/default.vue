<template>
  <div>
    <Header v-if="this.$route.path === '/'" />
    <HeaderPrimary v-if="this.$route.path !== '/'" />
    <div :class="{ home_wrapper: this.$route.path === '/' }"><Nuxt /></div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
