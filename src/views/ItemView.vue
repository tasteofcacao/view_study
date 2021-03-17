<template>
  <div>  
    <section>
      <user-profile>
        <router-link v-if="itemInfo.user" slot="username" :to="`/user/${itemInfo.user}`">{{itemInfo.user}}</router-link>
        <template slot="time">posted : {{ itemInfo.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>
        <a :href="itemInfo.url">{{ itemInfo.title }}</a>
      </h2>
      <span v-if="itemInfo.content" v-html="itemInfo.content"></span>
    </section>
    <section>
        <div v-for="comment in itemInfo.comments" :key="comment.id">
          <span>{{comment.user}} </span>
          <span>{{comment.time_ago}}</span>
          <br>
          <span v-html="comment.content"></span>
        </div>
    </section>
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
      itemInfo: 'fetchedItemInfo',
    }),
  },
  created() {
      const itemId = this.$route.query.id;

    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_ITEM', {itemId})
    .then(()=>bus.$emit('end:spinner'))
    .catch(err=>console.log(err));
  }
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
  padding : 0.1em 0.5em;
}
.time {
  font-size: 1em;
}
</style>