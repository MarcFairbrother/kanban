<template>
  <ul class="lists">
    <li v-for="(list, idx) in lists" :key="idx" class="lists__item lists__item--list" :data-position="list.position">
      {{ list }}
    </li>
    <li class="lists__item lists__item--add">
      <button class="js-addNewList" @click="addNewList({ title: 'New List', items: [] })">New List</button>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AllLists',
  computed: {
    ...mapGetters({ lists: 'getLists' }),
  },
  methods: {
    ...mapActions({ addNewList: 'addNewList' }),
  },
};
</script>
