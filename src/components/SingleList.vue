<template>
  <ul class="list list--cards" :data-id="listData.id">
    <li
      class="list__item list__item--card"
      v-for="(item, idx) in listData.items"
      :key="`${idx}${item.id}${listData.id}`"
    >
      <SingleCard :card-data="item" :list-data="listData.id" />
    </li>
    <li class="list__item list__item--add">
      <button class="js-newCard" @click="handleNewCard(listData.id)">New Card</button>
    </li>
    <li class="list__item list__item--delete" v-if="listData.items.length === 0">
      <button class="js-deleteList" @click="handleDeleteList(listData.id)">Delete List</button>
    </li>
  </ul>
</template>

<script>
import SingleCard from '@/components/SingleCard.vue';
import { mapActions } from 'vuex';

export default {
  name: 'SingleList',
  props: ['listData'],
  components: {
    SingleCard,
  },
  methods: {
    ...mapActions({ deleteList: 'deleteList', newCard: 'newCard' }),
    handleDeleteList(id) {
      this.deleteList(id);
    },
    handleNewCard(id) {
      this.newCard(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  &__item {
    border-radius: 5px;
    &:last-of-type {
      margin-bottom: 0;
    }
    &--add {
      margin-bottom: 2rem;
    }
    &--add > button {
      background-image: var(--plus-icn);
      background-position: 2.25rem center;
      background-size: 1.5rem;
    }
    &--delete > button {
      background-image: var(--trash-icn);
      background-position: 2rem center;
      background-size: 2rem;
    }
    &--add,
    &--delete {
      background: var(--scnd-clr);
      border: solid 1px var(--main-clr);
      cursor: initial;
      padding: 0;
      & > button {
        align-items: center;
        background-color: transparent;
        background-repeat: no-repeat;
        border: solid 1px transparent;
        border-radius: 5px;
        color: var(--main-clr);
        cursor: pointer;
        display: flex;
        font-weight: 700;
        line-height: 2rem;
        padding: 1rem 5rem;
        transition: background-color 0.25s ease-in;
        width: 100%;
        &:hover,
        &:focus {
          background-color: var(--acnt-clr);
          outline: none;
        }
      }
    }
  }
}
</style>
