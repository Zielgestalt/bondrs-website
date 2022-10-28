<template>
  <div id="top">
    <LayoutNavbar />
    <LayoutHero :hero="hero" />

    <div class="container box text-flow" style="transform: translateY(-5rem);">
      <h2 class="heading-4 is-uppercase">{{ what.headline }}</h2>
      <p>{{ what.copy }}</p>
    </div>

    <section id="how" class="circle has-decoration text-flow is-flow-10">
      <div class="container text-flow is-flow-10">

        <div class="headings section-heading">
          <h2 class="heading-2">{{ how.headline }}</h2>
          <p>{{ how.copy }}</p>
        </div>

        <BondrsCycle />

        <h3 id="pick" class="heading-3" style="text-align: center;">Optimist or Pessimist? <span class="text-link">Pick your side!</span></h3>

      </div>

      <BondrsBull :mat="pick.bull" />

      <BondrsBear :mat="pick.bear" />

    </section>


    <section id="invest" data-theme="dark">
      <div class="section-decoration left">
        <SvgBear />
      </div>
      <div class="section-decoration right">
        <SvgBull />
      </div>
      <div class="container text-flow is-flow-10">
        <div class="headings section-heading">
          <h2 class="heading-2">{{ bondrs.headline }}</h2>
          <p>{{ bondrs.copy }}</p>
        </div>

        <BondrsEpoch :content="bondrs.epoch" />

        <div class="box glass text-flow is-flow-6" style="max-width: 100%; overflow: hidden;">
          <VaultStrategy :vaultAddress="bondrs.bearVault.vaultAddress" />

          <div class="box large glass">

            <div class="grid grid-2">
              <div class="column is-flex">
                <ClientOnly>
                  <VaultInfo vaultType="bear" :vaultAddress="bondrs.bearVault.vaultAddress" :key="bondrs.bearVault.vaultAddress" />
                </ClientOnly>
              </div>
              <div class="column is-flex">
                <ClientOnly>
                  <VaultInfo vaultType="bull" :vaultAddress="bondrs.bullVault.vaultAddress" :key="bondrs.bullVault.vaultAddress" />
                </ClientOnly>
              </div>          
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="about" class="about has-decoration text-flow is-flow-10">
      <div class="container text-flow is-flow-10">

        <div class="headings section-heading">
          <h2 class="heading-2">{{ team.headline }}</h2>
          <p>{{ team.copy }}</p>
        </div>

        <BondrsTeam :members="team.members" />
      </div>
    </section>

    <section id="contact" class="has-decoration" style="z-index: 1;">
      <div class="has-background">
        <div class="is-background-half-left">
          <SvgIlluContact/>
        </div>
        <div class="container">
          <div class="grid-2">
            <div class="column"></div>
            <div class="column text-flow is-flow-10">
              <h2 class="heading-2">Need more answers?</h2>
              <LayoutContact />
            </div>
          </div>
        </div>
      </div>
    </section>

    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
  const hero = {
    overline: 'Bullish or Bearish? You decide',
    headline: 'Invest your way',
    copy: 'Bondrs is an on-chain interest rate swap protocol designed to give conservative investors access to secure, fixed term lending and aggressive investors up to 400x leverage with no liquidation risk',
    cta1: {
      text: 'Learn more',
      url: '#',
    },
    cta2: {
      text: 'Launch app',
      url: '#',
    }
  }

  const what = {
    headline: 'What are interest rate swaps?',
    copy: 'In traditional finance Interest rate swaps are derivative financial contracts that let two parties exchange streams of cash flows based on predetermined interest rates and principal amounts. In commercial real estate, for example, the most common type of interest rate swap is a fixed-for-variable exchange.  This means one party exchanges a variable stream of interest payments (or cashflows) for a fixed stream of interest payments (or cashflows).',
  }

  const how = {
    headline: 'How does it work',
    copy: 'Each Bondrs consists of 2 vaults and a yield generating strategy. These vaults cycle through 2 epochs. An auction epoch during which the final guaranteed interest rate for the bear vault is determined and the term epoch.',
  }

  const pick = {
    headline: 'Pick your side',
    copy: 'Optimist or pessimist?',
    bull: {
      headline: 'Bull',
      copy: 'Bulls provide the guaranteed return for the investors in the bear vault. In return investors in the bull vault will earn any excess return earned above the guaranteed fixed rate.',
      list: [
        {
          headline: 'Up to 400x leverage on yield generating strategies',
          copy: 'Donec id elementum diam. Cras enim odio, ornare in tellus non, fermentum ornare arcu. Pellentesque turpis felis, scelerisque '
        },
        {
          headline: 'No liquidation risk',
          copy: 'Donec id elementum diam. Cras enim odio, ornare in tellus non, fermentum ornare arcu. Pellentesque turpis felis, scelerisque.'
        },
        {
          headline: 'Earn excess yield above fixed apy paid to Bears',
          copy: 'Donec id elementum diam. Cras enim odio, ornare in tellus non, fermentum ornare arcu. Pellentesque turpis felis, scelerisque '
        },
      ]
    },
    bear: {
      headline: 'Bear',
      copy: 'Bears provide liquidity to invest in the yield generating strategy. In return they receive a guaranteed return secured by the investments in the bull vault and the collateral the strategy produces.',
      list: [
        {
          headline: 'Fixed term and fixed apy',
          copy: 'Donec id elementum diam. Cras enim odio, ornare in tellus non, fermentum ornare arcu. Pellentesque turpis felis, scelerisque '
        },
        {
          headline: '100% collateralized including guaranteed return',
          copy: 'Donec id elementum diam. Cras enim odio, ornare in tellus non, fermentum ornare arcu. Pellentesque turpis felis, scelerisque '
        },
        {
          headline: 'No liquidation risk',
          copy: 'Donec id elementum diam. Cras enim odio, ornare in tellus non, fermentum ornare arcu. Pellentesque turpis felis, scelerisque '
        },
        {
          headline: 'Attractive, predictable safe returns for investors',
          copy: 'Donec id elementum diam. Cras enim odio, ornare in tellus non, fermentum ornare arcu. Pellentesque turpis felis, scelerisque '
        }
      ]
    }
  }

  const bondrs = {
    headline: 'Bondrs Current Stats',
    copy: 'Find the current epoch status',
    epoch: [
      {
        name: 'Strategy invention',
        date: '2022-10-20'
      },
      {
        name: 'Funding epoch',
        date: '2022-10-25'
      },
      {
        name: 'Term epoch',
        date: '2022-11-10'
      },
      {
        name: 'Term end',
        date: '2022-11-30'
      }
    ],
    strategy: {},
    bullVault: {
      vaultAddress: '0xf692d29f99155834f93a2c63d21586ea57b5fbec'
    },
    bearVault: {
      // vaultAddress: '0xda7c24edc4db22dcf1cf0631149d68bbd71e409b' // LIVA
      vaultAddress: '0x62cad79a1b70cf5a0bf9446693d7ae1382b80da8'
    }
  }

  const team = {
    headline: 'About us',
    copy: 'Phasellus sodales est id sapien condimentum sagittis. Vivamus eget lorem augue. Nunc ut diam tellus. Fusce mattis luctus sem, sollicitudin tincidunt ante ullamcorper',
    members: [
      {
        name: 'John Doe',
        image: 'amin.jpg',
        position: 'Core Member',
        copy: 'Quisque maximus, felis quis varius tincidunt, urna libero ultrices magna, non maximus odio turpis vitae est. Aliquam sit amet urna lectus. Donec id elementum diam.',
        linkedin: 'https://www.linkedin.com/in/amin-el-gazzar-7299b2100/'
      },
      {
        name: 'John Doe',
        image: 'dummy.jpg',
        position: 'Core Member',
        copy: 'Quisque maximus, felis quis varius tincidunt, urna libero ultrices magna, non maximus odio turpis vitae est. Aliquam sit amet urna lectus. Donec id elementum diam.',
        linkedin: 'https://www.linkedin.com/in/amin-el-gazzar-7299b2100/'
      },
      {
        name: 'John Doe',
        image: 'dummy.jpg',
        position: 'Core Member',
        copy: 'Quisque maximus, felis quis varius tincidunt, urna libero ultrices magna, non maximus odio turpis vitae est. Aliquam sit amet urna lectus. Donec id elementum diam.',
        linkedin: 'https://www.linkedin.com/in/amin-el-gazzar-7299b2100/'
      }
    ]
  }
</script>