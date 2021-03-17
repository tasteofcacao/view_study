import {bus} from '../utils/bus.js';

export default {
  // created() {
  //         bus.$emit('start:spinner');
  //         this.$store.dispatch("FETCH_LIST", this.$route.name)
  //         .then(()=>bus.$emit('end:spinner'))
  //         .catch(err=>console.log(err));
  // }
  mounted() {
    bus.$emit("end:spinner");
  }
};