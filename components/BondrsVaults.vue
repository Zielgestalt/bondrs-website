<template>
  <div class="box glass text-flow is-flow-6" style="overflow: hidden;">
    <VaultStrategy :vaultAddress="mat.bearVault.vaultAddress" :readmore="mat.bearVault.readmore" />

    <div class="box large glass">

      <div class="grid-vaults">
        <div class="column is-flex">
          <LazyVaultInfo vaultType="bear" :vaultAddress="mat.bearVault.vaultAddress" :readmore="mat.bearVault.readmore" :key="mat.bearVault.vaultAddress" />
          <!-- <ClientOnly>
            <VaultInfo vaultType="bear" :vaultAddress="mat.bearVault.vaultAddress" :key="mat.bearVault.vaultAddress" />
          </ClientOnly> -->
        </div>
        <hr />
        <div class="column is-flex">
          <LazyVaultInfo vaultType="bull" :vaultAddress="mat.bullVault.vaultAddress" :readmore="mat.bearVault.readmore" :key="mat.bullVault.vaultAddress" />
          <!-- <ClientOnly>
            <VaultInfo vaultType="bull" :vaultAddress="mat.bullVault.vaultAddress" :key="mat.bullVault.vaultAddress" />
          </ClientOnly> -->
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
.grid-vaults {
  display: grid;
  grid-template-columns: 1fr;
  position: relative;

  @if map-get($breakpoints, "lg") {
    @media (min-width: map-get($breakpoints, "lg")) {
      gap: var(--size-11);
      grid-template-columns: 1fr 1fr;
    }
  }
}

hr {
  margin-inline: -2rem;
  height: 1px;
  background-color: transparent;
  border-width: 1px 0px 0px;
  border-style: solid none none;
  border-color: rgba(0,0,0,0.6);
  margin-bottom: 4rem;

  @media (min-width: map-get($breakpoints, "lg")) {
    position: absolute;
    width: 1px;
    height: 100%;
    left: 50%;
    border-style: none solid none;
    border-width: 0 1px 0;
    margin-inline: 0;
    border-color: rgba(0,0,0,0.2);
  }
}
</style>