<template>
  <article>
    <h2 contenteditable="true" @blur="handleEditCardData($event, 'title')" v-html="card.title"></h2>
    <p contenteditable="true" @blur="handleEditCardData($event, 'description')" v-html="card.description"></p>
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
    ...mapActions({ hideEditCardModal: 'hideEditCardModal', deleteCard: 'deleteCard', editCardData: 'editCardData' }),
    handleHideEditCardModal() {
      this.hideEditCardModal();
    },
    handleDeleteCard() {
      this.deleteCard();
      this.hideEditCardModal();
    },
    handleEditCardData(e, propName) {
      this.editCardData({ updatedValue: e.target.innerText, propName });
    },
  },
};
</script>
