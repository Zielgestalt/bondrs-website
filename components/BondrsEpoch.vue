<template>
  <div class="epoch-status grid-4" :class="`epoch-${current}`">
    <div class="timeline">
      <div class="timeline-active" :style="{ width: currentWidth + '%'}"></div>
    </div>
    <div v-for="(item, index) in props.content" :key="index" class="epoch" :class="{ active: isActive(index), current: isCurrent(index) }">
      <span class="epoch-number">{{ index + 1 }}</span>
      <span class="epoch-name heading-4">{{ item.name }}</span>
      <span class="epoch-date">{{ item.date }}</span>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    content: { 
      type: Array,
      default: []
    }
  })

  const done = ref(0)

  const current = computed(() => {
    const now = new Date()

    for (let i = 0; i < props.content.length; i++) {
      var start = new Date(props.content[i].date)

      if (start < now) {
        done.value = done.value + 1
      }
    }

    return done.value;
  })

  const currentWidth = computed(() => {
    return current.value * 25 - 12.5
  })

  function isActive(index) {
    if (index < done.value) {
      return true
    }
  }

  function isCurrent(index) {
    if ((index + 1) === done.value) {
      return true
    }
  }
</script>

<style lang="scss" scoped>
.epoch-status {
  @import "assets/scss/variables/variables";
  position: relative;

  .timeline {
    display: none;
    
    @media (min-width: map-get($breakpoints, "lg")) {
      display: block;
      position: absolute;
      top: 1.25rem;
      left: 0;
      width: 100%;
      height: 3px;
      background: var(--clr-secondary);
      border-radius: 2px;

      &-active {
        height: 3px;
        border-radius: inherit;
        background: var(--clr-primary);
      }
    }
  }

  .epoch {
    --bg: var(--clr-secondary);
    font-size: var(--fs-2);
    text-align: center;
    
    > span {
      display: block;
    }

    &-number {
      $borderWidth: 0.35rem;

      position: relative;
      width: 2.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      background: var(--bg);
      border-radius: 50%;
      margin-inline: auto;
      font-size: 1.5rem;
      font-family: var(--ff-headline);
      font-weight: var(--fw-9);
      z-index: 1;
      // border: 0.5rem solid blue; 
      // outline: 0.5rem solid red;

      &::before,
      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        background: var(--bg);
        border-radius: 50%;
        // border: 5px solid #ffea00;
      }

      &::before {
        top: -$borderWidth;
        left: -$borderWidth;
        right: -$borderWidth;
        bottom: -$borderWidth;
        opacity: 0.5;
        // border: 5px solid #ffea00;
      }

      &::after {
        top: calc($borderWidth * -2);
        left: calc($borderWidth * -2);
        right: calc($borderWidth * -2);
        bottom: calc($borderWidth * -2);
        opacity: 0.25;
        transform: scale(1);
        // border: 5px solid #ffea00;
      }
    }

    &-name {
      // font-family: var(--ff-headline);
      margin-top: 1.5rem;
    }

    &-date {
      margin-top: 0.5rem;
      opacity: 0.5;
    }

    &.current {
      .epoch-number::after {
        animation: pulse 2s infinite;
      }
    }

    &.active {
      --bg: var(--clr-primary);
    }
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  25% {
    opacity: 0.35;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
}
</style>