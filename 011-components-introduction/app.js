// Create a global component accessible by all instances
// Vue.component('my-cmp', {});

// Transform the global component into a local one using var
var cmp = {
  // In a component, data is a function
  data: function() {
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server status: {{ status }} - <button @click="changeStatus">Back to normal</button></p>',
  methods: {
    changeStatus: function() {
      this.status = 'Normal';
    }
  }
};

new Vue({
  el: '#app',
  // This is where you link a local component to an instance
  components: {
    'my-cmp': cmp
  }
});

new Vue({
  el: '#app2'
});


