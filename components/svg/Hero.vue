<template>
  <div class="svg-hero">
    <SvgBackground class="svg-hero-background" />
    <SvgBull class="svg-hero-bull" />
    <SvgBear class="svg-hero-bear" />
  </div>
</template>

<style lang="scss" scoped>
  .svg-hero {
    width: 100%;
    position: relative;

    &-background {
      width: 100%;
    }

    &-bull {
      position: absolute;
      width: 20rem;
      left: 36%;
      bottom: 8rem;
    }

    &-bear {
      position: absolute;
      width: 18rem;
      left: 56%;
      bottom: 5rem;
    }
  }
</style>