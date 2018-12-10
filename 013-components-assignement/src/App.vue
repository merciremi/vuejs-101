<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-servers-detail></app-servers-detail>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import AppServers from '@/components/AppServers.vue'
import ServersDetail from '@/components/ServersDetail.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-servers': AppServers,
    'app-servers-detail': ServersDetail
  }
};
</script>

<style>
  h1, p, li {
    font-family: monospace;
  }
</style>
