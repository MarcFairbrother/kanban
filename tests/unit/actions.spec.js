import actions from '@/store/actions';

const { setData } = actions;

describe('actions.js', () => {
  // setData
  it('commits setData with data passed as argument', () => {
    const data = ['foo', 'bar'];
    const commit = jest.fn();
    setData({ commit }, data);
    expect(commit).toHaveBeenCalledWith('setData', ['foo', 'bar']);
  });
});
