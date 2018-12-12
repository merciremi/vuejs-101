<template>
  <div id="app">
    <appNavigation/>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <appNewQuote :quotesRepository="quotesRepository"></appNewQuote>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          {{ quotesRepository.quotes }}
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

export default {
  name: 'app',
  data() {
    return {
      quotesRepository: {
        nextQuoteId: 1,
        quotes: []
      }
    }
  },
  components: {
    appNavigation: Navigation,
    appFooter: Footer,
    appNewQuote: NewQuote
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
