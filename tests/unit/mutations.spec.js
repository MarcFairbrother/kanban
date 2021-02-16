import mutations from '@/store/mutations';

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
} = mutations;

describe('mutations.js', () => {
  // setData
  it('updates lists value of states with payload', () => {
    const state = {
      lists: 'foo',
    };
    const payload = 'bar';
    expect(state.lists).toBe('foo');
    setData(state, payload);
    expect(state.lists).toBe('bar');
  });

  // addNewList
  it('pushes new list object to lists array', () => {
    const state = {
      lists: [{ foo: 'bar' }],
    };
    const payload = { foo: 'baz' };
    expect(state.lists).toEqual([{ foo: 'bar' }]);
    addNewList(state, payload);
    expect(state.lists).toEqual([{ foo: 'bar' }, { foo: 'baz', id: 2 }]);
  });

  it('sets the id of new list to the length of the array', () => {
    const state = {
      lists: [{ foo: 'bar', id: 1 }],
    };
    const payload = [{ foo: 'baz' }];
    addNewList(state, payload);
    expect(state.lists[state.lists.length - 1].id).toEqual(state.lists.length);
  });

  // updateListTitle
  it('updates the list title', () => {
    const state = {
      lists: [{ title: 'foo', id: 1 }],
    };
    const payload = { newTitle: 'bar', id: 1 };
    updateListTitle(state, payload);
    expect(state.lists[0].title).toEqual('bar');
  });

  // deleteList
  it('deletes the list with corresponding id and updates the id of other lists', () => {
    const state = {
      lists: [
        { title: 'foo', id: 1 },
        { title: 'bar', id: 2 },
        { title: 'baz', id: 3 },
      ],
    };
    const payload = 2;

    deleteList(state, payload);
    expect(state.lists).toEqual([
      { title: 'foo', id: 1 },
      { title: 'baz', id: 2 },
    ]);
  });

  // newCard
  it('sets showForm to true', () => {
    const state = {
      showForm: false,
    };
    const payload = 1;

    newCard(state, payload);
    expect(state.showForm).toBe(true);
  });

  it('sets selected list to payload value', () => {
    const state = {
      selectedList: null,
    };
    const payload = 1;

    newCard(state, payload);
    expect(state.selectedList).toBe(1);
  });

  // closeNewCardForm
  it('sets showForm to false', () => {
    const state = {
      showForm: true,
    };
    closeNewCardForm(state);
    expect(state.showForm).toBe(false);
  });

  // createNewCard
  it('pushes new card object to target list', () => {
    const state = {
      lists: [
        {
          title: 'Foo',
          id: 1,
          items: [{ title: 'Bar', description: 'The first card in the first list', id: 1 }],
        },
        {
          title: 'Baz',
          id: 2,
          items: [{ title: 'Far', description: 'The first card in the second list', id: 1 }],
        },
      ],
      selectedList: 1,
    };
    const payload = {
      title: 'Boo',
      description: 'The second card in the first list',
    };

    createNewCard(state, payload);
    expect(state.lists).toEqual([
      {
        title: 'Foo',
        id: 1,
        items: [
          { title: 'Bar', description: 'The first card in the first list', id: 1 },
          { title: 'Boo', description: 'The second card in the first list', id: 2 },
        ],
      },
      {
        title: 'Baz',
        id: 2,
        items: [{ title: 'Far', description: 'The first card in the second list', id: 1 }],
      },
    ]);
  });

  // editCard
  it('sets showEditModal to true', () => {
    const state = {
      showEditModal: false,
      targetCardList: null,
      targetCardId: null,
    };
    const payload = {
      listId: 1,
      cardId: 2,
    };

    editCard(state, payload);
    expect(state.showEditModal).toBe(true);
  });

  it('sets target card ids', () => {
    const state = {
      showEditModal: false,
      targetCardList: null,
      targetCardId: null,
    };
    const payload = {
      listId: 1,
      cardId: 2,
    };

    editCard(state, payload);
    expect(state.targetCardList).toBe(1);
    expect(state.targetCardId).toBe(2);
  });

  // hideEditCardModal
  it('sets showEditModal to false', () => {
    const state = {
      showEditModal: true,
    };

    hideEditCardModal(state);
    expect(state.showEditModal).toBe(false);
  });

  // deleteCard
  it('deletes card from items array', () => {
    const state = {
      lists: [
        {
          id: 1,
          items: [
            { title: 'foo', id: 1 },
            { title: 'bar', id: 2 },
          ],
        },
        { id: 2, items: [{ title: 'baz', id: 1 }] },
      ],
      targetCardId: 1,
      targetCardList: 1,
    };

    deleteCard(state);
    expect(state.lists).toEqual([
      { id: 1, items: [{ title: 'bar', id: 1 }] },
      { id: 2, items: [{ title: 'baz', id: 1 }] },
    ]);
  });

  // editCardData
  it('updates title of object on items array', () => {
    const state = {
      lists: [{ id: 1, items: [{ title: 'foo', id: 1 }] }],
      targetCardId: 1,
      targetCardList: 1,
    };
    const payload = {
      propName: 'title',
      updatedValue: 'bar',
      id: 1,
    };
    editCardData(state, payload);
    expect(state.lists).toEqual([{ id: 1, items: [{ title: 'bar', id: 1 }] }]);
  });

  it('updates description of object on items array', () => {
    const state = {
      lists: [{ id: 1, items: [{ description: 'foo', id: 1 }] }],
      targetCardId: 1,
      targetCardList: 1,
    };
    const payload = {
      propName: 'description',
      updatedValue: 'bar',
    };
    editCardData(state, payload);
    expect(state.lists).toEqual([{ id: 1, items: [{ description: 'bar', id: 1 }] }]);
  });
});
