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
    const payload = { newTitle: 'foo', position: 1 };
    updateListTitle({ commit }, payload);
    expect(commit).toHaveBeenCalledWith('updateListTitle', { newTitle: 'foo', position: 1 });
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
      listPosition: 1,
      cardPosition: 2,
    };
    editCard({ commit }, payload);
    expect(commit).toHaveBeenCalledWith('editCard', { listPosition: 1, cardPosition: 2 });
  });
});
