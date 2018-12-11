<template>
  <div class="container">
    <div class="row">
      <app-navigation></app-navigation>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <app-user></app-user>
      </div>
    </div>
    <div class="row">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/shared/Navigation.vue'
import Footer from '@/components/shared/Footer.vue'
import User from '@/components/user/User.vue'

export default {
  name: 'home',
  components: {
    'app-user': User,
    'app-navigation': Navigation,
    'app-footer': Footer
  }
}
</script>
