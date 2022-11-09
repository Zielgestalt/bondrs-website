<template>
  <section id="contact" class="has-decoration" style="z-index: 1;">
    <div class="has-background">
      <div class="illu">
        <LazySvgIlluBg3 class="illu-bg" />
        <LazySvgIlluSun class="illu-sun" />
        <LazySvgIlluSkyscraper1 class="illu-skyscraper" />
        <LazySvgIlluGrid class="illu-grid" />
        <LazySvgIlluBull class="illu-bull" />
        <LazySvgIlluBear class="illu-bear" />
      </div>
      <div class="container">
        <div class="contact-grid">
          <div class="column"></div>
          <div class="column text-flow is-flow-10">
            <h2 class="heading-2">Need more answers?</h2>
            <p>Please reach out for the team directly in <NuxtLink to="https://discord.gg/JGnMPsKkcQ" target="_blank">Discord</NuxtLink> or write us a message:</p>
            <LayoutContact />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;

  @if map-get($breakpoints, "lg") {
    @media (min-width: map-get($breakpoints, "lg")) {
      gap: var(--size-9);
      grid-template-columns: 1fr 1fr;
    }
  }
}

.illu {
  width: 100%;
  height: 100%;
  position: absolute;
  left: unset;
  right: 0;
  top: 0;
  padding: 0;

  @media (min-width: map-get($breakpoints, "lg")) {
    max-height: 550px;
    width: 1000px;
    right: 64%;
  }

  @media (min-width: map-get($breakpoints, "xl")) {
    right: 50%;
  }

  > * {
    position: absolute;
  }

  &-bg {
    width: 200%;
    transform: translateX(-30%);

    @media (min-width: map-get($breakpoints, "md")) {
      width: unset;
      height: 100%;
      transform: translateX(-5%);
    }

    @media (min-width: map-get($breakpoints, "lg")) {
      transform: translateX(12%);
      width: 100%;
    }

    @media (min-width: map-get($breakpoints, "xl")) {
      transform: translateX(0);
      top: 3rem;
    }
  }

  &-sun {
    display: none;

    @media (min-width: map-get($breakpoints, "lg")) {
      display: block;
      width: 10%;
      top: 0;
      right: 32%;
      z-index: 1;
    }
  }

  &-skyscraper {
    display: none;

    @media (min-width: map-get($breakpoints, "lg")) {
      display: block;
      bottom: 30%;
      right: 25%;
      width: 70%;
      opacity: 0.7;
      transform: scaleX(-1);
    }
  }

  &-grid {
    display: none;

    @media (min-width: map-get($breakpoints, "lg")) {
      display: block;
      height: 30%;
      width: auto;
      top: 70%;
      right: 0;
      transform: translateX(20%);
      opacity: 0.4;
    }
  }

  &-bull,
  &-bear {
    display: none;

    @media (min-width: map-get($breakpoints, "lg")) {
      display: block;
      z-index: 2;
      height: 42%;
      width: auto;
      bottom: 20%;
      right: -6%;
    }

    @media (min-width: map-get($breakpoints, "xl")) {
      right: 23%;
      // height: 90%;
    }
  }

  &-bull {
    z-index: 1;
    height: 48%;
    transform: translateX(-70%);
  }
}
</style>