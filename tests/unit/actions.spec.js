import actions from '@/store/actions';

const { setData, addNewList, updateListTitle } = actions;

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
});
