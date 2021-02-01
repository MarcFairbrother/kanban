<template>
  <ul class="lists">
    <li v-for="(list, idx) in lists" :key="idx" class="lists__item" :data-position="list.position">
      {{ list }}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AllLists',
  computed: {
    ...mapGetters({ lists: 'getLists' }),
  },
};
</script>
