<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="new-quote">
        <form action="/" @submit.prevent="addQuote">
          <h3>Jot your new quote here ✍️</h3>
          <textarea id="new-quote" rows="5" ref="quote"></textarea>
          <input type="submit" value="Add that quote" :disabled="quotes.all.length == 10">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quotes'],
  methods: {
    addQuote() {
      this.$emit('quoteAdded', this.$refs.quote.value);
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

input:disabled{
  background-color: rgba(238, 238, 238, 1);
}
</style>
