import { updateLocalStorage } from './helpers';

const setData = (state, payload) => {
  state.lists = payload;
};

const addNewList = (state, payload) => {
  payload.id = state.lists.length + 1;
  state.lists.push(payload);
  // in real world app db should be updated by action
  updateLocalStorage('lists', state.lists);
};

const updateListTitle = (state, payload) => {
  state.lists.forEach((list) => {
    if (list.id === payload.id) {
      list.title = payload.newTitle;
    }
  });
  // in real world app db should be updated by action
  updateLocalStorage('lists', state.lists);
};

const deleteList = (state, payload) => {
  // get index of list with target id
  const indexToDelete = state.lists.map((list) => list.id).indexOf(payload);
  // delete the list
  state.lists.splice(indexToDelete, 1);
  // decrement id of lists with a higher id
  state.lists.forEach((list) => {
    list.id > indexToDelete ? list.id-- : null;
  });
  // in real world app db should be updated by action
  updateLocalStorage('lists', state.lists);
};

const newCard = (state, payload) => {
  state.showForm = true;
  state.selectedList = payload;
};

const closeNewCardForm = (state) => {
  state.showForm = false;
};

const createNewCard = (state, payload) => {
  state.lists.forEach((list) => {
    // find target list
    if (list.id === state.selectedList) {
      // set id of new card to last in list
      payload.id = list.items.length + 1;
      // push new card to target list
      list.items.push(payload);
    }
  });
  // in real world app db should be updated by action
  updateLocalStorage('lists', state.lists);
};

const editCard = (state, { listId, cardId }) => {
  state.showEditModal = true;
  state.targetCardList = listId;
  state.targetCardId = cardId;
};

const hideEditCardModal = (state) => {
  state.showEditModal = false;
};

const deleteCard = (state) => {
  state.lists.forEach((list) => {
    // find list containing card to delete
    if (parseInt(list.id) === parseInt(state.targetCardList)) {
      // find index of card to delete
      const idx = list.items.map((item) => item.id).indexOf(state.targetCardId);
      // delete card
      list.items.splice(idx, 1);
      // decrement id prop of cards with higher id
      list.items.forEach((item) => {
        item.id > idx ? item.id-- : null;
      });
    }
  });
  // in real world app db should be updated by action
  updateLocalStorage('lists', state.lists);
};

const editCardData = (state, { propName, updatedValue }) => {
  state.lists.forEach((list) => {
    // find list containing card to update
    if (parseInt(list.id) === parseInt(state.targetCardList)) {
      // find index of card to update
      const idx = list.items.map((item) => item.id).indexOf(state.targetCardId);
      // update given prop
      list.items[idx][propName] = updatedValue;
    }
  });
  // in real world app db should be updated by action
  updateLocalStorage('lists', state.lists);
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
};
