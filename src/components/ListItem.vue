<template>
  <div>
    <ul>
      <li v-for="item in listItem" :key="item.id">
        <div class="container">
          <div v-if="screenName !== 'jobs'" class="points">
            <!-- <i class="fas fa-star"></i> -->
            {{ item.points }}
          </div>
          <!-- <div v-else class="points">(-)</div> -->
          <div class="content-layer">
            <div class="title-layer">
              <a :href="item.url" class="title">{{ item.title }}</a>
              <a
                v-if="item.domain"
                :href="'/from?site=' + item.domain"
                class="domain"
                >({{ item.domain }})</a
              >
            </div>
            <div class="detail">
              <small>
                <span v-if="item.user">by </span>
                <router-link v-if="item.user" :to="`/user/${item.user}`">{{
                  item.user
                }}</router-link>
                {{ item.time_ago }}
              </small>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItem() {
      // const name = this.$route.name;
      // switch(this.screenName) {
      //   case 'news':
      //     return this.$store.state.newsList;
      //   case 'ask':
      //     return this.$store.state.askList;
      //   case 'jobs':
      //     return this.$store.state.jobList;
      //   default:
      //     return [];
    // }
      return this.$store.state.list; 
    },
    screenName() {
      return this.$route.name;
    },
  },
  // created() {
  //   // const name = this.$route.name;
  //   let actionName;
  //   switch(this.screenName) {
  //     case 'news':
  //       actionName = 'FETCH_NEWS';
  //       break;
  //     case 'ask':
  //       actionName = 'FETCH_ASK';
  //       break;
  //     case 'jobs':
  //       actionName = 'FETCH_JOB';
  //       break;
  //     default:
  //       return;
    // }

    // this.$store.dispatch('FETCH_LIST');
  // }
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-size: 16px;
}
a {
  color: #34495e;
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  border-bottom: 1px #929292 solid;
}
.container {
  display: flex;
  height: 5em;
  align-items: center;
}
.points {
  color: #5aab39;
  font-weight: 600;
  width: 6em;
  text-align: center;
  box-sizing: border-box;
}
.content-layer {
  padding: 1em;
  width: calc(100% - 6em);
  box-sizing: border-box;
}
.title-layer {
  padding: 0.2em;
}
.title {
  font-weight: 600;
}
.domain {
  font-weight: 600;
}
.detail {
  padding: 0.2em;
}
</style>