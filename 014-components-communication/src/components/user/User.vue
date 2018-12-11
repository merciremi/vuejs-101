<template>
  <div class="component">
    <div class="contact">
      <div class="contact-avatar"></div>
      <div class="contact-info">
        <h2>{{ fullName() }}</h2>
        <p>This is the parent component.</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :user="user"></app-user-detail>
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
  methods: {
    fullName () {
      return this.user.firstName + ' ' + this.user.lastName;
    }
  },
  components: {
    'app-user-detail': UserDetail,
    'app-user-edit': UserEdit
  }
};
</script>

<style scoped>
.component {
  background-color: rgba(238, 238, 238, 0.5);
}

.contact {
  text-align: left;
}

.contact-info {
  display: inline-block;
}

.contact-avatar {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 20px;
  border-radius: 50%;
  background-color: rgba(102, 204, 153, 1);
}
</style>
