import mutations from '@/store/mutations';

const { setData, addNewList, updateListTitle, deleteList, newCard, closeNewCardForm, createNewCard } = mutations;

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
    expect(state.lists).toEqual([{ foo: 'bar' }, { foo: 'baz', position: 2 }]);
  });

  it('sets the position of new list to the length of the array', () => {
    const state = {
      lists: [{ foo: 'bar', position: 1 }],
    };
    const payload = [{ foo: 'baz' }];
    addNewList(state, payload);
    expect(state.lists[state.lists.length - 1].position).toEqual(state.lists.length);
  });

  // updateListTitle
  it('updates the list title', () => {
    const state = {
      lists: [{ title: 'foo', position: 1 }],
    };
    const payload = { newTitle: 'bar', position: 1 };
    updateListTitle(state, payload);
    expect(state.lists[0].title).toEqual('bar');
  });

  // deleteList
  it('deletes the list with corresponding position and updates the position of other lists', () => {
    const state = {
      lists: [
        { title: 'foo', position: 1 },
        { title: 'bar', position: 2 },
        { title: 'baz', position: 3 },
      ],
    };
    const payload = 2;

    deleteList(state, payload);
    expect(state.lists).toEqual([
      { title: 'foo', position: 1 },
      { title: 'baz', position: 2 },
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
          position: 1,
          items: [{ title: 'Bar', description: 'The first card in the first list', position: 1 }],
        },
        {
          title: 'Baz',
          position: 2,
          items: [{ title: 'Far', description: 'The first card in the second list', position: 1 }],
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
        position: 1,
        items: [
          { title: 'Bar', description: 'The first card in the first list', position: 1 },
          { title: 'Boo', description: 'The second card in the first list', position: 2 },
        ],
      },
      {
        title: 'Baz',
        position: 2,
        items: [{ title: 'Far', description: 'The first card in the second list', position: 1 }],
      },
    ]);
  });
});
