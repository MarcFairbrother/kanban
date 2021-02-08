<template>
  <section>
    <form @submit.prevent="handleSubmitFormClick">
      <button type="submit">Submit</button>
    </form>
    <button class="js-closeForm" @click="handleCloseFormClick" type="button">Cancel</button>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CreateCard',
  methods: {
    ...mapActions({ closeNewCardForm: 'closeNewCardForm', createNewCard: 'createNewCard' }),
    handleCloseFormClick() {
      this.closeNewCardForm();
    },
    handleSubmitFormClick() {
      this.createNewCard();
    },
  },
};
</script>
