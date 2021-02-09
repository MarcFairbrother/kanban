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

const closeNewCardForm = ({ commit }) => {
  commit('closeNewCardForm');
};

const createNewCard = ({ commit }, payload) => {
  commit('createNewCard', payload);
};

const editCard = ({ commit }, payload) => {
  commit('editCard', payload);
};

export default {
  setData,
  addNewList,
  updateListTitle,
  deleteList,
  newCard,
  closeNewCardForm,
  createNewCard,
  editCard,
};
