import { updateLocalStorage } from './helpers';

const setData = (state, payload) => {
  state.lists = payload;
};

const addNewList = (state, payload) => {
  payload.position = state.lists.length + 1;
  state.lists.push(payload);
  // in real world app db should be updated by action
  updateLocalStorage('lists', state.lists);
};

const updateListTitle = (state, payload) => {
  state.lists.forEach((list) => {
    if (list.position === payload.position) {
      list.title = payload.newTitle;
    }
  });
  // in real world app db should be updated by action
  updateLocalStorage('lists', state.lists);
};

const deleteList = (state, payload) => {
  // get index of list with target position
  const indexToDelete = state.lists.map((list) => list.position).indexOf(payload);
  // delete the list
  state.lists.splice(indexToDelete, 1);
  // decrement position of lists with a higher position
  state.lists.forEach((list) => {
    list.position > indexToDelete ? list.position-- : null;
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
    if (list.position === state.selectedList) {
      // set position of new card to last in list
      payload.position = list.items.length + 1;
      // push new card to target list
      list.items.push(payload);
    }
  });
  // in real world app db should be updated by action
  updateLocalStorage('lists', state.lists);
};

const editCard = (state, { listPosition, cardPosition }) => {
  state.showEditModal = true;
  state.targetCardList = listPosition;
  state.targetCardPosition = cardPosition;
};

const hideEditCardModal = (state) => {
  state.showEditModal = false;
};

const deleteCard = (state) => {
  state.lists.forEach((list) => {
    // find list containing card to delete
    if (parseInt(list.position) === parseInt(state.targetCardList)) {
      // find index of card to delete
      const idx = list.items.map((item) => item.position).indexOf(state.targetCardPosition);
      // delete card
      list.items.splice(idx, 1);
      // decrement position prop of cards with higher position
      list.items.forEach((item) => {
        item.position > idx ? item.position-- : null;
      });
    }
  });
  // in real world app db should be updated by action
  updateLocalStorage('lists', state.lists);
};

const editCardData = (state, { propName, updatedValue }) => {
  state.lists.forEach((list) => {
    // find list containing card to update
    if (parseInt(list.position) === parseInt(state.targetCardList)) {
      // find index of card to update
      const idx = list.items.map((item) => item.position).indexOf(state.targetCardPosition);
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
