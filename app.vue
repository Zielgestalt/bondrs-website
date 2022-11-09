<template>
  <div id="top">
    <LayoutNavbar />
    <LayoutHero :hero="hero" class="is-observed" />

    <div class="container" style="transform: translateY(-5rem); padding-inline: 2rem;">
      <div class="box text-flow">
        <h2 class="heading-4 is-uppercase">{{ what.headline }}</h2>
        <p>{{ what.copy }}</p>
      </div>
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

      <BondrsBull :mat="pick.bull" class="is-observed" />

      <BondrsBear :mat="pick.bear" class="is-observed" />

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

        <BondrsEpoch :content="bondrs.epoch" class="is-observed" />

        <BondrsVaults :mat="bondrs" class="is-observed" />

      </div>
    </section>

    <section id="about" class="about has-decoration text-flow is-flow-10">
      <div class="container text-flow is-flow-10">

        <div class="headings section-heading">
          <h2 class="heading-2">{{ team.headline }}</h2>
          <p>{{ team.copy }}</p>
        </div>

        <BondrsTeam :members="team.members" class="is-observed" />
      </div>
    </section>

    <BondrsContact />

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
    copy: 'In traditional finance Interest rate swaps are derivative financial contracts that let two parties exchange streams of cash flows based on predetermined interest rates and principal amounts. Interest rate swaps are an important part of the financial system allowing large institutions to manage their debt, with a market size of nearly $500 trillion 2021 alone. In commercial real estate, for example, the most common type of interest rate swap is a fixed-for-variable exchange.  This means one party exchanges a variable stream of interest payments (or cashflows) for a fixed stream of interest payments (or cashflows).',
  }

  const how = {
    headline: 'How does it work',
    copy: 'Each Bondrs consists of 2 vaults and a yield generating strategy. These vaults cycle through 2 epochs. An auction term, during which investors are able to deposit and withdraw funds at will, the final guaranteed interest rate for the bear vault is determined and the earning term, during which funds are consolidated and locked for use in the strategy.',
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
          copy: 'Funds from both vaults are consolidated and bulls earn all yields over the fixed rate guaranteed to the bears vastly increasing their earning potential per dollar.'
        },
        {
          headline: 'No liquidation risk',
          copy: 'Once the auction term ends funds are consolidated and locked in a non-custodial vault until the end of the earnings term with zero chance of liquidation.'
        },
        {
          headline: 'Earn excess yield above fixed apy paid to Bears',
          copy: 'Yield for the bears is guaranteed by the deposits the bulls make and any funds earned by the strategy over this amount are split between the bulls proportionally allowing bulls to significantly increase their earnings through extra leverage.'
        },
      ],
      readmore: {
        link: '#',
        text: 'Read more in the documentation'
      }
    },
    bear: {
      headline: 'Bear',
      copy: 'Bears provide liquidity to invest in the yield generating strategy. In return they receive a guaranteed return secured by the investments in the bull vault and the collateral the strategy produces.',
      list: [
        {
          headline: 'Fixed term and fixed apy',
          copy: 'The term is determined by the strategy and your APY is guaranteed by the value of the bull vault at the end of the auction term creating a stable, predictable investment.'
        },
        {
          headline: '100% collateralized including guaranteed return',
          copy: 'Yields for the bear vault are guaranteed by deposits in the bull vault and funds are locked for the duration of the earnings term guaranteeing your returns when your bond matures.'
        },
        {
          headline: 'No liquidation risk',
          copy: 'As soon as the auction term ends funds are consolidated and locked in a non-custodial vault until the end of the earnings term with zero chance of liquidation.'
        },
        {
          headline: 'Attractive, predictable safe returns for investors',
          copy: 'Fixed interest rate investments offer a safe and predictable way for investors to protect themselves against market instability and speculative products with BONDRS offering a further layer of security by insuring your returns.'
        }
      ],
      readmore: {
        link: '#',
        text: 'Read more in the documentation'
      }
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
      vaultAddress: '0xf692d29f99155834f93a2c63d21586ea57b5fbec',
      readmore: {
        link: '#',
        text: 'Read more'
      }
    },
    bearVault: {
      // vaultAddress: '0xda7c24edc4db22dcf1cf0631149d68bbd71e409b' // LIVA
      vaultAddress: '0x62cad79a1b70cf5a0bf9446693d7ae1382b80da8',
      readmore: {
        link: '#',
        text: 'Read more'
      }
    }
  }

  const team = {
    headline: 'About us',
    copy: 'At Bondrs we aim to bring one of the most prolific markets in traditional finance, Interest Rate Swaps, to DeFi. All transactions are done on-chain allowing for a level of transparency and decentralization that’s not possible in traditional finance in a largely trustless, automated environment that creates less bureaucracy, overhead and lets users retain custody of their own assets.',
    members: [
      {
        name: 'Tony Tsigonias',
        image: 'tony.jpg',
        position: 'Core Member',
        copy: 'Tony is a successful entrepreneur who had his initial success in the stock market but has since ventured out into commercial real estate and blockchain development. He has a long history of successful marketing campaigns for companies with traditional securities and has a wealth of connections all in all fields of commerce all over the world.',
        linkedin: 'https://www.linkedin.com/in/tony-tsigonias-44b163227/'
      },
      {
        name: 'David Cohen',
        image: 'david.jpg',
        position: 'Core Member',
        copy: 'David has a professional background in business development and high level management with experience on multiple blockchain projects including DeFi, NFT’s, play to earn games and financial products. He’s considered a thought leader in the DeFi community as an advocate for the ethical management and development of blockchain products and is known for his work ethic and commitment to his goals.',
        linkedin: 'https://www.linkedin.com/in/david-cohen-520/'
      },
      {
        name: 'Amin El-Gazzar',
        image: 'amin.jpg',
        position: 'Advisor',
        copy: 'Amin is a serial entrepreneur and technologist. He has founded several startups in the United States and around the globe. He is fluent in English and German and has proven that he is always thinking outside the box. He holds several patents in technologies from databases to messaging.',
        linkedin: 'https://www.linkedin.com/in/amin-el-gazzar-7299b2100/'
      }
    ]
  }

  onMounted(() => {
    const sections = document.querySelectorAll('.is-observed')
    const options = {
      threshold: 0.5
    }
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          console.log(entry.target)
        }
      })
    }, options)
    sections.forEach(section => {
      observer.observe(section)
    })
  })
</script>