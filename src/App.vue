<template>
  <main id="app">
    <AllLists />
    <CreateCard v-if="showForm" class="createcard" />
  </main>
</template>

<script>
import AllLists from '@/components/AllLists.vue';
import CreateCard from '@/components/CreateCard.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    AllLists,
    CreateCard,
  },
  computed: {
    showForm() {
      return this.$store.state.showForm;
    },
  },
  methods: {
    ...mapActions(['setData']),
  },
  mounted() {
    // check local storage for existing data
    const savedData = localStorage.getItem('lists');
    if (savedData) {
      // update store with existing data
      this.setData(JSON.parse(savedData));
    } else {
      // or set up store with default data
      this.setData([
        {
          title: 'My List',
          position: '1',
          items: [
            {
              title: 'An example card',
              description: 'You can edit or delete this card by clicking on the edit button.',
              position: '1',
            },
          ],
        },
      ]);
    }
  },
};
</script>

<style lang="scss"></style>
