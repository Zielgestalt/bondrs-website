<template>
  <div v-if="!pending && !verror" class="strategy">
    <div class="strategy-icon"><SvgOwl /></div>
    <div class="strategy-description text-flow">
      <h3 class="heading-3 is-uppercase">Current Strategy</h3>
      <p>{{ vaultData.data.vault.description }}</p>
      <p><NuxtLink :to="readmore.link" target="_blank">> {{ readmore.text }}</NuxtLink></p>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  vaultAddress: { type: String, default: '' },
  readmore: { type: Object, default: {} },
})

const vaultError = ref(false)

const { data: vaultData, pending, error } = await useFetch(`https://live.yieldster.finance/Vault/v2.0/yieldster/vault-details/${props.vaultAddress}`)

if (error) {
  vaultError.value = true
}
</script>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
.strategy {
  // --color: var(--clr-dark);
  // --heading: var(--clr-dark);
  // padding-right: 10rem;
  position: relative;

  &-icon {
    position: absolute;
    right: -3rem;
    top: -3rem;
    width: 8rem;
    transform: translate(2rem, -3rem);
    z-index: -1;
    opacity: 0.2;
  }

  @media (min-width: map-get($breakpoints, "md")) {
    padding-right: 10rem;

    &-icon {
      right: 0;
      top: 0;
      z-index: 1;
      opacity: 1;
    }
  }
}
</style>