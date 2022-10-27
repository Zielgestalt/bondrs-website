<template>
  <div class="icon" :class="props.icon">
    <SvgShield class="icon-background" />
    <SvgIconBull v-if="props.icon === 'bull'" class="icon-bull" />
    <SvgIconBear v-if="props.icon === 'bear'" class="icon-bear" />
  </div>
</template>

<script setup>
  const props = defineProps({
    icon: { type: String, default: 'bull'}
  })
</script>

<style lang="scss" scoped>
  .icon {

    &.bull {
      color: var(--clr-primary);
    }

    &.bear {
      color: var(--clr-secondary);
    }
  }
  .icon-bull {
    position: absolute;
    width: 50%;
    left: 22%;
    bottom: 16%;
  }

  .icon-bear {
    position: absolute;
    width: 55%;
    right: 18%;
    bottom: 16%;
  }
</style>