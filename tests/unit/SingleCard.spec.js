import { shallowMount } from '@vue/test-utils';
import SingleCard from '@/components/SingleCard.vue';

describe('SingleCard.vue', () => {
  it('renders the card title', () => {
    const wrapper = shallowMount(SingleCard, {
      propsData: {
        cardData: {
          title: 'Foo',
          descrption: 'Bar',
          position: 1,
        },
      },
    });

    expect(wrapper.find('h3').text()).toBe('Foo');
  });
});
