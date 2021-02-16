import { shallowMount } from '@vue/test-utils';
import SingleCard from '@/components/SingleCard.vue';

describe('SingleCard.vue', () => {
  it('renders the card data', () => {
    const wrapper = shallowMount(SingleCard, {
      propsData: {
        cardData: {
          title: 'Foo',
          description: 'Bar',
          id: 1,
        },
        listData: 2,
      },
    });

    expect(wrapper.find('h3').text()).toBe('Foo');
    expect(wrapper.find('p').text()).toBe('Bar');
    expect(wrapper.find('article[data-id="1"]').exists()).toBe(true);
    expect(wrapper.find('article[data-list="2"]').exists()).toBe(true);
  });

  it('calls handleEditCard when button is clicked', async () => {
    const handleEditCard = jest.fn();
    const wrapper = shallowMount(SingleCard, {
      propsData: {
        cardData: {
          title: 'Foo',
          description: 'Bar',
          id: 1,
        },
        listData: 2,
      },
      methods: {
        handleEditCard,
      },
    });

    await wrapper.find('button.js-handleEditCard').trigger('click');
    expect(handleEditCard).toHaveBeenCalled();
  });
});
