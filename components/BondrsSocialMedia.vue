<template>
  <div class="social-media">
    <div class="column">
      <NuxtLink to="https://twitter.com/vikingbondrs" target="_blank"><SvgTwitter /></NuxtLink>
    </div>
    <div class="column">
      <NuxtLink to="https://discord.gg/JGnMPsKkcQ" target="_blank"><SvgDiscord /></NuxtLink>
    </div>
    <div class="column">
      <NuxtLink to="https://t.me/BONDRS_Project" target="_blank"><SvgTelegram /></NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .social-media {
    display: flex;
    gap: 2rem;
  }

  svg {
    min-width: 2.5rem;
    max-width: 2.5rem;
  }
</style>