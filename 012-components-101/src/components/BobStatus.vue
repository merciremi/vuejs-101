<template>
  <div class="hello">
    <div>
      <span class="status">Bob Status:</span> {{ status }}
      <button @click="changeStatus">Change Bob Status</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      status: 'Bob wuz here'
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Bob do da ting!';
    }
  }
};
</script>

<style lang="scss">
  button {
    display: inline-block;
    font-weight: bold;
    border: none;
    padding: 5px 10px;
    margin: 0 20px;
    background-color: #5BB884;
    color: white;
    &:hover {
      background-color: #249153;
    }
  }

  .status {
    font-weight: bold;
    color: #5BB884;
  }
</style>
