<template>
  <div id="app">
    <appNavigation/>
    <appCounter :quotes="quotes.all"></appCounter>
    <div class="container">
      <appNewQuote :quotes="quotes"></appNewQuote>
      <appQuotesList :quotes="quotes"></appQuotesList>
    </div>
    <appFooter/>
  </div>
</template>

<script>
import Navigation from '@/components/shared/Navigation.vue'
import Footer from '@/components/shared/Footer.vue'
import NewQuote from '@/components/quote/NewQuote.vue'
import QuotesList from '@/components/quote/QuotesList.vue'
import Counter from '@/components/quote/Counter.vue'

export default {
  name: 'app',
  data() {
    return {
      quotes: {
        nextQuoteId: 1,
        all: []
      }
    }
  },
  components: {
    appNavigation: Navigation,
    appFooter: Footer,
    appNewQuote: NewQuote,
    appQuotesList: QuotesList,
    appCounter: Counter
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
