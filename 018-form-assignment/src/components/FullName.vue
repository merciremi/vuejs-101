<template>
  <div class="form-group">
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" class="form-control" v-model.lazy="user.firstName">
    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" class="form-control" v-model.lazy="user.lastName">
  </div>
</template>

<script>
export default {
props: ['user']
};
</script>

<style></style>
