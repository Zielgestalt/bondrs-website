<template>
  <header class="hero">
    <div class="is-hero-image">
      <!-- <SvgBackground class="is-hero-background" /> -->
      <SvgHero />
    </div>
    <div class="container">
      <div class="grid grid-2">
        <div class="column text-flow is-flow-6">
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
  padding: 12rem 1rem 8rem;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--clr-dark);
  background: var(--gradient-bg);

  p {
    font-size: var(--fs-3);
  }

  @media (min-width: map-get($breakpoints, "md")) {
    padding: 0 2rem 20rem;
  }

  @media (min-width: map-get($breakpoints, "lg")) {
    min-height: unset;
    padding: 10rem 1rem;
  }
}

.is-hero-image {
  width: 100vw;
  height: 100%;
  position: absolute;
  left: unset;
  right: 0;
  top: 0;
  padding: 0;

  @media (min-width: map-get($breakpoints, "lg")) {
    height: auto;
    width: 66vw;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>