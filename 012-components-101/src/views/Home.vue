<template>
  <div class="home">
    <img alt="Remi" src="../assets/remi-mercier.jpg">
    <hr>
    <div class="app-status-block">
      <p class="status-title">Bob's First App Status:</p>
      <BobStatus/>
    </div>
    <div class="app-status-block">
      <p class="status-title">Bob's Second App Status:</p>
      <BobStatus/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BobStatus from '@/components/BobStatus.vue' // @ is an alias to /src

@Component({
  components: {
    BobStatus
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  img {
    width: 200px;
    border-radius: 50%;
  }

  .app-status-block {
    margin: 50px 0px;
  }

  .status-title {
    text-decoration: underline;
  }
</style>
