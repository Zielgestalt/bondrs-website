<template>
  <div class="svg-hero">
    <SvgBackground class="svg-hero-background" />
    <SvgBull class="svg-hero-bull" />
    <SvgBear class="svg-hero-bear" />
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
  .svg-hero {
    width: 100%;
    height: 100%;
    position: relative;

    &-background {
      height: 100%;
      width: 200%;
      object-fit: contain;
      transform: translateX(-50%);
      opacity: 0.3;

      @media (min-width: map-get($breakpoints, "lg")) {
        height: auto;
        width: 100%;
        transform: translateX(0);
        opacity: 1;
      }
    }

    &-bull {
      position: absolute;
      width: 7rem;
      left: 1.5rem;
      top: 2.5rem;

      @media (min-width: map-get($breakpoints, "md")) {
        left: 36%;
        top: auto;
        bottom: 6rem;
        width: 20rem;
      }
    }

    &-bear {
      position: absolute;
      width: 6rem;
      left: 7rem;
      top: 3.5rem;

      @media (min-width: map-get($breakpoints, "md")) {
        width: 18rem;
        top: auto;
        left: 56%;
        bottom: 3rem;
      }
    }
  }
</style>