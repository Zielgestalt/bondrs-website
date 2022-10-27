<template>
  <div class="svg-bg-right">
    <SvgBackgroundRight class="svg-bg-right-background" />
    <SvgBear class="svg-bg-right-bear" />
  </div>
</template>

<style lang="scss" scoped>
  .svg-bg-right {
    width: 1000px;
    height: 100%;
    position: absolute;
    left: 0;

    &-background {
      width: 92%;
    }

    &-bear {
      position: absolute;
      height: 85%;
      width: auto;
      left: 5%;
      bottom: 0rem;
    }
  }
</style>