import { updateLocalStorage } from './helpers';

const setData = (state, payload) => {
  state.lists = payload;
};

const addNewList = (state, payload) => {
  payload.position = state.lists.length + 1;
  state.lists.push(payload);
  updateLocalStorage('lists', state.lists);
};

const updateListTitle = (state, payload) => {
  state.lists.forEach((list) => {
    if (list.position === payload.position) {
      list.title = payload.newTitle;
    }
  });
  updateLocalStorage('lists', state.lists);
};

export default {
  setData,
  addNewList,
  updateListTitle,
};
