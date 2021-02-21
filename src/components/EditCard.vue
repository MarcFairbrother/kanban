<template>
  <section class="edit" @click="handleClickOutside">
    <article class="edit__modal">
      <h2
        class="edit__title"
        contenteditable="true"
        @blur="handleEditCardData($event, 'title')"
        v-html="card.title"
        @keydown="handleTitleKeydown"
      ></h2>
      <p
        class="edit__description"
        contenteditable="true"
        @blur="handleEditCardData($event, 'description')"
        v-html="card.description"
      ></p>
      <div class="edit__buttons">
        <button class="edit__save js-hideEditCardModal" @click="handleHideEditCardModal">Done</button>
        <button class="edit__delete js-deleteCard" @click="handleDeleteCard" @keydown="handleDeleteKeydown">
          Delete
        </button>
      </div>
      <p class="edit__disclaimer">
        This is a demo app, please do not use for other purposes. Data is saved to your browser's local storage only.
      </p>
    </article>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { sanitize } from 'dompurify';

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
      this.editCardData({ updatedValue: sanitize(e.target.innerText), propName });
    },
    handleTitleKeydown(e) {
      if (e.key === 'Tab' && e.shiftKey) {
        e.preventDefault();
        // focus on last modal button
        const element = document.querySelector('.js-deleteCard');
        element ? element.focus() : null;
      } else if (e.key === 'Enter') {
        e.preventDefault();
        // focus on the description form field
        const element = document.querySelector('.edit__description');
        element ? element.focus() : null;
      }
    },
    handleDeleteKeydown(e) {
      if (e.key === 'Tab' && !e.shiftKey) {
        e.preventDefault();
        // focus on first modal input
        const element = document.querySelector('.edit__title');
        element ? element.focus() : null;
      }
    },
    handleClickOutside(e) {
      if (e.target === e.currentTarget) {
        this.hideEditCardModal();
      }
    },
  },
  mounted() {
    // focus on first modal element
    const element = document.querySelector('.edit__title');
    element ? element.focus() : null;
  },
  destroyed() {
    if (this.card) {
      // focus on element edit button
      const element = document.querySelector(`article.card[data-id="${this.card.id}"]`);
      element.querySelector('button').focus();
    } else {
      // if element was deleted focus on first list title
      document.querySelector('ul h2').focus();
    }
  },
};
</script>

<style lang="scss" scoped>
.edit {
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  &__modal {
    background: var(--scnd-clr);
    border-radius: 5px;
    color: var(--main-clr);
    max-width: 40rem;
    padding: 2rem;
    width: 100%;
    transition: transform 0.35s ease-in;
    .fade-enter & {
      transition-delay: 0.15s;
    }
    .fade-enter &,
    .fade-leave-to & {
      transform: translateY(-100vh);
    }
    @include breakpoint($tablet-width) {
      padding: 4rem;
    }
  }
  &__title {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  &__description {
    font-size: 1.6rem;
  }
  &__title,
  &__description {
    &:focus {
      outline: solid 1px var(--main-clr);
      outline-offset: 4px;
    }
  }
  &__buttons {
    margin: 2rem 0;
    text-align: center;
    @include breakpoint($tablet-width) {
      margin: 4rem 0;
    }
    & > button {
      background: none;
      border: solid 1px var(--main-clr);
      border-radius: 5px;
      color: var(--main-clr);
      cursor: pointer;
      line-height: 4rem;
      padding: 0 2rem;
      transition: background-color 0.25s ease-in-out;
      &:focus,
      &:hover {
        background: var(--acnt-clr);
      }
    }
  }
  &__save {
    margin-right: 2rem;
  }
  &__disclaimer {
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>
