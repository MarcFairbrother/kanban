import mutations from '@/store/mutations';

const { setData, addNewList } = mutations;

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
});
