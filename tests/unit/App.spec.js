import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '@/App.vue';

describe('App.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      showForm: true,
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
    expect(wrapper.find('.createcard').exists()).toBe(true);
  });
});
