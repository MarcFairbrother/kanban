import { shallowMount, createLocalVue } from '@vue/test-utils';
import CreateCard from '@/components/CreateCard.vue';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();
localVue.use(Vuelidate);

describe('CreateCard.vue', () => {
  it('calls handleCloseFormClick when cancel button is clicked', async () => {
    const handleCloseFormClick = jest.fn();
    const wrapper = shallowMount(CreateCard, {
      propsData: {
        newCard: {
          title: 'Foo',
          description: 'Bar',
        },
      },
      methods: {
        handleCloseFormClick,
      },
      localVue,
    });

    await wrapper.find('.js-closeForm').trigger('click');
    expect(handleCloseFormClick).toHaveBeenCalled();
  });

  it('calls handleSubmitFormClick when submit button is clicked', async () => {
    const handleSubmitFormClick = jest.fn();
    const wrapper = shallowMount(CreateCard, {
      data() {
        return {
          newCard: {
            title: 'Foo',
            description: 'Bar',
          },
        };
      },
      methods: {
        handleSubmitFormClick,
      },
      localVue,
    });

    await wrapper.find('form').trigger('submit');
    expect(handleSubmitFormClick).toHaveBeenCalled();
  });
});
