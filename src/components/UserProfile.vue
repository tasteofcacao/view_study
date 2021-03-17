<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username"></slot>
      <div class="time">
      <slot name="time"></slot>
      <slot name="karma"></slot>
      <slot name="about"></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex';
export default {
    // props: {
    //     userInfo: Object
    // },
//   computed: {
//     ...mapGetters({
//       userInfo: "fetchedUserInfo",
//     }),
//   },
};
</script>

<style scoped>
.user-container {
  display: flex;
  padding: 0.5em;
}
.fas.fa-user {
  font-size: 2.7em;
}
.user-description {
  padding: 0.1em 0.5em;
}
.time {
  font-size: 1em;
}
</style>