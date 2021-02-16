import { shallowMount } from '@vue/test-utils';
import SingleList from '@/components/SingleList.vue';

describe('SingeList.vue', () => {
  it('renders the delete button if items array is empty', () => {
    const wrapper = shallowMount(SingleList, {
      propsData: {
        listData: {
          items: [],
        },
      },
    });

    expect(wrapper.find('button.js-deleteList').exists()).toBe(true);
  });

  it('does not render the delete button it items array is not empty', () => {
    const wrapper = shallowMount(SingleList, {
      propsData: {
        listData: {
          items: ['foo', 'bar'],
        },
      },
    });

    expect(wrapper.find('button.js-deleteList').exists()).toBe(false);
  });

  it('calls handleDeleteList when button is clicked', async () => {
    const handleDeleteList = jest.fn();
    const wrapper = shallowMount(SingleList, {
      propsData: {
        listData: {
          id: 1,
          items: [],
        },
      },
      methods: {
        handleDeleteList,
      },
    });

    await wrapper.find('button.js-deleteList').trigger('click');
    expect(handleDeleteList).toHaveBeenCalledWith(1);
  });

  it('calls handleNewCard when button is clicked', async () => {
    const handleNewCard = jest.fn();
    const wrapper = shallowMount(SingleList, {
      propsData: {
        listData: {
          id: 1,
          items: [],
        },
      },
      methods: {
        handleNewCard,
      },
    });

    await wrapper.find('button.js-newCard').trigger('click');
    expect(handleNewCard).toHaveBeenCalledWith(1);
  });
});
