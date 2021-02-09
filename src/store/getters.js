const getLists = (state) => state.lists;

const getTargetCardData = (state) => {
  let result;
  state.lists.forEach((list) => {
    if (parseInt(list.position) === parseInt(state.targetCardList)) {
      result = list.items.filter((item) => item.position === state.targetCardPosition)[0];
    }
  });
  return result;
};

export default {
  getLists,
  getTargetCardData,
};
