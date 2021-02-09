<template>
  <article :data-position="cardData.position" :data-list="listData">
    <h3>{{ cardData.title }}</h3>
    <p>{{ cardData.description }}</p>
    <button
      class="js-handleEditCard"
      @click="handleEditCard({ listPosition: parseInt(listData), cardPosition: parseInt(cardData.position) })"
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
