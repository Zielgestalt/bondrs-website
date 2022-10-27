<template>
  <a :href="`https://yieldster.finance/vault/${props.vaultAddress}/dashboard`" target="_blank" class="bondrs-cta button" :data-theme="props.vaultType" :class="props.vaultType">
    <SvgIcon :icon="props.vaultType" class="button-cta-icon" />
    Invest like a {{ props.vaultType }}
  </a>
</template>

<script setup lang="ts">

const props = defineProps({
  vaultType: { type: String, default: 'bear'},
  vaultAddress: { type: String, default: '' },
})

</script>

<style lang="scss" scoped>
  .button {
    position: relative;
    min-width: 280px;

    &-cta-icon {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -100%);
      width: 4rem;
      transition: transform var(--transition);
    }

    &:hover {
      .button-cta-icon {
        transform: translate(-50%, -120%)
      }
    }
  }
</style>