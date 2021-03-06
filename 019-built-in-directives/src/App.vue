<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
        <h1 class="title">Directives</h1>
        <hr>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
        <h2>Built-in directives</h2>
        <p v-text="'Some text in a v-if directive'"></p>
        <p v-html="'<strong>Some html in a v-html directive (that should be sanitized).</strong>'"></p>
        <hr>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
        <h2>Custom directives</h2>
        <div class="focus-block">
          <p v-highlight>Paragraph colored with a custom directive</p>
          <p v-highlightRed="'rgba(106,216,106,1)'">Paragraph colored with a custom directive <strong>passing a value</strong></p>
          <p v-highlightArgument:background="'rgba(247, 202, 24, 1)'">Paragraph with a custom directive <strong>passing a :background argument</strong> to determine which - between background or font - should be colored</p>
          <p v-highlightArgument="'rgba(247, 202, 24, 1)'">Same paragraph <strong>without the :background argument</strong></p>
          <!-- It is possible to chain modifiers -->
          <p v-highlightModifier.delayed="'rgba(106,216,106,1)'">This paragraph has a <code>delayed</code> modifier and should coloured after 3 seconds.</p>
          <p v-local-highlight.delayed="'rgba(247, 202, 24, 1)'">This paragraph has a local<code>delayed</code> modifier and should coloured after 3 seconds.</p>
          <p v-local-highlight.delayed.blink="{mainColor: 'rgba(106,216,106,1)', secondColor: 'rgba(129, 207, 224, 1)'}">This paragraph has two local modifiers (<code>delayed</code> and <code>blink</code>).</p>
          <p v-myOn:click="reverseText" class="underlined">
            <span v-if="reversedString.length == 0">Click to reverse the text of this paragraph. There's a custom <code>v-on</code> on it.</span>
            <span v-else>{{ reversedString }}</span>
          </p>
        </div>
        <div class="output">
          <strong>The five directives' hooks:</strong>
          <ul>
            <li>bind(el, binding, vnode) => Once the directive is attached to the element</li>
            <li>inserted(el, binding, vnode) => Directive inserted in parent node</li>
            <li>update(el, binding, vnode, oldVnode) => Once component is updated (without children)</li>
            <li>componentUpdated(el, binding, vnode, oldVnode) => Once component is updated (with children)</li>
            <li>unbind(el, binding, vnode) => Once the directive is removed from the element.</li>
          </ul>
          <code>binding, vnode, oldVnode should be treated as read only.</code>
        </div>
      </div>
    </div>
    <footer>
      <p>Made with ❤️ and 💻 by Rémi Mercier in <span class="date">{{ new Date().getFullYear() }}</span></p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userChoice: '',
      reversedString: ''
    }
  },
  methods: {
    reverseText(value) {
      this.reversedString = Array.from(value).reverse().join('');
    }
  },
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        let delay = 0;
        // modifiers can be found in the .modifiers object
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        setTimeout(() => {
          el.style.backgroundColor = binding.value;
          if (binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;

            setInterval(() => {
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              el.style.backgroundColor = currentColor;
            },1000);
          }
        }, delay);
      }
    },
    'myOn': {
      bind(el, binding, vnode){
        // It is necessary to add the reverseText() in a callback
        // otherwise it triggers instantly
        el.addEventListener(binding.arg, () => {
          binding.value(el.innerText);
        })
      }
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

.focus-block {
  margin: 50px 0;
}

.focus-block p {
  margin: 30px 0;
}

.date {
  border-bottom: 3px solid rgba(106,216,106,0.5);
}

.underlined {
  border-bottom: 1px solid rgba(106,216,106,0.5);
}
</style>
