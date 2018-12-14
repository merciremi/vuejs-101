<template>
  <div class="quote">
    <slot></slot>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.quote {
  display: inline-block;
  width: 30%;
  padding: 10px;
  margin: 10px;
  border: 3px solid rgba(106,216,106,1);
}

.quote:hover {
  border: 3px solid rgba(236, 100, 75, 1);
  opacity: 0.5;
}
</style>
