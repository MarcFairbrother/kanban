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

  it('dispatches deleteList when button is clicked', async () => {
    const handleDeleteList = jest.fn();
    const wrapper = shallowMount(SingleList, {
      propsData: {
        listData: {
          position: 1,
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
});
