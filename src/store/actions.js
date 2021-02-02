const setData = ({ commit }, payload) => {
  commit('setData', payload);
};

const addNewList = ({ commit }, payload) => {
  commit('addNewList', payload);
};

export default {
  setData,
  addNewList,
};
