<template>
  <div class="home">
    <Hero :post="welcomeScreen" />
  </div>
</template>

<script>
import Hero from '../components/Hero';
export default {
  name: "Home",
  components: { Hero },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        text: "This is our App for displaying Badin teams in pictures :)",
        welcomeScreen: true,
        photo: "coding",
      }
    }
  }

  // computed: {
  //   sampleTeamsCards() {
  //     return this.$store.state
  //   }
  // }
};
</script>
