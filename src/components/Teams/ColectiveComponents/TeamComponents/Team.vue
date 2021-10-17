<template>
  <div class="team">
    <div class="team-name">
      {{team.name}}
    </div>
    <div class="team-about">
      {{team.about}}
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
  flex-direction: column;
  justify-content: space-between;

  &-about {
    margin-top: 5px;
    font-size: 14px;
    color: gray;
    font-weight: normal;
  }
}
</style>