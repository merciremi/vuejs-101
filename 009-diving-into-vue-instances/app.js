var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'A first VueJS instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The first VueJS instance (Updated)');
      // $refs stores all ref tags written in HTML template
      this.$refs.myButton.innerText = 'Paragraph is now visible';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

// You can have multiple Vue instances in a page depending on the business logic
// Instances cannot be accessed from outsite except when stored in a variable
var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second VueJS instance',
    imageUrl: 'https://media.giphy.com/media/9kDR0U4gaguic/giphy.gif',
    showImage: false
  },
  methods: {
    revealImage: function() {
      this.showImage = true
    },
    changeFirstInstanceTitle: function() {
      vm1.title = 'Title changed by second Vue instance!'
    }
  }
});

// When instances are stored in variables, you can access them with JS from outside
// thanks to VueJS proxying data, methods, etc...
setTimeout(function() {
  vm2.title = 'Title changed by timer coded outsite of said instance'
},2000);

// When an instance is created, VueJS gives each data and method, getters and setters
// But when you add a property to an instance from outside, Vue does not do it
vm1.newMethod = 'New method!';
console.log(vm1);
