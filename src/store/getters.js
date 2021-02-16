const getLists = (state) => state.lists;

const getTargetCardData = (state) => {
  let result;
  state.lists.forEach((list) => {
    if (parseInt(list.id) === parseInt(state.targetCardList)) {
      result = list.items.filter((item) => item.id === state.targetCardId)[0];
    }
  });
  return result;
};

export default {
  getLists,
  getTargetCardData,
};
