<template>
  <div class="coming-soon">
    <div class="logo-container">
      <Logo />
      <h1>Bondrs</h1>
      <p>Coming soon...</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p v-if="subscribed">Thanks for subscribing.</p>
      <newsletter-form
        v-else
        @subscribed="success"
        headerText=""
        buttonText="Sign Up"
        inputPlaceholder="Your email"
      >
        <template #description>
          <p>Be the first to know all news about BONDRS:</p>
        </template>
        <template #button-icon>
          <!-- icon component -->
        </template>
      </newsletter-form>
    </div>
  </div>
</template>

<script setup lang="ts">
const subscribed = ref(false)
const success = () => {
  console.log('Subscribed')
  subscribed.value = true
}
</script>

<style lang="scss">
  form {
    p {
      margin-bottom: 0.75rem;
    }
  }
</style>

<style lang="scss" scoped>
  .coming-soon {
    min-height: 100vh;
    width: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgb(115, 115, 115);
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;

    h1 {
      font-weight: 900;
      font-size: 3.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .logo-container {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>