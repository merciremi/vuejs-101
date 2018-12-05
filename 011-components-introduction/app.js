// Create a global component
Vue.component('my-cmp', {
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
});

new Vue({
  el: '#app'
});

new Vue({
  el: '#app2'
});


