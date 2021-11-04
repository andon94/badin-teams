<template>
  <div class="team">
    <div class="team-info">
      <div class="team-info-name">
        {{team.name}}
      </div>
      <div class="team-info-about">
        {{team.about}}
      </div>
    </div>
    <div class="team-image">
      <img v-if="team.imageViewPath"
           :src="`${baseUrl}/${team.imageViewPath}`">
      <div v-else
           class="team-image-placeholder"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Team',
  props: {
    team: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      baseUrl: process.env.VUE_APP_API_BASE_URL
    }
  }
}
</script>

<style scoped lang="scss">
.team {
  list-style-type: none;
  width: 100%;
  margin: 20px 0;
  padding: 0 10px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &-info {
    &-about {
      margin-top: 5px;
      font-size: 14px;
      color: gray;
      font-weight: normal;
    }
  }

  &-image {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    &-placeholder {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: pink;
    }
  }
}
</style>