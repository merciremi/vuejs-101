<template>
  <div class="quotes-list">
    <appQuote v-for="(quote, index) in quotes.all" @click.native="deleteQuote(index)">
      {{ quote.content }}
    </appQuote>
  </div>
</template>

<script>
import Quote from '@/components/quote/Quote.vue'

export default {
  props: ['quotes'],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.quotes.all.splice(index, 1);
    }
  }
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
