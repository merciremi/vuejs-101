<template>
  <div class="home">
    <img alt="Remi" src="../assets/remi-mercier.jpg">
    <BobStatus/>
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
</style>
