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
    handleTitleEdit: function(e, position) {
      this.updateListTitle({ newTitle: e.target.innerText, position });
    },
  },
};
</script>
