import getters from '@/store/getters';

const { getLists, getTargetCardData } = getters;

describe('getters.js', () => {
  // getLists
  it('returns the current value of lists from the store', () => {
    const state = {
      lists: 'foo',
    };
    const bar = getLists(state);
    expect(bar).toBe('foo');
  });

  // getTargetCardData
  it('returns data for target card', () => {
    const state = {
      lists: [
        { title: 'foo', position: 1, items: [{ title: 'bar', description: 'baz', position: 1 }] },
        { title: 'boo', position: 2, items: [{ title: 'far', description: 'faz', position: 1 }] },
      ],
      targetCardPosition: 1,
      targetCardList: 2,
    };

    const data = getTargetCardData(state);
    expect(data.title).toBe('far');
    expect(data.description).toBe('faz');
    expect(data.position).toBe(1);
  });
});
