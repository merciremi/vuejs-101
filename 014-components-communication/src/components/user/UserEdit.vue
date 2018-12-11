<template>
  <div class="user-edit">
    <h3>Edit {{ user.firstName }}'s details here:</h3>
    <p>This is child component #2.</p>
    <div class="input-fields">
      <input type="text" placeholder="Update your first name">
      <input type="text" placeholder="Update your last name">
      <input type="text" placeholder="Update your avatar URL">
      <input type="text" placeholder="Update your occupation">
      <input type="text" placeholder="Update your technical stack">
      <input type="text" placeholder="Update your website URL">
    </div>
  </div>
</template>

<script>
export default {
  props: ['user']
};
</script>

<style scoped>
.user-edit {
  text-align: left;
  padding: 20px;
  margin: 20px;
  background-color: rgba(232, 236, 241, 1);
}

input {
  display: block;
  width: 100%;
  margin: 10px 10px 10px  0;
}
</style>
