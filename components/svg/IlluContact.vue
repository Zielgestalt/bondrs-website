<template>
  <div class="svg-contact">
    <SvgBackgroundContact class="svg-hero-background" />
    <SvgBull class="svg-contact-bull" />
    <SvgBear class="svg-contact-bear" />
  </div>
</template>

<style lang="scss" scoped>
  .svg-contact {
    width: 1500px;
    height: 100%;
    position: absolute;
    right: -8%;

    &-background {
      width: 92%;
    }

    &-bull {
      position: absolute;
      width: 18rem;
      left: 42%;
      bottom: 5%;
    }

    &-bear {
      position: absolute;
      width: 18rem;
      left: 56%;
      bottom: 5%;
    }
  }
</style>