<template>
  <div class="container">
    <form v-if="submitted == false">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
            <div class="form-group">
              <label for="first-name">First Name</label>
              <input type="text" id="first-name" class="form-control" v-model.lazy="user.firstName">
              <label for="last-name">Last Name</label>
              <input type="text" id="last-name" class="form-control" v-model.lazy="user.lastName">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" class="form-control" v-model="user.email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" class="form-control" v-model="user.password">
            </div>
            <div class="form-group">
              <p>Store data?</p>
              <label for="yes">
              <input type="radio" id="yes" value="yes" v-model="user.storeData">Yes</label>
              <label for="no">
              <input type="radio" id="no" value="no" v-model="user.storeData">No</label>
            </div>
            <div class="form-group">
              <input type="submit" value="Submit!" @click.prevent="submitted = !submitted">
            </div>
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    <hr>
    </form>
    <div class="row" v-if="submitted == true">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }}</p>
            <p>Mail: {{ user.email }}</p>
            <p>Password: {{ user.password }}</p>
            <p>Store in Database?: {{ user.storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        storeData: ''
      },
      submitted: false
    }
  },
  computed: {
    fullName() {
      return this.user.firstName + ' ' + this.user.lastName;
    }
  }
};
</script>

<style>
</style>
