<template>
  <div class="form-group">
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" class="form-control" :value="firstName" @input="changeName(true, $event)">
    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" class="form-control" :value="lastName" @input="changeName(false, $event)">
  </div>
</template>

<script>
export default {
props: ['value'],
methods: {
  changeName(isFirst, event) {
    let name = '';
    if (isFirst) {
      name = event.target.value + ' ' + this.lastName;
    } else {
      name = this.firstName + ' ' + event.target.value;
    }
    this.value = name;
    this.$emit('input', this.value);
  }
},
computed: {
  firstName() {
    return this.value.split(' ')[0];
  },
  lastName() {
    return this.value.split(' ')[1];
  }
}
};
</script>

<style></style>
