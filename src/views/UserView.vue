<template>
  <div>  
    <user-profile :userInfo="userInfo">
        <div slot="username">{{ userInfo.id }}</div>
        <span slot="time">joined : {{ userInfo.created }}, </span>
        <span slot="karma">{{ userInfo.karma }}</span>
        <div v-if="userInfo.about" slot="about">about : <span v-html="userInfo.about"></span></div>
    </user-profile>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from '../components/UserProfile.vue';
import { bus } from "../utils/bus.js";

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters({
      userInfo: "fetchedUserInfo",
    }),
  },
  created() {
    const userName = this.$route.params.id;
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_USER', {userName})
    .then(()=>bus.$emit('end:spinner'))
    .catch(err=>console.log(err));
    
  }
};
</script>

<style scoped>
</style>