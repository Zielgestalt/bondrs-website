<template>
  <footer class="section" data-theme="dark">
    <div class="container text-flow is-flow-8">
      <div class="grid">
        <div class="column text-flow">
          <SvgLogo class="logo" />
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo.</p>
        </div>

        <div class="column text-flow">
          <h3>Navigation</h3>

          <nav class="navbar-footer">
            <ul>
              <li v-for="(item, index) in navbarMain" :key="`navbar-footer-${index}`">
                <a :href="item.link">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="columm text-flow is-flow-2">
          <h3>External Links</h3>

          <div class="external-links">
            <ul>
              <li v-for="(item, index) in externalLinks" :key="`external-${index}`">
                <NuxtLink :to="item.url" class="text-flow is-flow-2">
                  <span class="heading-4">{{ item.title }}</span>
                  <span class="date">{{ item.date }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      <div class="grid">
        <div class="column">
          © {{ new Date().getFullYear() }} by BONDRS.
        </div>
        <div class="column"></div>
        <div class="comumn">
          <BondrsSocialMedia />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const menuOpen = ref(false);
  const navbarMain = [
        {
          title: 'How does it work',
          link: '#how',
        },
        {
          title: 'Bulls & Bears',
          link: '#pick',
        },
        {
          title: 'Invest',
          link: '#invest',
        },
        {
          title: 'About us',
          link: '#about',
        },
        {
          title: 'Contact',
          link: '#contact',
        },
      ]
  const externalLinks = [
    {
      title: 'Crypto PR: The good, the bad and the shoddy',
      date: '2022-10-27',
      url: 'https://twitter.com/vikingbondrs'
    },
    {
      title: 'How to build an exemplary crypto exchange',
      date: '2022-10-27',
      url: 'https://twitter.com/vikingbondrs'
    },
    {
      title: 'Hello World',
      date: '2022-10-27',
      url: 'https://twitter.com/vikingbondrs'
    }
  ]
</script>

<style lang="scss" scoped>
  @import "assets/scss/variables/variables";
  footer {
    --link: var(--clr-white);
    --link-hover: var(--clr-white-hover);

    padding: var(--size-8) var(--size-5);
    margin-top: 12rem;
    position: relative;

    @if map-get($breakpoints, "lg") {
      @media (min-width: map-get($breakpoints, "lg")) {
        padding: var(--size-11) var(--size-5);
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 56rem;
      background: var(--gradient-bg);
      bottom: 100%;
      transform: scaleY(-1);
    }

    .grid {
      display: grid;
      gap: var(--size-9);
      grid-template-columns: 1fr;

      @media (min-width: map-get($breakpoints, "lg")) {
        grid-template-columns: 1fr 1fr 2fr;
      }
    }

    .logo {
      max-width: 8rem;
    }

    h3 {
      text-transform: uppercase;
      font-weight: var(--fw-9);
      letter-spacing: 0.05em;
    }

    .navbar-footer,
    .external-links {
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }
    }

    .navbar-footer {
      ul {
        li {
          a {
            position: relative;
            display: block;
            padding-left: 1.5rem;
            text-decoration: none;
            padding: 0.35rem 0 0.35rem 1.5rem;

            &::before {
              border-color: inherit;
              border-bottom-style: solid;
              border-bottom-width: 2px;
              border-right-style: solid;
              border-right-width: 2px;
              content: '';
              display: inline-block;
              height: 0.5rem;
              left: 0;
              position: absolute;
              top: 0.75rem;
              width: 0.5rem;
              transform: rotate(315deg);
              transition: left var(--transition);
            }

            &:hover {
              &::before {
                left: 0.25rem;
              }
            }
          }
          
        }
      }
    }

    .external-links {
      ul {
        li {
          border-bottom: 1px solid var(--clr-grey-5);

          a {
            display: block;
            text-decoration: none;
            padding: 1rem 0;

            > span {
              display: block;
            }

            .date {
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
</style>