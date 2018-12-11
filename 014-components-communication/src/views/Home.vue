<template>
  <div class="home">
    <appNavigation/>
    <appUser/>
    <appFooter/>
  </div>
</template>

<script>
import Footer from '@/components/shared/Footer.vue'
import Navigation from '@/components/shared/Navigation.vue'
import User from '@/components/user/User.vue'

export default {
  name: 'home',
  components: {
    appFooter: Footer,
    appNavigation: Navigation,
    appUser: User
  }
}
</script>
