<template>
  <div id="app">
    <appNavigation/>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <appNewQuote :quotes="quotes"></appNewQuote>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <appQuotesList :quotes="quotes"></appQuotesList>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">

        </div>
      </div>
    </div>
    <appFooter/>
  </div>
</template>

<script>
import Navigation from '@/components/shared/Navigation.vue'
import Footer from '@/components/shared/Footer.vue'
import NewQuote from '@/components/quote/NewQuote.vue'
import QuotesList from '@/components/quote/QuotesList.vue'

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
    appQuotesList: QuotesList
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
