import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import EditCard from '@/components/EditCard.vue';

describe('EditCard.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store({
    getters: {
      getTargetCardData: () => ({
        title: 'foo',
        description: 'bar',
      }),
    },
  });
  const handleHideEditCardModal = jest.fn();
  const handleDeleteCard = jest.fn();
  const wrapper = shallowMount(EditCard, {
    store,
    localVue,
    methods: {
      handleHideEditCardModal,
      handleDeleteCard,
    },
  });

  it('outputs correct data', () => {
    expect(wrapper.find('h2').text()).toBe('foo');
    expect(wrapper.find('p').text()).toBe('bar');
  });

  it('calls hideEditCardModal on click', () => {
    wrapper.find('button.js-hideEditCardModal').trigger('click');
    expect(handleHideEditCardModal).toHaveBeenCalled();
  });

  it('calls handleDeleteCard on click', () => {
    wrapper.find('button.js-deleteCard').trigger('click');
    expect(handleDeleteCard).toHaveBeenCalled();
  });
});
