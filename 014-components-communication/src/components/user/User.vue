<template>
  <div class="component">
    <div class="contact">
      <img :src="user.avatarUrl" alt="">
      <div class="contact-info">
        <h2 class="capitalize">{{ fullName() }}</h2>
        <p class="component-notice">(This is the parent component.)</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <appUserDetail  :user="user"/>
      </div>
      <div class="col-xs-12 col-sm-6">
        <appUserEdit  :user="user"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from '@/components/user/UserDetail'
import UserEdit from '@/components/user/UserEdit'

export default {
  data () {
    return {
      user: {
        firstName: 'Rémy',
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
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
.component {
  margin: 10px;
  background-color: rgba(238, 238, 238, 0.5);
  border: 10px solid rgba(106,216,106,0.5);
}

.contact {
  text-align: left;
}

.contact-info {
  display: inline-block;
}

img {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: -40px 20px 0px 20px;
  border-radius: 50%;
  background-color: rgba(102, 204, 153, 1);
}
</style>
