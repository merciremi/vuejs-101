<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="quotes-list">
        <h3>Your quotes:</h3>
        <p>Delete your quotes by clicking on 'em.</p>
        <div class="quotes-grid">
          <appQuote v-for="(quote, index) in quotes.all" @click.native="deleteQuote(index)">
            {{ quote.content }}
          </appQuote>
        </div>
      </div>
    </div>
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
div h3 {
  display: inline-block;
  border-bottom: 3px solid rgba(106,216,106,0.5);
}

.quotes-list {
  width: 100%;
  margin: auto;
}

.quotes-grid {
  width: 90%;
  padding: 30px;
  margin: 10px auto;
  text-align: left;
}
</style>
