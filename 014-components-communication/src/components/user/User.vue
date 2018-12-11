<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from '@/components/user/UserDetail.vue';
import UserEdit from '@/components/user/UserEdit.vue';

export default {
  data () {
    return {
      user: {
        firstName: 'Rémi',
        lastName: 'Mercier',
        occupation: '',
        avatarUrl: '',
        websiteUrl: '',
        stack: []
      }
    }
  },
  components: {
    'app-user-detail': UserDetail,
    'app-user-edit': UserEdit
  }
};
</script>

<style>
</style>
