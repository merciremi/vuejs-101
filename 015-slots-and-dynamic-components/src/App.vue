<template>
  <div class="container">
    <div class="row">
      <h1>Dynamic components and slots</h1>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button @click="selectedComponent = 'app-blue', selectedColor = 'blue'" class="btn blue">Load Blue Template</button>
        <button @click="selectedComponent = 'app-green', selectedColor = 'green'" class="btn green">Load Green Template</button>
        <button @click="selectedComponent = 'app-red', selectedColor = 'red'" class="btn red">Load Red Template</button>
        <button @click="selectedComponent = ''" class="btn grey">Clear Template</button>
        <hr>
        <component :is="selectedComponent">
          <h2 slot="title">This is a {{ selectedColor }}-backgrounded div.</h2>
          <p slot= "content">And it's damn pretty.</p>
        </component :is="selectedComponent">
      </div>
    </div>
  </div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
  data() {
    return {
      selectedColor: '',
      selectedComponent: ''
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
body {
  font-family: monospace;
}

button {
  font-family: monospace;
  padding: 10px 20px;
  margin: 10px;
  border: none;
}

h1 {
  border-bottom: 10px solid rgba(106,216,106,0.5);
  margin-bottom: 40px;
}

.blue {
  background-color: rgba(0, 181, 204, 1);
}

.green {
  background-color: rgba(123, 239, 178, 1);
}

.red {
  background-color: rgba(236, 100, 75, 1);
}

.grey {
  background-color: rgba(232, 236, 241, 1);
}

</style>
