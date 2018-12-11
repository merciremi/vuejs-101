<template>
  <div class="user-details">
    <h3>{{ user.firstName }}</h3>
    <p class="component-notice">(This is child component #1.)</p>
    <ul>
      <li>Occupation:
        <span v-if="user.occupation.length > 0" class="capitalize">{{ user.occupation }}</span>
        <span v-else>No occupation indicated</span>
      </li>
      <li>Technical Stack:
        <span v-if="user.stack.length > 0" class="capitalize">{{ formatArray(user.stack) }}</span>
        <span v-else>No stack indicated yet</span>
      </li>
      <li>Website:
        <span v-if="user.websiteUrl.length > 0">
          <a :href="user.websiteUrl">{{ user.websiteUrl}}</a>
        </span>
        <span v-else>No website indicated yet</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    formatArray(array) {
      return array.join(', ');
    }
  }
};
</script>

<style scoped>
a {
  color: rgba(102, 204, 153, 1);
  &:visited {
    color: rgba(102, 204, 153, 1);
  }
}

.user-details {
  text-align: left;
  padding: 5px 20px 10px 20px;
  margin: 20px;
  background-color: rgba(232, 236, 241, 1);
  border-bottom: 10px solid rgba(106,216,106,0.2);
}
</style>
