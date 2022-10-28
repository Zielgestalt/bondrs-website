<template>
  <div class="svg-bg-right">
    <SvgBackgroundRight class="svg-bg-right-background" />
    <div class="bg-gradient"></div>
    <SvgBear class="svg-bg-right-bear" />
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
  .svg-bg-right {
    width: 300%;
    height: 100%;
    position: absolute;
    left: 0;

    @media (min-width: map-get($breakpoints, "md")) {
      width: 1000px;
    }

    &-background {
      width: 92%;
    }

    &-bear {
      position: absolute;
      height: auto;
      width: 110vw;
      left: 15%;
      top: 2rem;
      opacity: 0.1;

      @media (min-width: map-get($breakpoints, "md")) {
        height: 85%;
        width: auto;
        top: auto;
        bottom: 0;
        left: 5%;
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

    @media (min-width: map-get($breakpoints, "md")) {
      display: none;
    }
  }
</style>