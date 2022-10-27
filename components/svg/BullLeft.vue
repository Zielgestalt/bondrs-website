<template>
  <div class="svg-bg-left">
    <SvgBackgroundLeft class="svg-bg-left-background" />
    <div class="bg-gradient"></div>
    <SvgBull class="svg-bg-left-bull" />
  </div>
</template>

<style lang="scss" scoped>
  .svg-bg-left {
    width: 1000px;
    height: 100%;
    position: absolute;
    right: 0;

    &-background {
      width: 92%;
    }

    &-bull {
      position: absolute;
      height: 85%;
      width: auto;
      right: 5%;
      bottom: 0rem;
    }
  }

  .bg-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  }
</style>