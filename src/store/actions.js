const setData = ({ commit }, payload) => {
  commit('setData', payload);
};

const addNewList = ({ commit }, payload) => {
  commit('addNewList', payload);
};

const updateListTitle = ({ commit }, payload) => {
  commit('updateListTitle', payload);
};

const deleteList = ({ commit }, payload) => {
  commit('deleteList', payload);
};

const newCard = ({ commit }, payload) => {
  commit('newCard', payload);
};

export default {
  setData,
  addNewList,
  updateListTitle,
  deleteList,
  newCard,
};
