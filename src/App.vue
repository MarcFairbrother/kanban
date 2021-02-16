<template>
  <div id="app" class="container">
    <header class="header">
      <SvgLogo />
    </header>
    <main>
      <AllLists />
    </main>
    <transition name="fade">
      <CreateCard v-if="showForm" class="js-createCard" />
    </transition>
    <transition name="fade">
      <EditCard v-if="showEditModal" class="js-showEditModal" />
    </transition>
  </div>
</template>

<script>
import SvgLogo from '@/components/SvgLogo.vue';
import AllLists from '@/components/AllLists.vue';
import CreateCard from '@/components/CreateCard.vue';
import EditCard from '@/components/EditCard.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    AllLists,
    CreateCard,
    EditCard,
    SvgLogo,
  },
  computed: {
    showForm() {
      return this.$store.state.showForm;
    },
    showEditModal() {
      return this.$store.state.showEditModal;
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
          id: 1,
          items: [
            {
              title: 'An example card',
              description: 'You can edit or delete this card by clicking on the edit button.',
              id: 1,
            },
          ],
        },
      ]);
    }
  },
};
</script>

<style lang="scss">
@import './assets/styles/styles.scss';
.container {
  max-width: 100%;
  min-height: 100vh;
  overflow-x: scroll;
  padding: 2rem;
  scrollbar-color: #565f64 #444748;
  @include breakpoint($tablet-width) {
    padding: 4rem;
  }
}
.header {
  margin-bottom: 2rem;
  width: 100%;
  @include breakpoint($tablet-width) {
    margin-bottom: 4rem;
  }
  & > svg {
    height: auto;
    max-width: 280px;
    width: 100%;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
