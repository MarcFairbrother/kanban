<template>
  <form>
    Hello
    <button class="js-closeForm" @click="handleCloseFormClick">Cancel</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CreateCard',
  methods: {
    ...mapActions({ closeNewCardForm: 'closeNewCardForm' }),
    handleCloseFormClick() {
      this.closeNewCardForm();
    },
  },
};
</script>
