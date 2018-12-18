<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="title">Filters & Mixins</h1>
        <hr>
        <p>{{ text | toUppercase | to-lowercase }}</p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Hello there'
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style>
body {
  padding: 50px;
  text-align: center;
  font-family: monospace;
}

h2 {
  font-size: 2em;
}

p {
  font-size: 16px;
}

hr {
  margin: 40px 0;
  border: 3px solid rgba(106,216,106,0.2);
}

footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 3px solid rgba(106,216,106,0.2);
}

.title {
  margin: 0 auto;
  padding-bottom: 20px;
}

.title h1 {
  display: inline-block;
  font-size: 3em;
  font-weight: bold;
  margin: 20px;
  border-bottom: 3px solid rgba(106,216,106,0.5);
  box-shadow: inset 0 -8px 0 rgba(106,216,106,0.5);
}

.output {
  text-align: left;
  padding-left: 20px;
  border-left: 3px solid rgba(106,216,106,0.5);
}
</style>
