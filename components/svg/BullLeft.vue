<template>
  <div class="svg-bg-left">
    <SvgBackgroundLeft class="svg-bg-left-background" />
    <div class="bg-gradient"></div>
    <SvgBull class="svg-bg-left-bull" />
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
  .svg-bg-left {
    width: 300%;
    height: 100%;
    position: absolute;
    right: 0;

    @media (min-width: map-get($breakpoints, "md")) {
      width: 1000px;
    }

    &-background {
      width: 92%;

      @media (min-width: map-get($breakpoints, "md")) {
        width: 100%;
        transform: translateX(-35%);
      }

      @media (min-width: map-get($breakpoints, "lg")) {
        width: 92%;
      }
    }

    &-bull {
      position: absolute;
      height: auto;
      width: 110vw;
      right: 5%;
      top: 4rem;
      opacity: 0.1;

      @media (min-width: map-get($breakpoints, "md")) {
        height: 85%;
        width: auto;
        top: auto;
        bottom: 0;
      }

      @media (min-width: map-get($breakpoints, "lg")) {
        opacity: 1;
      }
    }
  }

  .bg-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);

    @media (min-width: map-get($breakpoints, "lg")) {
      height: 4rem;
    }
  }
</style>