import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '@/App.vue';

describe('App.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      showForm: true,
      showEditModal: true,
    },
    actions: {
      setData: jest.fn(),
    },
  });
  const wrapper = shallowMount(App, { store, localVue });

  it('mounts the App component', () => {
    expect(wrapper).toBeTruthy();
  });

  it('displays card creation form', () => {
    expect(wrapper.find('.js-createCard').exists()).toBe(true);
    expect(wrapper.find('.js-showEditModal').exists()).toBe(true);
  });
});
