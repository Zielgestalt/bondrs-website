<template>
  <div class="bondrs-circle">

    <div class="circle"></div>
    <div class="grid-3">
      <div v-for="(card, index) in content" :key="index" class="lc-card is-observed onvisible-fade-up" :class="`is-staggered-${index}`">
  
        <div class="lc-card-top">
          <SvgOwl v-if="card.icon === 'owl'" class="owl" />
          <SvgBear v-if="card.icon === 'bear' || card.icon === 'both'" class="bear" />
          <SvgBull v-if="card.icon === 'bull' || card.icon === 'both'" class="bull" />
        </div>
  
        <div class="lc-card-content text-flow">
          <div class="lc-card-content-header text-flow is-flow-2">
            <h3 class="heading-3">{{ card.headline }}</h3>
            <p>{{ card.copy }}</p>
          </div>

          <div class="cards text-flow">
            <div v-for="(item, listindex) in card.list" :key="listindex" class="card text-flow is-flow-2">
              <h4 class="heading-4">{{ item.headline }}</h4>
              <p>{{ item.copy }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const content = [
    {
      icon: 'both',
      headline: 'Funding',
      copy: 'Review, Deposit & Withdraw',
      list: [
        {
          headline: 'Strategy Review',
          copy: 'Investors review strategy and choose a vault to deposit in'
        },
        {
          headline: 'Deposit & Withdraw',
          copy: 'Funds can be deposited into or withdrawn from either vault.'
        }
      ]
    },
    {
      icon: 'owl',
      headline: 'Term',
      copy: 'Funds are locked',
      list: [
        {
          headline: 'Consolidation',
          copy: 'Funds from both vaults are consolidated and used for strategy and collateral'
        },
        {
          headline: 'Strategy & Collateral',
          copy: 'Consolidated funds are used for strategy and collateral'
        }
      ]
    },
    {
      icon: 'both',
      headline: 'Payout',
      copy: 'Terms end, funds unlock',
      list: [
        {
          headline: 'Bears return',
          copy: 'Bears get guaranteed return secured by bull vault.'
        },
        {
          headline: 'Bulls return',
          copy: 'Bulls get the excess yield.'
        }
      ]
    }
  ]
</script>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";

$arrowWidth: 1rem;

@mixin arrowRight {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: $arrowWidth 0 $arrowWidth ($arrowWidth * 1.5);
  border-color: transparent transparent transparent var(--clr-primary);
}

@mixin arrowLeft {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: $arrowWidth ($arrowWidth * 1.5) $arrowWidth 0;
  border-color: transparent var(--clr-primary) transparent transparent;
}
.bondrs-circle {
  position: relative;
  padding: 0 1.5rem 4rem 0;
  padding-bottom: 4rem;

  @media (min-width: map-get($breakpoints, "lg")) {
    padding: 0 2rem 4rem;
  }

  .circle {
    $border: 4px;

    position: absolute;
    bottom: 0;
    left: calc(50% - 1rem);
    width: calc(50% + 1.5rem);
    height: calc(100% - 5rem);
    margin: auto;
    box-sizing: border-box;
    background: #fff;
    background-clip: padding-box; /* !importanté */
    border: solid $border transparent; /* !importanté */
    border-radius: 3rem;

    &::before {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: -1;
      margin: -$border;
      border-radius: inherit;
      // background: linear-gradient(to right, red, orange);
      background: var(--gradient-primary);
    }

    &::after {
      @include arrowLeft();
      content: '';
      position: absolute;
      bottom: calc($border / 2 * -1);
      left: 50%;
      transform: translate(-50%, 50%) scale(-1);
    }

    @media (min-width: map-get($breakpoints, "lg")) {
      left: 0;
      width: 100%;

      &::after {
        transform: translate(-50%, 50%) scaleX(0);
      }
    }
  }
}
.lc-card {
  width: 100%;
  position: relative;
  padding: 4rem 0.75rem 0;
  z-index: 1;

  @media (min-width: map-get($breakpoints, "md")) {
    padding: 4rem 1.5rem 0;
  }

  &:not(:last-child) {
    &::after {
      @include arrowRight();
      content: '';
      position: absolute;
      top: calc(100% + 2px);
      left: calc(50% - 2px);
      transform: translate(-50%, 50%) rotate(90deg);

      @media (min-width: map-get($breakpoints, "lg")) {
        transform: translate(-50%, 100%) rotate(0);
        top: calc(2rem + 2px);
        left: calc(100% + 2rem);
      }
    }
  }

  &-top {
    width:100%;
    height:10rem;
    background: linear-gradient(rgba(6, 36, 49, 1), rgba(0, 144, 223, 1));;
    background-size: 200%;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    svg {
      width: 10rem;
      position: absolute;
      opacity: 0.5;

      &.owl {
        top: -5rem;
        right: -5rem;
      }

      &.bear,
      &.bull {
        top: 1rem;
      }

      &.bear {
        right: -1rem;
      }

      &.bull {
        left: -1rem;
      }
    }
  }

  &-content {
    width:100%;
    background: #ECF1F524;
    mix-blend-mode: normal;
    backdrop-filter: blur(15px);
    box-shadow: 0px 20px 53px -30px rgba(95, 102, 173, 0.566816);
    border-radius: 0.5rem;
    padding: 1rem;

    &-header {
      --heading: var(--clr-light);
      --color: var(--clr-light);
    }

    .cards{
      .card{
        width: 100%;
        padding: 0.75rem;
        background: #FFFFFF;
        box-shadow:0 2px 2px 0  #eeeeee40;
        border-radius: 10px;
        box-shadow: 0px 16px 15px -10px rgba(105, 96, 215, 0.0944602);
      }
      }
  }
}
</style>