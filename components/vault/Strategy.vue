<template>
  <div class="strategy">
    <div class="strategy-icon"><SvgOwl /></div>
    <div class="strategy-description text-flow">
      <h3 class="heading-3 is-uppercase">Current Strategy</h3>
      <p>{{ vaultData.data.vault.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  vaultAddress: { type: String, default: '' },
})

const { data: vaultData, pending } = await useFetch(`https://live.yieldster.finance/Vault/v2.0/yieldster/vault-details/${props.vaultAddress}`)

</script>

<style lang="scss" scoped>
.strategy {
  // --color: var(--clr-dark);
  // --heading: var(--clr-dark);
  padding-right: 10rem;
  position: relative;

  &-icon {
    position: absolute;
    right: 0;
    top: 0;
    width: 8rem;
    transform: translate(2rem, -3rem);
  }
}
</style>