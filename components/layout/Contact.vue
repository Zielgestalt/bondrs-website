<template>
  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"  @submit.prevent="onSubmit">
    <input value="contact" name="form-name" type="hidden" />
    <input :value="route.path" name="page" type="hidden" />
    <p>
      <label>
        Your Question:
        <textarea row="5" name="message" v-model="message" required></textarea>
      </label>
    </p>
    <div class="form-grid">
      <p>
        <label>
          Your name:
          <input type="text" name="name" v-model="name" required />
        </label>
      </p>
      <p>
        <label>
          Your email:
          <input type="email" name="email" v-model="email" required />
        </label>
      </p>
    </div>
    
    <p v-if="response" style="margin-top: 2rem;">{{ response }}</p>

    <p v-else style="margin-top: 2rem;">
      <button type="submit" class="button cta is-gradient">Leave a reply</button>
    </p>
  </form>


</template>

<script setup>
  const route = useRoute()
</script>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      message: null,
      response: null,
      terms: false
    }
  },
  methods: {
    onSubmit(event) {

      // let formName = this.$refs.formTag.getAttribute('name');
      // let formData = new FormData();
      // formData.append('name', this.name);
      // formData.append('email', this.email);
      // formData.append('message', this.message);
      // formData.append('terms', this.message);
      // formData.append('form-name', formName);

      console.log('Event: ', new URLSearchParams(new FormData(event.target)).toString())

      // Fetch must go to the html file in public folder
      fetch("/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(event.target)).toString()
      })
        .then((response) => {
          console.log('Response: ', response)
          this.$bus.$emit('contactform', { page: this.route.path })
          this.response = 'Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich darum kümmern.'
        })
        .catch((error) => {
          this.response = 'Bitte entschuldigen Sie: es ist leider etwas schief gelaufen. Bitte versuchen Sie es später noch einmal. Danke!'
          alert(error)
        });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/variables/variables";
.form-grid {
  display: grid;
  grid-template-columns: 1fr;

  @if map-get($breakpoints, "md") {
    @media (min-width: map-get($breakpoints, "md")) {
      gap: var(--size-9);
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>

