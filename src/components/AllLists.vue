<template>
  <ul class="lists" @dragover.prevent="dragOverElement" @drop.prevent="dropOnElement">
    <li
      v-for="(list, idx) in lists"
      :key="`${idx}${list.id}`"
      class="lists__item lists__item--list"
      :data-id="list.id"
      @drag.prevent="dragElement"
      @dragend.prevent="dragElementEnd"
      draggable="true"
    >
      <h2 contenteditable="true" @blur="handleTitleEdit($event, list.id)" v-html="list.title"></h2>
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
  data() {
    return {
      dragging: null,
    };
  },
  components: {
    SingleList,
  },
  computed: {
    ...mapGetters({ lists: 'getLists' }),
  },
  methods: {
    ...mapActions({
      addNewList: 'addNewList',
      updateListTitle: 'updateListTitle',
      reorderLists: 'reorderLists',
      updateListItems: 'updateListItems',
    }),
    handleTitleEdit(e, id) {
      this.updateListTitle({ newTitle: e.target.innerText, id });
    },
    dragElement(e) {
      e.target.classList.add('js-dragging');
    },
    dragElementEnd(e) {
      e.target.classList.remove('js-dragging');
    },
    dragOverElement(e) {
      this.dragging = document.querySelector('.js-dragging');
      if (this.dragging.classList.contains('lists__item--list')) {
        // handle list drag
        const container = document.querySelector('.lists');
        // get list element right of cursor
        const elementRightOfCursor = this.getListRightOfCursor(container, e.clientX);
        if (elementRightOfCursor) {
          // if element right of cursor exist insert dragged element before
          container.insertBefore(this.dragging, elementRightOfCursor);
        } else {
          // if no element right of cursor insert dragged element before new list button
          const containerLastElementChild = container.lastElementChild;
          container.insertBefore(this.dragging, containerLastElementChild);
        }
      } else if (this.dragging.classList.contains('card')) {
        // handle card drag
        const container = e.target.closest('ul.list');
        if (!container) return;
        // get card element below cursor
        const elementBelowCursor = this.getCardBelowCursor(container, e.clientY);
        if (elementBelowCursor) {
          // if element exists insert dragged element before
          container.insertBefore(this.dragging, elementBelowCursor);
        } else {
          // if no element below cursor insert dragged element before add card button
          const addButton = container.querySelector('.list__item--add');
          container.insertBefore(this.dragging, addButton);
        }
      }
    },
    dropOnElement() {
      if (this.dragging.classList.contains('lists__item--list')) {
        // handle list drop
        // get reordered list ids
        const listIds = [...document.querySelectorAll('.lists__item--list')].map((list) => parseInt(list.dataset.id));
        // create reordered lists array
        const reorderedLists = [];
        listIds.forEach((listId) => {
          const matchingList = this.$store.state.lists.find((list) => list.id === listId);
          reorderedLists.push(matchingList);
        });
        // dispatch to store
        this.reorderLists(reorderedLists);
      } else if (this.dragging.classList.contains('card')) {
        // handle card drop
        const container = this.dragging.closest('ul.list');
        if (!container) return;
        const listCardsIds = [...container.querySelectorAll('.card')].map((card) => parseInt(card.dataset.id));
        const newParentListId = parseInt(container.dataset.id);
        const oldParentListId = parseInt(this.dragging.dataset.list);
        const cardId = parseInt(this.dragging.dataset.id);
        if (newParentListId === oldParentListId) return;
        this.dragging.remove();
        this.updateListItems({ newParentListId, oldParentListId, cardId, listCardsIds });
      }
    },
    getListRightOfCursor(container, x) {
      const draggableElements = [...container.querySelectorAll('.lists__item--list:not(.js-dragging)')];
      // return draggable element to right of current cursor position
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = x - box.left - box.width / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    },
    getCardBelowCursor(container, y) {
      const draggableElements = [...container.querySelectorAll('.list__item--card:not(.js-dragging)')];
      // return draggable element below current cursor position
      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
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
    transition: opacity 0.25s ease-in-out;
    width: 75vw;
    &.js-dragging {
      opacity: 0.75;
    }
    @include breakpoint($tablet-width) {
      margin-right: 4rem;
      width: 280px;
    }
    & > h2 {
      color: var(--main-clr);
      cursor: text;
      font-size: 2.4rem;
      margin: 0 2rem 2rem;
      &:focus {
        outline: solid 1px var(--main-clr);
        outline-offset: 4px;
      }
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
