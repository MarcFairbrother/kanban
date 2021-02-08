<template>
  <section>
    <form @submit.prevent="handleSubmitFormClick" action="/" name="newCard">
      <div>
        <label for="title">Title</label>
        <input id="title" type="text" v-model="$v.newCard.title.$model" @blur="$v.newCard.title.$touch()" />
        <p v-if="$v.newCard.title.$error">Please enter a title</p>
      </div>
      <div>
        <label for="description">Description</label>
        <input
          id="description"
          type="text"
          v-model="$v.newCard.description.$model"
          @blur="$v.newCard.description.$touch()"
        />
        <p v-if="$v.newCard.description.$error">Please enter a description</p>
      </div>
      <button type="submit" :disabled="$v.newCard.$invalid">Submit</button>
    </form>
    <button class="js-closeForm" @click="handleCloseFormClick" type="button">Cancel</button>
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
};
</script>
