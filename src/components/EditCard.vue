<template>
  <article>
    <h2 v-html="card.title"></h2>
    <p v-html="card.description"></p>
    <button class="js-hideEditCardModal" @click="handleHideEditCardModal">Done</button>
    <button class="js-deleteCard" @click="handleDeleteCard">Delete</button>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'EditCard',
  computed: {
    ...mapGetters({ card: 'getTargetCardData' }),
  },
  methods: {
    ...mapActions({ hideEditCardModal: 'hideEditCardModal', deleteCard: 'deleteCard' }),
    handleHideEditCardModal() {
      this.hideEditCardModal();
    },
    handleDeleteCard() {
      this.deleteCard();
      this.hideEditCardModal();
    },
  },
};
</script>
