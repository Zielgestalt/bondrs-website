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
.hero {
  position: relative;
  padding: 10rem 1rem;
  // min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--clr-dark);
  background: var(--gradient-bg);

  p {
    font-size: var(--fs-3);
  }
}

.is-hero-image {
  width: 66vw;
  position: absolute;
  left: unset;
  right: 0;
  top: calc(50% + 3rem);
  transform: translateY(-50%);
  padding: 0;
}
</style>