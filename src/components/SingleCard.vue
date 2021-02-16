<template>
  <article class="card" :data-id="cardData.id" :data-list="listData">
    <h3 class="card__title">{{ cardData.title }}</h3>
    <p class="card__description">{{ cardData.description }}</p>
    <button
      class="js-handleEditCard card__edit"
      @click="handleEditCard({ listId: parseInt(listData), cardId: parseInt(cardData.id) })"
    >
      Edit
    </button>
  </article>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SingleCard',
  props: ['cardData', 'listData'],
  methods: {
    ...mapActions({ editCard: 'editCard' }),
    handleEditCard(payload) {
      this.editCard(payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: var(--main-clr);
  border-radius: 5px;
  padding: 2rem;
  &:hover {
    cursor: move;
  }
  &__title {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  &__description {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  &__edit {
    align-items: center;
    background-color: transparent;
    background-image: var(--edit-icn);
    background-id: left top;
    background-repeat: no-repeat;
    background-size: 2rem;
    border: solid 1px transparent;
    color: var(--acnt-clr);
    cursor: pointer;
    display: flex;
    line-height: 2.2rem;
    padding: 0 0 0 3rem;
    &:focus {
      outline: solid 1px var(--acnt-clr);
      outline-offset: 4px;
    }
  }
}
</style>
