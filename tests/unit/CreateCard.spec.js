import { shallowMount } from '@vue/test-utils';
import CreateCard from '@/components/CreateCard.vue';

describe('CreateCard.vue', () => {
  it('calls handleCloseFormClick when cancel button is clicked', async () => {
    const handleCloseFormClick = jest.fn();
    const wrapper = shallowMount(CreateCard, {
      methods: {
        handleCloseFormClick,
      },
    });

    await wrapper.find('.js-closeForm').trigger('click');
    expect(handleCloseFormClick).toHaveBeenCalled();
  });

  it('calls handleSubmitFormClick when submit button is clicked', async () => {
    const handleSubmitFormClick = jest.fn();
    const wrapper = shallowMount(CreateCard, {
      methods: {
        handleSubmitFormClick,
      },
    });

    await wrapper.find('form').trigger('submit');
    expect(handleSubmitFormClick).toHaveBeenCalled();
  });
});
