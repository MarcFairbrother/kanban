<template>
  <main id="app">
    <AllLists />
  </main>
</template>

<script>
import AllLists from '@/components/AllLists.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    AllLists,
  },
  methods: {
    ...mapActions(['setData']),
  },
  mounted() {
    // check local storage for existing data
    const savedData = localStorage.getItem('lists');
    if (savedData) {
      // update store with existing data
      this.setData(savedData);
    } else {
      // or set up store with default data
      this.setData([
        {
          title: 'My List',
          position: '1',
          items: [
            {
              title: 'An example card',
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
