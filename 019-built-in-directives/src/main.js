import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'rgba(236, 100, 75, 1)';
  }
});

Vue.directive('highlightRed', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = binding.value;
  }
});

Vue.directive('highlightArgument', {
  bind(el, binding, vnode) {
    if (binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }
});

Vue.directive('highlightModifier', {
  bind(el, binding, vnode) {
    let delay = 0;
    // modifiers can be found in the .modifiers object
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      el.style.backgroundColor = binding.value;
    }, delay);
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app');
