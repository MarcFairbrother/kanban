<template>
  <article>
    <h2 v-html="card.title"></h2>
    <p v-html="card.description"></p>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EditCard',
  computed: {
    ...mapGetters({ card: 'getTargetCardData' }),
  },
};
</script>
