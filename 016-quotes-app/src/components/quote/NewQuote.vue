<template>
  <div class="new-quote">
    <form action="/" @submit.prevent="addQuote">
      <p>Jot your new quote here mate:</p>
      <textarea id="new-quote" rows="5" ref="quote">

      </textarea>
      <input type="submit" value="Add that quote">
    </form>
  </div>
</template>

<script>
export default {
  props: ['quotes'],
  methods: {
    addQuote() {
      this.quotes.all.push(
        {id: this.quotes.nextQuoteId, content: this.$refs.quote.value}
        );
      this.quotes.nextQuoteId++;
      this.cleanForm();
    },
    cleanForm() {
      this.$refs.quote.value = '';
    }
  }
};
</script>

<style>
.new-quote {
  display: block;
  width: 100%;
  border: 1px solid gray;
  padding: 30px;
}
input {
  display: block;
  margin: 10px auto;
}
</style>
