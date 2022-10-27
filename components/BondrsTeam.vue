<template>
  <div class="team">
    <div class="grid-3">
      <div v-for="(member, index) in props.members" class="member text-flow is-flow-7">
        <div class="member-image">
          <img :src="`/images/team/${member.image}`" :alt="member.name" />
        </div>
        <div class="member-title text-flow is-flow-2">
          <p>{{ member.position }}</p>
          <h4 class="heading-3">{{ member.name }}</h4>
        </div>
        <p>{{ member.copy }}</p>
        <p><NuxtLink :to="member.linkedin" target="_blank"><SvgLinkedin /></NuxtLink></p>
        
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">

const props = defineProps({
  members: { type: Array, default: []},
})

</script>

<style lang="scss" scoped>
  .member {
    &-image {
      background: var(--clr-grey-1);
      aspect-ratio: 3 / 4;
      width: 100%;
      border-radius: 1rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>