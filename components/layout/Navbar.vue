<template>
  <div class="nav-main" data-theme="dark">
    <nav class="navbar-main">
      <ul class="navbar-logo">
        <li><a href="#top" class="logo"><SvgLogo /></a></li>
      </ul>
      
      <ul class="navbar-desktop">
        <li v-for="(item, index) in navbarMain" :key="`navbar-desktop-${index}`">
          <a :href="item.link">
            {{ item.title }}
          </a>
        </li>
      </ul>

      <!-- <div href="#" class="toggle navbar-mobile">
        <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div> -->

      <div
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        :class="{ 'is-active': menuOpen }"
        @click="menuOpen = !menuOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </nav>
    
    <div class="nav-backdrop" :class="{ 'is-active': menuOpen }" @click="menuOpen = !menuOpen"></div>
    <aside class="nav-mobile" :class="{ 'is-active': menuOpen }">
      <ul>
        <li v-for="(item, index) in navbarMain" :key="`navbar-mobile-${index}`">
          <a :href="item.link" @click.native="menuOpen = !menuOpen">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
  const menuOpen = ref(false);
  const navbarMain = [
        {
          title: 'How it works',
          link: '#how',
        },
        {
          title: 'Bulls&Bears',
          link: '#pick',
        },
        {
          title: 'Invest',
          link: '#invest',
        },
        {
          title: 'About',
          link: '#about',
        },
        {
          title: 'Contact',
          link: '#contact',
        },
      ]

  // function addScrollClass() {
  //   ScrollTrigger.create({
  //     // markers: true,
  //     start: '50px top',
  //     trigger: 'body',
  //     toggleClass: { targets: '.navbar-main', className: 'is-scrolled' },
  //   })
  // }


  // onMounted(() => {
  //   addScrollClass()
  // })
</script>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";

/**
 * Nav
 */

// Horizontal Nav
nav,
nav ul {
  display: flex;
}

nav {
  justify-content: space-between;
  position: relative;

  ol,
  ul {
    align-items: center;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
    list-style: none;

    @media (min-width: $navbar-breakpoint) {
      &:first-of-type {
        margin-left: var(--size-7);
      }
      &:last-of-type {
        margin-right: var(--size-7);
      }
    }
  
    &.navbar-desktop {
      display: none;
  
      @media (min-width: $navbar-breakpoint) {
        display: flex;
      }
    }
  }

  li {
    display: inline-block;
    margin: 0;
    // padding: var(--size-2);

    @media (min-width: $navbar-breakpoint) {
      padding: var(--size-5) calc(var(--size-5) * 0.5);
    }

    // HACK: Input & Button inside Nav
    > *,
    > input:not([type="checkbox"]):not([type="radio"]) {
      margin-bottom: 0;
    }
  }

  a:not(.button):not([role=button]) {
    color: var(--color);
    display: block;
    position: relative;
    padding: calc(var(--size-2) * 2) var(--size-5);
    border-radius: var(--border-radius);
    text-decoration: none;

    @media (min-width: $navbar-breakpoint) {
      padding: var(--size-5);
      margin: calc(var(--size-5) * -1) calc(var(--size-5) * -0.5);
    }

    &:hover:not(.logo),
    &:active:not(.logo),
    &:focus:not(.logo),
    &.router-link-active:not(.logo) {
      text-decoration: none;

      &::after {
        content: '';
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }

    &.router-link-active:not(.logo) {
      &::after {
        background: var(--link);
      }
    }
  }

  .logo {
    width: var(--nav-logo-width-mobile);

    @media (min-width: $navbar-breakpoint) {
      width: var(--nav-logo-width);
    }

    svg {
      display: block;
    }
  }

  .navbar-burger {
    cursor: pointer;
    display: block;
    height: 4rem;
    position: relative;
    width: 4rem;
    margin-left: auto;

    @media (min-width: $navbar-breakpoint) {
      display: none;
    }

    span {
      background-color: currentColor;
      display: block;
      height: 1px;
      left: calc(50% - 8px);
      position: absolute;
      transform-origin: center;
      transition-duration: 86ms;
      transition-property: background-color,opacity,transform;
      transition-timing-function: ease-out;
      width: 16px;

      &:first-child {
        top: calc(50% - 6px)
      }
      
      &:nth-child(2) {
          top: calc(50% - 1px)
      }
      
      &:nth-child(3) {
          top: calc(50% + 4px)
      }
    }

    &.is-active span {
      &:first-child {
        transform: translateY(5px) rotate(45deg)
      }

      &:nth-child(2) {
        opacity: 0
      }

      &:nth-child(3) {
        transform: translateY(-5px) rotate(-45deg)
      }
    }
  }
}

// Vertical Nav
aside {
  nav,
  ol,
  ul,
  li {
    display: block;
  }

  ul {
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding: calc(var(--size-5) * 0.5);

    a {
      margin: calc(var(--size-5) * -0.5);
      padding: calc(var(--size-5) * 0.5);
    }
  }
}

.nav-main {
  --color: var(--clr-light);
  
  position: relative;
  width: 100vw;
  overflow-x: clip;
  padding-top: 4rem;

  @media (min-width: map-get($breakpoints, "xl")) {
    padding-top: 5rem;
  }
}

.navbar-main {
  width: 100vw;
  z-index: 99;
}

.nav-backdrop {
  --backdrop-color: hsla(0, 0%, 0%, 0.8);

  background: var(--backdrop-color);
  backdrop-filter: blur(1rem);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  z-index: 97;

  &.is-active {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
}

.nav-mobile {
  position: fixed;
  width: 90vw;
  min-height: 100vh;
  background: var(--bg);
  display: block;
  // position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  padding: 6rem 2rem 2rem;
  z-index: 98;
  // display: none;
  transition: transform 0.5s ease;
  transition-delay: 0.2s;

  &.is-active {
    // display: block;
    transform: translateX(0);
  }

  a {
    padding-left: 0;
    padding-right: 0;
  }

  ul {
    align-items: center;

  }

  @media (min-width: $navbar-breakpoint) {
    display: none;
  }
}





nav {
  position: fixed;
  top: 0;
  background-color: var(--nav-background);
  transition: background-color var(--transition), margin-top var(--transition);

  @if map-get($breakpoints, "xl") {
    @media (min-width: map-get($breakpoints, "xl")) {
      // margin-top: 1rem;
    }
  }
  
  a {
    text-transform: uppercase;
    font-size: 0.875rem;
  }

  &.is-scrolled {
    margin-top: 0;
    background-color: var(--nav-background);
  }
}
</style>