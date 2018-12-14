<template>
  <div class="new-quote">
    <form action="/" @submit.prevent="addQuote">
      <h3>Jot your new quote here ✍️</h3>
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
      if (this.quotes.all.length < 10) {
        console.log('in');
        this.quotes.all.push(
          {id: this.quotes.nextQuoteId, content: this.$refs.quote.value}
          );
        this.quotes.nextQuoteId++;
      }
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
  padding: 30px;
}

textarea {
  width: 70%;
  border:3px solid rgba(106,216,106,1);
}

input {
  display: block;
  margin: 10px auto;
  background-color: rgba(106,216,106,1);
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 30px;
}
</style>
