import { fetchList, fetchUserInfo, fetchItemInfo } from "../api/index.js";

export default {
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit("SET_LIST", response.data);
      return response;
    } catch (err) {
      console.err(err);
    }
  },
  // FETCH_LIST({commit}, pageName) {
  //     return fetchList(pageName)
  //     .then((res)=>{
  //         commit('SET_LIST', res.data);
  //         // return res;
  //     })
  //     .catch(err=>console.log(err));
  // },

  async FETCH_USER({ commit }, { userName }) {
    try {
      const response = await fetchUserInfo(userName);
      commit("SET_USER", response.data);
      return response;
    } catch (err) {
      console.err(err);
    }
  },
  async FETCH_ITEM({ commit }, { itemId }) {
    try {
      const response = await fetchItemInfo(itemId);
      commit("SET_ITEM", response.data);
      return response;
    } catch (err) {
      console.err(err);
    }
  },
};

// export { actions };
