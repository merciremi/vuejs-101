<template>
  <div class="quotes-list">
    <p>{{ quotes.all }}</p>
    <ul>
      <li v-for="quote in quotes.all">{{ quote.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['quotes']
};
</script>

<style scoped>
.quotes-list {
  width: 100%;
  border: 1px solid gray;
  padding: 30px;
  margin: 10px 0;
  text-align: left;
}
</style>
