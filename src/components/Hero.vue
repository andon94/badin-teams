<template>
  <div class="hero-wrapper">
    <div class="hero-content">
      <div>
        <h2 class="hero-title" v-if="post.welcomeScreen">{{ post.title }}</h2>
        <p class="hero-text" v-if="post.welcomeScreen">{{ post.text }}</p>
        <router-link v-if="post.welcomeScreen" class="link link-light" :to="{ name: 'Login' }">
          Login/Register <Arrow class="arrow arrow-light" />
        </router-link>
        <router-link v-else class="link link-light" to="#">
          View hero <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
      <div class="photo-wrapper">
        <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="">
        <img v-else :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from '../assets/Icons/arrow-right-light.svg';

export default {
  name: 'hero',
  props: ["post"],
  components: {
    Arrow
  }
}
</script>

<style lang="scss" scoped>

.hero-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media(min-width: 700px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }
}
.hero-content {
  > div {
    text-align: center;
    margin: 20px 0;
  }
  .photo-wrapper img {
    width: 100%;
  }

  .link.link-light {
    color: #000;

    svg {
      height: 20px;
      width: auto;
    }
  }
}
</style>