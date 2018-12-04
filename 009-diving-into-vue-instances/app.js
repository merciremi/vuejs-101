new Vue({
  el: '#app1',
  data: {
    title: 'A first VueJS instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The first VueJS instance (Updated)');
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
// Each instance cannot (so far) access each other information
new Vue({
  el: '#app2',
  data: {
    title: 'The second VueJS instance',
    imageUrl: 'https://media.giphy.com/media/9kDR0U4gaguic/giphy.gif',
    showImage: false
  },
  methods: {
    revealImage: function() {
      this.showImage = true
    }
  }
});
