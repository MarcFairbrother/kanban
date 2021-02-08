import { shallowMount } from '@vue/test-utils';
import CreateCard from '@/components/CreateCard.vue';

describe('CreateCard.vue', () => {
  it('calls handle closeForm when button is clicked', async () => {
    const handleCloseFormClick = jest.fn();
    const wrapper = shallowMount(CreateCard, {
      methods: {
        handleCloseFormClick,
      },
    });

    await wrapper.find('.js-closeForm').trigger('click');
    expect(handleCloseFormClick).toHaveBeenCalled();
  });
});
