<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <!-- .trim remove whitespaces -->
            <input
            type="text"
            id="email"
            class="form-control"
            v-model.trim="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <!-- .lazy postpone update till user click on something else -->
            <input
            type="password"
            id="password"
            class="form-control"
            v-model.lazy="userData.password">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
            type="number"
            id="age"
            class="form-control"
            v-model.lazy="userData.age">
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
          id="message"
          rows="5"
          class="form-control"
          v-model="message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <!-- Vuejs will detect the two checkboxes and merge the two values sent to the same property in an array -->
              <input
              type="checkbox"
              id="sendmail"
              value="SendMail"
              v-model="newsletters"> Send Mail
            </label>
            <label for="sendInfomail">
              <input
              type="checkbox"
              id="sendInfomail"
              value="SendInfoMail"
              v-model="newsletters"> Send Infomail
            </label>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <!-- VueJS does two things here:
            - Fugures that the two radio buttons belongs together since they share the same v-model
            - Store the value of the radio button selected in property -->
            <input
            type="radio"
            id="male"
            value="Male"
            v-model="gender"> Male
          </label>
          <label for="female">
            <input
            type="radio"
            id="female"
            value="Female"
            v-model="gender"> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
          id="priority"
          class="form-control">
          <option></option>
        </select>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button
        class="btn btn-primary">Submit!
      </button>
    </div>
  </div>
</form>
<hr>
<div class="row">
  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Your Data</h4>
      </div>
      <div class="panel-body">
        <p>Mail: {{ userData.email }}</p>
        <p>Password: {{ userData.password }}</p>
        <p>Age: {{ userData.age }}</p>
        <!-- white-space: pre => CSS style to display multiline message -->
        <p style="white-space: pre">Message: {{ message }}</p>
        <p><strong>Send Mail?</strong></p>
        <ul>
          <li v-for="newsletter in newsletters">{{ newsletter }}</li>
        </ul>
        <p>Gender: {{ gender }}</p>
        <p>Priority:</p>
        <p>Switched:</p>
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
      userData: {
        email: '',
        password: '',
        age: null
      },
      message: 'A short message',
      newsletters: [],
      gender: ''
    }
  }
}
</script>

<style>

</style>
