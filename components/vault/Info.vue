<template>
  <div class="vault text-flow is-flow-8" :class="props.vaultType">
    <!-- <SvgBull v-if="props.vaultType === 'bull'" class="vault-icon no-flow" />
    <SvgBear v-else-if="props.vaultType === 'bear'" class="vault-icon no-flow" />
    <SvgOwl v-else-if="props.vaultType === 'owl'" class="vault-icon no-flow" /> -->

    <div v-if="pending" class="loading">
      <span style="font-size: 4rem; color: red;">Loading ...</span>
    </div>

    <img :src="`data:image/png;base64, ${vaultData.data.vault.logoImg.data}`" width="60" />
    <div class="vault-header text-flow is-flow-2">
      <h3 class="heading-2">{{ vaultData.data.vault.vaultName }}</h3>
      <p>{{ vaultData.data.vault.description }}</p>
    </div>

    <ul class="vault-data text-flow" :class="props.vaultType">
      <li v-for="(item, listindex) in info" :key="listindex">
        <span class="info">
          <span class="label">{{ item.label }}</span>
          <span class="description">{{ item.description }}</span>
        </span>
        <span class="value">{{ item.value }}</span>
      </li>
    </ul>

    <!-- <ul v-if="props.vaultType === 'bear'" class="vault-data">
      <li><span class="label">Vault APY:</span> <span class="value">{{ apyInception }}%</span></li>
      <li><span class="label">Vault APY (last month):</span> <span class="value">{{ apyLastMonth }}%</span></li>
      <li><span class="label">Current TVL:</span> <span class="value">{{ tvl }}</span></li>
    </ul>

    <ul v-if="props.vaultType === 'bull'" class="vault-data">
      <li><span class="label">Vault APY:</span> <span class="value">{{ apyInception }}%</span></li>
      <li><span class="label">Vault APY (last month):</span> <span class="value">{{ apyLastMonth }}%</span></li>
      <li><span class="label">Current TVL:</span> <span class="value">{{ tvl }}</span></li>
    </ul> -->

    <BondrsCta class="vault-cta" :vaultAddress="props.vaultAddress" :vaultType="props.vaultType" />

  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  vaultType: { type: String, default: 'bear'},
  vaultAddress: { type: String, default: '' },
})

const { data: vaultData, pending } = await useLazyFetch(`https://live.yieldster.finance/Vault/v2.0/yieldster/vault-details/${props.vaultAddress}`, { key: props.vaultAddress })
// const { data: vaultTVL, pending: pendingTVL } = await useFetch(`https://live.yieldster.finance/smart-contract/sdk/v2.0/yieldster/vaultNAV?vault%20address=${props.vaultAddress}&timestamp=21-10-2022 00:00:00&is_Date=true`)
const { data: vaultTVL, pending: pendingTVL } = await useLazyFetch(`https://live.yieldster.finance/smart-contract/sdk/v2.0/yieldster/vaultNAV?vault%20address=${props.vaultAddress}`, { key: props.vaultAddress + 'tvl' })
const { data: vaultAPR, pending: pendingAPR } = await useLazyFetch(`https://live.yieldster.finance/Vault/sdk/v2.0/yieldster/apr?vaultAddress=${props.vaultAddress}&currentBlockNumber=`, { key: props.vaultAddress + 'apr' })

const apyInception = computed(() => {
  if (pending.value) {
    return 0
  } else {
    return vaultAPR.value.data.sinceInceptionAPY.toFixed(2)
  }
})

const apyLastEpoch = computed(() => {
  if (pending.value) {
    return 0
  } else {
    return vaultAPR.value.data.oneMonthApy.toFixed(2)
  }
})

const apyEstimated = computed(() => {
  return 6.11
})

const tvl = computed(() => {
  if (pending.value) {
    return 0
  } else {
    return (vaultTVL.value.data.VaultNAV / 1000000000000000000).toFixed(2)
  }
})

const info = computed(() => {
  if (props.vaultType === 'bull') {
    return [
      {
        label: 'Estimated APY',
        description: 'Lorem ipsum dolor sit amet',
        value: apyEstimated.value + ' %'
      },
      {
        label: 'APY last Bondr',
        description: 'Lorem ipsum dolor sit amet',
        value: apyLastEpoch.value + ' %'
      },
      {
        label: 'Current TVL',
        description: 'Lorem ipsum dolor sit amet',
        value: parseFloat(tvl.value).toLocaleString('en')
      }
    ]
  } else if (props.vaultType === 'bear') {
    return [
      {
        label: 'Maximum APY',
        description: 'Lorem ipsum dolor sit amet',
        value: '6 %'
      },
      {
        label: 'Minimum APY',
        description: 'Lorem ipsum dolor sit amet',
        value: '4 %'
      },
      {
        label: 'Current APY',
        description: 'Lorem ipsum dolor sit amet',
        value: '5.86 %'
      },
      {
        label: 'Current TVL',
        description: 'Lorem ipsum dolor sit amet',
        value: parseFloat(tvl.value).toLocaleString('en')
      }
    ]
  }
})

</script>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
.vault {
  position: relative;
  padding-bottom: 14rem;
  // padding-right: 6rem;
  min-height: 687px;

  &-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    // transform: translate(2rem, -3rem);
  }

  &-cta {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    display: block;
  }
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    padding-left: 2rem;
    position: relative;
    font-weight: var(--fw-9);
    display: flex;
    justify-content: space-between;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5em;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--clr-primary);
    }

    .info {
      display: inline-block;
      margin-right: 1rem;
      min-width: 10rem;

      > span {
        display: block;
      }
    }

    .description {
      font-weight: var(--fw-3);
      font-size: var(--fs-1);
    }
  }

  &.bear {
    li::before {
      background: var(--clr-secondary);
    }
  }
}
</style>