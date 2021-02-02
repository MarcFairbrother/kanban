const setData = (state, payload) => {
  state.lists = payload;
};

const addNewList = (state, payload) => {
  payload.position = state.lists.length + 1;
  state.lists.push(payload);
};

export default {
  setData,
  addNewList,
};
