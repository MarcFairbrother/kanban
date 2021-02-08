<template>
  <article>
    <h3>{{ cardData.title }}</h3>
  </article>
</template>

<script>
export default {
  name: 'SingleCard',
  props: ['cardData'],
};
</script>
