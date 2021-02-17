<template>
  <section class="create">
    <form class="create__modal" @submit.prevent="handleSubmitFormClick" action="/" name="newCard">
      <div class="create__field">
        <label for="title">Title:</label>
        <input id="title" type="text" v-model="$v.newCard.title.$model" @blur="$v.newCard.title.$touch()" />
        <p class="create__error" v-if="$v.newCard.title.$error">Please enter a title</p>
      </div>
      <div class="create__field">
        <label for="description">Description:</label>
        <input
          id="description"
          type="text"
          v-model="$v.newCard.description.$model"
          @blur="$v.newCard.description.$touch()"
        />
        <p class="create__error" v-if="$v.newCard.description.$error">Please enter a description</p>
      </div>
      <div class="create__buttons">
        <button type="submit" :disabled="$v.newCard.$invalid">Submit</button>
        <button class="js-closeForm" @click="handleCloseFormClick" type="button">Cancel</button>
      </div>
      <p class="create__disclaimer">
        This is a demo app, please do not use for other purposes. Data is saved to your browser's local storage only.
      </p>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import { sanitize } from 'dompurify';

export default {
  name: 'CreateCard',
  data() {
    return {
      newCard: {
        title: '',
        description: '',
      },
    };
  },
  validations: {
    newCard: {
      title: {
        required,
      },
      description: {
        required,
      },
    },
  },
  methods: {
    ...mapActions({ closeNewCardForm: 'closeNewCardForm', createNewCard: 'createNewCard' }),
    handleCloseFormClick() {
      this.closeNewCardForm();
    },
    handleSubmitFormClick() {
      const payload = {
        title: sanitize(this.newCard.title),
        description: sanitize(this.newCard.description),
      };
      this.createNewCard(payload);
      this.closeNewCardForm();
    },
  },
  mounted() {
    document.querySelector('input').focus();
  },
};
</script>

<style lang="scss" scoped>
.create {
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
    padding: 0 2rem;
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
      padding: 2rem 4rem;
    }
  }
  &__field {
    & label {
      display: block;
      font-size: 1.6rem;
      margin: 2rem 0;
    }
    & input {
      background: var(--scnd-clr);
      border: solid 1px var(--main-clr);
      color: var(--main-clr);
      font-size: 1.6rem;
      height: 4rem;
      padding: 0 1rem;
      width: 100%;
      &:focus {
        background: var(--acnt-clr);
        background: var(--main-clr);
        color: var(--scnd-clr);
      }
    }
  }
  &__error {
    font-size: 1.2rem;
    margin-top: 1rem;
    text-decoration: underline;
    text-decoration-color: var(--err-clr);
    @include breakpoint($tablet-width) {
      margin-top: 2rem;
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
      &[type='submit'] {
        margin-right: 2rem;
        &:disabled {
          cursor: not-allowed;
          opacity: 0.25;
        }
      }
      &:focus,
      &:hover {
        background: var(--acnt-clr);
      }
    }
  }
  &__disclaimer {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
}
</style>
