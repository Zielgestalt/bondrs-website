<template>
  <div class="coming-soon">
    <div class="logo-container">
      <Logo />
      <h1>Bondrs</h1>
      <p>Coming soon...</p>
    </div>
  </div>
</template>

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