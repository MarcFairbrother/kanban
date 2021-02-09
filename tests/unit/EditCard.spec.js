import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import EditCard from '@/components/EditCard.vue';

describe('EditCard.vue', () => {
  it('outputs correct data', () => {
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
    const wrapper = shallowMount(EditCard, { store, localVue });

    expect(wrapper.find('h2').text()).toBe('foo');
    expect(wrapper.find('p').text()).toBe('bar');
  });
});
