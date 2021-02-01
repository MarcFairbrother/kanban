import getters from '@/store/getters';

const { getLists } = getters;

describe('getters.js', () => {
  it('returns the current value of lists from the store', () => {
    const state = {
      lists: 'foo',
    };
    const bar = getLists(state);
    expect(bar).toBe('foo');
  });
});
