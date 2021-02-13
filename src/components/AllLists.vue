<template>
  <ul class="lists">
    <li v-for="(list, idx) in lists" :key="idx" class="lists__item lists__item--list" :data-position="list.position">
      <h2 contenteditable="true" @blur="handleTitleEdit($event, list.position)" v-html="list.title"></h2>
      <SingleList :list-data="list" />
    </li>
    <li class="lists__item lists__item--add">
      <button class="js-addNewList" @click="addNewList({ title: 'New List', items: [] })">New List</button>
    </li>
  </ul>
</template>

<script>
import SingleList from '@/components/SingleList.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AllLists',
  components: {
    SingleList,
  },
  computed: {
    ...mapGetters({ lists: 'getLists' }),
  },
  methods: {
    ...mapActions({ addNewList: 'addNewList', updateListTitle: 'updateListTitle' }),
    handleTitleEdit(e, position) {
      this.updateListTitle({ newTitle: e.target.innerText, position });
    },
  },
};
</script>

<style lang="scss" scoped>
.lists {
  align-items: flex-start;
  display: flex;
  &__item {
    background: var(--scnd-clr);
    border-radius: 5px;
    cursor: move;
    flex-shrink: 0;
    margin-right: 2rem;
    max-width: 280px;
    padding: 2rem;
    width: 75vw;
    @include breakpoint($tablet-width) {
      margin-right: 4rem;
      width: 280px;
    }
    & > h2 {
      color: var(--main-clr);
      cursor: text;
      font-size: 2.4rem;
      margin: 0 2rem 2rem;
    }
    &--add {
      cursor: initial;
      padding: 0;
      & > button {
        align-items: center;
        background-color: var(--scnd-clr);
        background-image: var(--plus-icn);
        background-position: 2.25rem center;
        background-repeat: no-repeat;
        background-size: 1.5rem;
        border: solid 1px transparent;
        border-radius: 5px;
        color: var(--main-clr);
        cursor: pointer;
        display: flex;
        font-weight: 700;
        line-height: 2rem;
        padding: 2rem 5rem;
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
