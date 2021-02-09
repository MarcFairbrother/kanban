import { shallowMount } from '@vue/test-utils';
import SingleCard from '@/components/SingleCard.vue';

describe('SingleCard.vue', () => {
  it('renders the card title', () => {
    const wrapper = shallowMount(SingleCard, {
      propsData: {
        cardData: {
          title: 'Foo',
          description: 'Bar',
          position: 1,
        },
        listData: 2,
      },
    });

    expect(wrapper.find('h3').text()).toBe('Foo');
    expect(wrapper.find('p').text()).toBe('Bar');
    expect(wrapper.find('article[data-position="1"]').exists()).toBe(true);
    expect(wrapper.find('article[data-list="2"]').exists()).toBe(true);
  });
});
