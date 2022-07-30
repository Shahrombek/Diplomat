<template>
  <div class="primary__btn">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.primary__btn {
  display: inline-block;
  background: #1c61ac;
  border-radius: 4px;
  cursor: pointer;
  height: 58px;
  color: white;
  padding: 17px 59px;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  transition: .3s;

  &:hover{
    box-shadow: 0 2px 7px 2px #1c62aca4;
  }
}
</style>
