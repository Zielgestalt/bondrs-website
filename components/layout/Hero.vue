<template>
  <header class="hero">
    <div class="hero-gradient"></div>
    <div class="illu">
      <LazySvgIlluSun class="illu-sun" />
      <LazySvgIlluSkyscraper1 class="illu-skyscraper" />
      <LazySvgIlluGrid class="illu-grid" />
      <LazySvgIlluBull class="illu-bull" />
      <LazySvgIlluBear class="illu-bear" />
    </div>
    <div class="container">
      <div class="hero-grid">
        <div class="column text-flow is-flow-8">
          <div class="title text-flow is-flow-3">
            <p v-if="props.hero.overline" class="heading-4 overline is-uppercase">{{ props.hero.overline }}</p>
            <h1 class="heading-1">{{ props.hero.headline }}</h1>
          </div>
          <p>{{ props.hero.copy }}</p>
          <div class="button-group">
            <NuxtLink class="button cta is-gradient" :to="props.hero.cta1.url" target="_blank">{{ props.hero.cta1.text}}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  const props = defineProps({
    hero: { 
      type: Object,
      default: {
        overline: { type: String, default: null },
        headline: { type: String, default: null },
        copy: { type: String, default: null },
        cta1: {
          type: Object,
          default: {
            text: null,
            url: null,
          }
        },
        cta2: {
          type: Object,
          default: {
            text: null,
            url: null,
          }
        }
      }
    }
  })
</script>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
.hero {
  position: relative;
  padding: 0 2rem 16rem;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: var(--fs-3);
  }

  @media (min-width: map-get($breakpoints, "md")) {
    padding: 0 2rem 20rem;
  }

  @media (min-width: map-get($breakpoints, "lg")) {
    padding: 10rem 4rem;
  }

  @media (min-width: map-get($breakpoints, "xl")) {
    min-height: unset;
    padding: 10rem 1rem;
  }

  &-gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: var(--clr-dark);
    background: var(--gradient-bg);
    opacity: 0;

    @media (min-width: map-get($breakpoints, "lg")) {
      opacity: 0.5;
    }
  }

  .hero-grid {
    display: grid;
    gap: var(--size-9);
    grid-template-columns: 1fr;

    @media (min-width: map-get($breakpoints, "md")) {
      grid-template-columns: 4fr 1fr;
    }

    @media (min-width: map-get($breakpoints, "lg")) {
      grid-template-columns: 4fr 3fr;
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

  &-sun {
    display: none;

    @media (min-width: map-get($breakpoints, "md")) {
      display: block;
      position: absolute;
      width: 13%;
      right: 22%;
      bottom: 45%;
    }

    @media (min-width: map-get($breakpoints, "lg")) {
      width: 5%;
      right: 10%;
      bottom: unset;
      top: 18%;
    }
  }

  &-skyscraper {
    position: absolute;
    right: 0;
    bottom: 20%;
    height: auto;
    width: 100%;
    opacity: 0.4;

    @media (min-width: map-get($breakpoints, "lg")) {
      height: unset;
      width: 44%;
      right: 0;
      bottom: unset;
      top: 18%;
      opacity: 0.6;
    }
  }

  &-grid {
    position: absolute;
    height: 20%;
    width: auto;
    top: 80%;
    transform: translateX(-33%);

    @media (min-width: map-get($breakpoints, "lg")) {
      height: unset;
      width: 200%;
      top: 53%;
      right: -40%;
      transform: translateX(23%);
    }

    @media (min-width: map-get($breakpoints, "xl")) {
      top: 63%;
      width: 120%;
      transform: translateX(0);
    }
  }

  &-bull {
    position: absolute;
    width: 40%;
    bottom: 10%;
    left: 10%;

    @media (min-width: map-get($breakpoints, "md")) {
      width: 33%;
      left: 30%;
    }

    @media (min-width: map-get($breakpoints, "lg")) {
      width: 20%;
      bottom: unset;
      top: 27%;
      left: unset;
      right: 20%;
    }

    @media (min-width: map-get($breakpoints, "xl")) {
      width: 15%;
      right: 27%;
    }
  }

  &-bear {
    position: absolute;
    width: 40%;
    bottom: 8%;
    right: 10%;

    @media (min-width: map-get($breakpoints, "md")) {
      width: 33%;
      right: 10%;
    }

    @media (min-width: map-get($breakpoints, "lg")) {
      width: 20%;
      top: 33%;
      bottom: unset;
      left: unset;
      right: 5%;
    }

    @media (min-width: map-get($breakpoints, "xl")) {
      width: 15%;
      right: 15%;
    }
  }
}
</style>