<template>
  <div class="user-edit">
    <h3>Edit {{ user.firstName }}'s details here:</h3>
    <p class="component-notice">(This is child component #2.)</p>
    <div class="input-fields">
      <input type="text" placeholder="Update your first name" ref="firstName">
      <input type="text" placeholder="Update your last name" ref="lastName">
      <input type="url" placeholder="Update your avatar URL" ref="avatarUrl">
      <input type="text" placeholder="Update your occupation" ref="occupation">
      <input type="text" placeholder="Update your technical stack" ref="stack">
      <input type="url" placeholder="Update your website URL" ref="websiteUrl">
      <input type="submit" value="Save changes" @click="updateUser" class="submit-button">
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    updateUser() {
      this.updateFirstName();
      this.updateLastName();
      this.updateAvatarUrl();
      this.updateOccupation();
      this.updateWebsiteUrl();
      this.updateStack();
    },
    updateFirstName() {
      let newFirstName = this.cleanInput(this.$refs.firstName.value);
      if (newFirstName.length > 0) {
        this.user.firstName = newFirstName;
      }
    },
    updateLastName() {
      let newLastName = this.cleanInput(this.$refs.lastName.value);
      if (newLastName.length > 0) {
        this.user.lastName = newLastName;
      }
    },
    updateAvatarUrl() {
      let newAvatarUrl = this.cleanInput(this.$refs.avatarUrl.value);
      if (newAvatarUrl.length > 0) {
        this.user.avatarUrl = newAvatarUrl;
      }
    },
    updateOccupation() {
      let newOccupation = this.cleanInput(this.$refs.occupation.value);
      if (newOccupation.length > 0) {
        this.user.occupation = newOccupation;
      }
    },
    updateWebsiteUrl() {
      let newWebsiteUrl = this.cleanInput(this.$refs.websiteUrl.value);
      if (newWebsiteUrl.length > 0) {
        this.user.websiteUrl = newWebsiteUrl;
      }
    },
    updateStack() {
      let newStack = this.stringToArray(this.$refs.stack.value);
      console.log(newStack);
      if (newStack[0].length > 0) {
        this.user.stack = newStack;
      }
    },
    cleanInput(input) {
      return input.trim();
    },
    stringToArray(string) {
      return string.trim().split(',');
    }
  }
};
</script>

<style scoped>
.user-edit {
  text-align: left;
  padding: 5px 20px 10px 20px;
  margin: 20px;
  background-color: rgba(232, 236, 241, 1);
}

input {
  display: block;
  width: 100%;
  margin: 10px 10px 10px  0;
}

.submit-button {
  border: none;
  padding: 10px 20px;
  background-color: rgba(102, 204, 153, 1);
  color: white;
  font-weight: bold;
}
</style>
