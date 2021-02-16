import actions from '@/store/actions';

const {
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
  updateListItems,
} = actions;

describe('actions.js', () => {
  const commit = jest.fn();

  // setData
  it('commits setData with data passed as argument', () => {
    const data = ['foo', 'bar'];
    setData({ commit }, data);
    expect(commit).toHaveBeenCalledWith('setData', ['foo', 'bar']);
  });

  // addNewList
  it('commits addNewList', () => {
    const payload = 'foo';
    addNewList({ commit }, payload);
    expect(commit).toHaveBeenCalledWith('addNewList', 'foo');
  });

  // updateListTitle
  it('commits updateListTitle', () => {
    const payload = { newTitle: 'foo', id: 1 };
    updateListTitle({ commit }, payload);
    expect(commit).toHaveBeenCalledWith('updateListTitle', { newTitle: 'foo', id: 1 });
  });

  // deleteList
  it('commits deleteList', () => {
    const payload = 1;
    deleteList({ commit }, payload);
    expect(commit).toHaveBeenCalledWith('deleteList', 1);
  });

  // newCard
  it('commits newCard', () => {
    const payload = 1;
    newCard({ commit }, payload);
    expect(commit).toHaveBeenCalledWith('newCard', 1);
  });

  // closeNewCardForm
  it('commits closeNewCardForm', () => {
    closeNewCardForm({ commit });
    expect(commit).toHaveBeenCalledWith('closeNewCardForm');
  });

  // createNewCard
  it('commits createNewCard', () => {
    const payload = {
      title: 'Foo',
      description: 'Bar',
    };
    createNewCard({ commit }, payload);
    expect(commit).toHaveBeenCalledWith('createNewCard', { title: 'Foo', description: 'Bar' });
  });

  // editCard
  it('commits editCard', () => {
    const payload = {
      listId: 1,
      cardId: 2,
    };
    editCard({ commit }, payload);
    expect(commit).toHaveBeenCalledWith('editCard', { listId: 1, cardId: 2 });
  });

  // hideEditCardModal
  it('commits hideEditCardModal', () => {
    hideEditCardModal({ commit });
    expect(commit).toHaveBeenCalledWith('hideEditCardModal');
  });

  // deleteCard
  it('commits deleteCard', () => {
    deleteCard({ commit });
    expect(commit).toHaveBeenCalledWith('deleteCard');
  });

  // editCardData
  it('commits editCardData', () => {
    const payload = {
      propName: 'description',
      updatedValue: 'foo',
    };
    editCardData({ commit }, payload);
    expect(commit).toHaveBeenCalledWith('editCardData', { propName: 'description', updatedValue: 'foo' });
  });

  // reorderLists
  it('commits reorderLists', () => {
    const payload = [
      { title: 'foo', id: 1 },
      { title: 'bar', id: 2 },
    ];
    reorderLists({ commit }, payload);
    expect(commit).toHaveBeenLastCalledWith('reorderLists', [
      { title: 'foo', id: 1 },
      { title: 'bar', id: 2 },
    ]);
  });

  // updateListItems
  it('commits updateListItems', () => {
    const payload = {
      newParentListId: 1,
      oldParentListId: 2,
      cardId: 1,
      listCardsIds: [4, 2, 1],
    };
    updateListItems({ commit }, payload);
    expect(commit).toHaveBeenCalledWith('updateListItems', {
      newParentListId: 1,
      oldParentListId: 2,
      cardId: 1,
      listCardsIds: [4, 2, 1],
    });
  });
});
