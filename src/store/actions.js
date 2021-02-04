const setData = ({ commit }, payload) => {
  commit('setData', payload);
};

const addNewList = ({ commit }, payload) => {
  commit('addNewList', payload);
};

const updateListTitle = ({ commit }, payload) => {
  commit('updateListTitle', payload);
};

export default {
  setData,
  addNewList,
  updateListTitle,
};
