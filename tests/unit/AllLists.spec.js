import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AllLists from '@/components/AllLists.vue';

describe('AllLists.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  it('renders a single li when state includes a single list', () => {
    const store = new Vuex.Store({
      getters: {
        getLists: () => [{ position: 1 }],
      },
    });
    const wrapper = shallowMount(AllLists, { store, localVue });

    expect(wrapper.find('li.lists__item').html()).toContain('data-position="1"');
  });

  it('renders two li elements when state includes two lists', () => {
    const store = new Vuex.Store({
      getters: {
        getLists: () => [{ position: 1 }, { position: 2 }],
      },
    });
    const wrapper = shallowMount(AllLists, { store, localVue });

    expect(wrapper.find('li.lists__item[data-position="1"]').exists()).toBe(true);
    expect(wrapper.find('li.lists__item[data-position="2"]').exists()).toBe(true);
  });

  it('renders no li elements when state includes zero lists', () => {
    const store = new Vuex.Store({
      getters: {
        getLists: () => [],
      },
    });
    const wrapper = shallowMount(AllLists, { store, localVue });

    expect(wrapper.find('li.lists__item').exists()).toBe(false);
  });
});
