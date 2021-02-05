import mutations from '@/store/mutations';

const { setData, addNewList, updateListTitle, deleteList } = mutations;

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
});
