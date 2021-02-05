<template>
  <ul class="list">
    <li>{{ listData }}</li>
    <li>
      <button class="js-newCard" @click="handleNewCard(listData.position)">New Card</button>
    </li>
    <li v-if="listData.items.length === 0">
      <button class="js-deleteList" @click="handleDeleteList(listData.position)">Delete List</button>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SingleList',
  props: ['listData'],
  methods: {
    ...mapActions({ deleteList: 'deleteList', newCard: 'newCard' }),
    handleDeleteList(position) {
      this.deleteList(position);
    },
    handleNewCard(position) {
      this.newCard(position);
    },
  },
};
</script>
