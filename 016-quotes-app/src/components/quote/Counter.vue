<template>
  <div class="counter">
    <div class="progress" :style="counterProgress" :class="updateCounterColour">
      <p >{{ quotes.length }} / 10</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quotes'],
  data() {
    return {
      counterColor: ''
    }
  },
  computed: {
    counterProgress() {
      return {
        width: this.quotes.length * 10 + '%',
      }
    },
    updateCounterColour() {
      return {
        green: this.quotes.length < 10,
        red: this.quotes.length == 10
      }
    }
  },
  watch: {
    quotes(value) {
      if (value.length == 10) {
        alert("You can't add any more quotes. Click on a quote to delete it.");
      }
    }
  }
};
</script>

<style>
.counter {
  width: 100%;
  background-color: lightgrey;
}

.progress {
  margin: 0;
  color: white;
  min-width: 50px;
  transition: width 500ms;
}

.green {
  background-color: green;
}

.red {
  background-color: red;
}
</style>
