<template>
  <div class="bull has-background">
    <div class="illu">
      <LazySvgIlluBg1 class="illu-bg" />
      <LazySvgIlluSun class="illu-sun" />
      <LazySvgIlluSkyscraper2 class="illu-skyscraper" />
      <LazySvgIlluGrid class="illu-grid gradient" />
      <LazySvgIlluBull class="illu-bull" />
    </div>
    
    <div class="container">
      <div class="bull-grid">
        <div class="column">
          
        </div>
        <div class="copy text-flow is-flow-7">
          <h2 class="heading-2 is-uppercase">{{ mat.headline }}</h2>
          <p class="heading-4">{{ mat.copy }}</p>
          <ul class="iconlist text-flow is-flow-7">
            <li v-for="(item, bullindex) in mat.list" :key="`bull-${bullindex}`" class="text-flow is-flow-2 is-observed onvisible-fade-up" :class="`is-staggered-${bullindex}`">
              <span class="signetitem">
                <SvgIcon />
              </span>
              <p class="heading-4">{{ item.headline }}</p>
              <p>{{ item.copy }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  mat: { type: Object, default: {}},
})
</script>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
.bull {
  .bull-grid {
    display: grid;
    gap: var(--size-9);
    grid-template-columns: 1fr;

    @media (min-width: map-get($breakpoints, "md")) {
      grid-template-columns: 1fr 3fr;
    }

    @media (min-width: map-get($breakpoints, "lg")) {
      grid-template-columns: 2fr 3fr;
    }

    @media (min-width: map-get($breakpoints, "xl")) {
      grid-template-columns: 1fr 1fr;
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
      right: 55%;
    }

    > * {
      position: absolute;
    }

    &-bg {
      width: 200%;
      transform: translateX(-50%);

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
      }
    }

    &-sun {
      display: none;

      @media (min-width: map-get($breakpoints, "xl")) {
        display: block;
        width: 10%;
        top: 8%;
        right: 65%;
      }
    }

    &-skyscraper {
      display: none;

      @media (min-width: map-get($breakpoints, "lg")) {
        display: block;
        bottom: 30%;
        right: 50%;
        width: 25%;
        opacity: 0.7;
      }
    }

    &-grid {
      display: none;

      @media (min-width: map-get($breakpoints, "md")) {
        display: block;
        height: 30%;
        width: auto;
        top: 25%;
        transform: translateX(-50%);
        opacity: 0.4;
      }

      @media (min-width: map-get($breakpoints, "lg")) {
        top: 70%;
        right: 0;
        transform: translateX(20%);
        opacity: 0.4;
      }
    }

    &-bull {
      width: 9rem;
      right: 3rem;
      top: 0.75rem;
      z-index: 1;

      @media (min-width: map-get($breakpoints, "md")) {
        width: 24%;
        top: 1rem;
        right: unset;
        left: 2%;
      }

      @media (min-width: map-get($breakpoints, "lg")) {
        height: 70%;
        width: auto;
        top: unset;
        bottom: 2rem;
        left: unset;
        right: 0;
      }

      @media (min-width: map-get($breakpoints, "xl")) {
        height: 90%;
        bottom: 0;
      }
    }
  }
}
</style>