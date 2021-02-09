<template>
  <article :data-position="cardData.position" :data-list="listData">
    <h3>{{ cardData.title }}</h3>
    <p>{{ cardData.description }}</p>
  </article>
</template>

<script>
export default {
  name: 'SingleCard',
  props: ['cardData', 'listData'],
};
</script>
