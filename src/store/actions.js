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

const hideEditCardModal = ({ commit }) => {
  commit('hideEditCardModal');
};

const deleteCard = ({ commit }) => {
  commit('deleteCard');
};

const editCardData = ({ commit }, payload) => {
  commit('editCardData', payload);
};

const reorderLists = ({ commit }, payload) => {
  commit('reorderLists', payload);
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
  hideEditCardModal,
  deleteCard,
  editCardData,
  reorderLists,
};
