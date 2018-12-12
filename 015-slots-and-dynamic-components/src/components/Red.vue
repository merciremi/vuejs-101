<template>
  <div>
    <slot name="title"></slot>
    <hr>
    <slot name="content"></slot>
  </div>
</template>

<script>

</script>

<style scoped>
div {
  background-color: rgba(236, 100, 75, 1);
  padding: 30px;
  margin: 20px auto;
  text-align: center
}
</style>
