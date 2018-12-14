<template>
  <div class="counter">
    <div class="progress" :style="counterProgress" :class="updateCounterColour">
      <p v-if="quotes.length < 10">{{ quotes.length }} / 10</p>
      <p v-else>You've reached your maximum quotes count. Delete some quotes to add new ones.</p>
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

<style scoped>
.counter {
  width: 100%;
  margin-top: -10px;
  background-color: rgba(238, 238, 238, 1);
  border: none;
}

.progress {
  margin: 0;
  color: white;
  min-width: 50px;
  border-radius: 0;
  border: none;
  transition: width 500ms;
}

.green {
  background-color: rgba(106,216,106,1);
}

.red {
  background-color: rgba(236, 100, 75, 1);
}
</style>
