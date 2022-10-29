<template>
  <div class="bear has-background">
    <div class="illu">
      <LazySvgIlluBg2 class="illu-bg" />
      <LazySvgIlluSun class="illu-sun" />
      <LazySvgIlluSkyscraper3 class="illu-skyscraper" />
      <LazySvgIlluGrid class="illu-grid" />
      <LazySvgIlluBear class="illu-bear" />
    </div>

    <div class="container">
      <div class="bear-grid">
        <div class="copy text-flow is-flow-7">
          <h2 class="heading-2 is-uppercase">{{ mat.headline }}</h2>
          <p class="heading-4">{{ mat.copy }}</p>
          <ul class="iconlist text-flow is-flow-7">
            <li v-for="(item, bearindex) in mat.list" :key="`bear-${bearindex}`" class="text-flow is-flow-2 is-observed onvisible-fade-up" :class="`is-staggered-${bearindex}`">
              <span class="signetitem">
                <SvgIcon icon="bear" />
              </span>
              <p class="heading-4">{{ item.headline }}</p>
              <p>{{ item.copy }}</p>
            </li>
          </ul>
        </div>

        <div class="column">
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

.bear {
  .bear-grid {
    display: grid;
    gap: var(--size-9);
    padding-top: var(--size-9);
    grid-template-columns: 1fr;

    @media (min-width: map-get($breakpoints, "md")) {
      padding-top: 0;
      grid-template-columns: 3fr 1fr;
    }

    @media (min-width: map-get($breakpoints, "lg")) {
      grid-template-columns: 3fr 2fr;
    }

    @media (min-width: map-get($breakpoints, "xl")) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .illu {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;

    @media (min-width: map-get($breakpoints, "lg")) {
      max-height: 550px;
      width: 1000px;
      left: 64%;
    }

    @media (min-width: map-get($breakpoints, "xl")) {
      left: 55%;
    }

    > * {
      position: absolute;
    }

    &-bg {
      width: 240%;
      transform: translateX(-10%);

      @media (min-width: map-get($breakpoints, "md")) {
        width: unset;
        height: 100%;
        transform: translateX(-15%);
      }

      @media (min-width: map-get($breakpoints, "lg")) {
        transform: translateX(-12%);
        width: 100%;
      }

      @media (min-width: map-get($breakpoints, "xl")) {
        transform: translateX(-10%);
      }
    }

    &-bear {
      width: 9rem;
      right: 3rem;
      top: 0.5rem;
      z-index: 1;

      @media (min-width: map-get($breakpoints, "md")) {
        width: 24%;
        top: 1rem;
        right: 3%;
      }

      @media (min-width: map-get($breakpoints, "lg")) {
        height: 70%;
        width: auto;
        top: unset;
        bottom: 2rem;
        left: 0;
        right: unset;
      }

      @media (min-width: map-get($breakpoints, "xl")) {
        height: 90%;
        bottom: 0;
      }
    }

    &-sun {
      display: none;

      @media (min-width: map-get($breakpoints, "xl")) {
        display: block;
        width: 8%;
        top: 24%;
        left: 52%;
      }
    }

    &-skyscraper {
      display: none;

      @media (min-width: map-get($breakpoints, "lg")) {
        display: block;
        bottom: 30%;
        left: 38%;
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
        transform: translateX(-15%);
      }

      @media (min-width: map-get($breakpoints, "lg")) {
        top: 70%;
        left: 0;
        transform: translateX(-20%);
      }
    }
  }
}
</style>