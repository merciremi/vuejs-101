<template>
  <div>
    <form action="/" @submit.prevent="addQuote">
      <p>Jot your new quote here mate:</p>
      <input type="textarea" id="new-quote" ref="quote">
      <input type="submit" value="Add that quote">
    </form>
  </div>
</template>

<script>
  export default {
    props: ['quotesRepository'],
    methods: {
      addQuote() {
        this.quotesRepository.quotes.push(
          {id: this.quotesRepository.nextQuoteId, content: this.$refs.quote.value}
        );
        this.quotesRepository.nextQuoteId++;
        this.cleanForm();
      },
      cleanForm() {
        this.$refs.quote.value = '';
      }
    }
  }
</script>
